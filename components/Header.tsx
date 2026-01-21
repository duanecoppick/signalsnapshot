import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/EchoYouMiloLogo2.png"
                alt="EchoYou Logo"
                width={350}
                height={105}
                className="h-auto w-auto max-h-28"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
