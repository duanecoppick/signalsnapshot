export default function CancelledPage() {
  const checkoutUrl = process.env.NEXT_PUBLIC_SIGNAL_SNAPSHOT_CHECKOUT_URL ?? "https://buy.stripe.com/28E28s8zE5Rh8R3cvqbsc01"

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Looks like you didn't complete checkout.
              </span>
            </h1>

            <p className="text-2xl text-gray-700 font-semibold max-w-3xl mx-auto leading-relaxed">
              If you're already posting, you don't need more content — you need clarity on what your signals are communicating.
            </p>
          </div>

          {/* Objection Crusher */}
          <div className="mt-12 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                If you're hesitating because...
              </span>
            </h2>

            <div className="space-y-5 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-purple-600">"I'm not sure what I'll actually get"</span> — You'll receive a clear diagnosis of your four core signals (Watch Time, Relevance, Identity, Engagement Quality), your Visibility Mirage™, and three directional moves to focus on next.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-blue-600">"I'm worried it'll be too generic"</span> — Signal Snapshot™ is account-type aware. Your results are interpreted based on whether you run a talking-head, faceless, AI avatar, or mixed account — never compared to the wrong standard.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-cyan-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-cyan-600">"I don't want another course or content plan"</span> — This isn't one. Signal Snapshot™ is a diagnostic — like an MRI for your Instagram presence. It shows you what's broken so you stop fixing the wrong things.
                </p>
              </div>
            </div>
          </div>

          {/* Reframe Section */}
          <div className="mt-16 bg-white rounded-2xl p-10 border-2 border-purple-200">
            <h2 className="text-3xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                What Signal Snapshot™ Actually Is
              </span>
            </h2>
            <p className="text-xl text-gray-800 text-center leading-relaxed font-semibold">
              Signal Snapshot™ is a one-time diagnosis — not a course, not a content plan, and not another tactic list.
            </p>
          </div>

          {/* What You Get */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Here's Exactly What You Get
              </span>
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="text-lg text-gray-800 font-semibold">
                    Your 4-signal diagnosis: Watch Time, Relevance, Identity, Engagement Quality
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="text-lg text-gray-800 font-semibold">
                    Your Visibility Mirage™ identified (why effort isn't converting)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-cyan-50 to-purple-50 p-6 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="text-lg text-gray-800 font-semibold">
                    What's working / what's leaking / what not to fix next
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <p className="text-lg text-gray-800 font-semibold">
                    3 high-level next moves (no tactics overload)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compatibility & Time */}
          <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
            <p className="text-xl text-gray-800 font-semibold mb-4">
              Works whether you're talking head, faceless, AI avatar, or mixed.
            </p>
            <p className="text-lg text-gray-700">
              Takes ~20 minutes. Estimates are fine. No prep required.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mt-12 text-center">
            <a
              href={checkoutUrl}
              className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Complete Your Purchase Now
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Get signal clarity in 20 minutes
            </p>
          </div>

          {/* Secondary Link */}
          <div className="mt-8 text-center">
            <a
              href="https://askmiloai.com/signalsnapshot"
              className="text-lg text-purple-600 hover:text-purple-800 underline font-semibold transition-colors"
            >
              ← Back to Signal Snapshot
            </a>
          </div>

          {/* Micro-FAQ */}
          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Quick Questions
            </h3>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-bold text-purple-600 mb-2">
                  Do I need metrics?
                </h4>
                <p className="text-gray-700">
                  No. Estimates and patterns work. Signal Snapshot™ is designed to work with what you observe, not require spreadsheets or deep analytics diving.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-bold text-blue-600 mb-2">
                  Is this a course?
                </h4>
                <p className="text-gray-700">
                  No. It's a diagnostic. Signal Snapshot™ tells you what's wrong so you stop fixing the wrong things. If you want ongoing signal intelligence, that's where Milo™ comes in.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-white p-6 rounded-xl">
                <h4 className="text-lg font-bold text-cyan-600 mb-2">
                  Will I get tactics?
                </h4>
                <p className="text-gray-700">
                  No. This is clarity + direction. You'll receive three high-level directional moves aligned to your signal state — not step-by-step tactics, but clear guidance on where to focus next.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <a
              href={checkoutUrl}
              className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-xl font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Your Signal Clarity Now
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
