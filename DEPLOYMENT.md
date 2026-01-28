# Signal Snapshot Deployment Guide

## Overview
This guide explains how to deploy Signal Snapshot to work on both domains:
- `signalsnapshot.vercel.app` (standalone deployment)
- `askmiloai.com/signalsnapshot` (subdirectory on main domain)

## Changes Made
1. Removed `basePath` and `assetPrefix` from `next.config.js`
2. This allows the app to work correctly at `signalsnapshot.vercel.app/`

## Deployment Instructions

### Step 1: Deploy to signalsnapshot.vercel.app
1. Push the updated code to your repository
2. In Vercel dashboard for the `signalsnapshot` project:
   - Go to Settings → Environment Variables
   - **Remove** `NEXT_PUBLIC_BASE_PATH` if it exists (or set it to empty)
   - Redeploy the project
3. Test at `https://signalsnapshot.vercel.app/` - it should now work!

### Step 2: Configure askmiloai.com/signalsnapshot
You need to add a rewrite rule in your **main askmiloai.com project** to proxy requests to the Signal Snapshot deployment.

#### Option A: If askmiloai.com is a Next.js app
Add this to your askmiloai.com `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/signalsnapshot',
        destination: 'https://signalsnapshot.vercel.app',
      },
      {
        source: '/signalsnapshot/:path*',
        destination: 'https://signalsnapshot.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
```

#### Option B: If askmiloai.com uses Vercel configuration
Add a `vercel.json` file to your askmiloai.com project:

```json
{
  "rewrites": [
    {
      "source": "/signalsnapshot",
      "destination": "https://signalsnapshot.vercel.app"
    },
    {
      "source": "/signalsnapshot/:path*",
      "destination": "https://signalsnapshot.vercel.app/:path*"
    }
  ]
}
```

#### Option C: Use Vercel's Proxy
In your askmiloai.com Vercel project dashboard:
1. Go to Settings → Domains
2. Add a rewrite rule from `/signalsnapshot` to `signalsnapshot.vercel.app`

### Step 3: Test Both URLs
After deployment:
- ✅ `https://signalsnapshot.vercel.app/` should show the styled page
- ✅ `https://askmiloai.com/signalsnapshot` should show the same styled page

## Why This Approach?
Using rewrites/proxy is better than `basePath` because:
1. Each deployment works independently at its root path
2. Assets (CSS, JS, images) load correctly
3. Easier to maintain and debug
4. No environment variable juggling between deployments

## Troubleshooting

### If signalsnapshot.vercel.app still shows 404:
- Check Vercel environment variables - ensure `NEXT_PUBLIC_BASE_PATH` is removed
- Redeploy the project after clearing the variable
- Clear your browser cache

### If askmiloai.com/signalsnapshot still shows unstyled page:
- Verify the rewrite rules are correctly configured
- Check browser Network tab to see if assets are 404ing
- Ensure the rewrite is proxying ALL paths including `/_next/*`

### If images don't load on askmiloai.com/signalsnapshot:
- Images in the `public` folder need to be proxied too
- Make sure the `:path*` rewrite rule is working

## Need Help?
If you encounter issues, check:
1. Vercel deployment logs
2. Browser console for errors
3. Network tab to see which assets fail to load
