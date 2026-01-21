export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-16 text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Welcome to Signal Snapshot™
            </span>
          </h1>

          <p className="text-2xl text-gray-700 font-semibold mb-8">
            Your payment was successful!
          </p>

          {/* Next Steps Section */}
          <div className="mt-12 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-10 text-left">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                What Happens Next
              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Check Your Email
                  </h3>
                  <p className="text-lg text-gray-700">
                    You'll receive a confirmation email with your receipt and access instructions within the next few minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Access Your Signal Snapshot™
                  </h3>
                  <p className="text-lg text-gray-700">
                    Follow the link in your email to get started with your diagnostic and discover what's actually happening with your Instagram signals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Get Your Results
                  </h3>
                  <p className="text-lg text-gray-700">
                    Complete the diagnostic and receive your personalized Signal Snapshot™ report showing exactly what's helping, what's leaking, and what to fix next.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-white rounded-2xl border-2 border-purple-200">
            <p className="text-lg text-gray-800 mb-4">
              <span className="font-bold text-purple-600">Questions?</span> Check your email for support information or contact us directly.
            </p>
            <p className="text-lg text-gray-700">
              We're excited to help you gain clarity on your Instagram signals.
            </p>
          </div>

          {/* Footer Message */}
          <div className="mt-12">
            <p className="text-xl font-semibold text-gray-900">
              Thank you for choosing Signal Snapshot™
            </p>
            <p className="text-lg text-gray-600 mt-2">
              You're about to see what's actually happening with your content.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
