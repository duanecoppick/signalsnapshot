'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200 hover:border-purple-300 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-50 transition-colors"
      >
        <span className="text-xl font-semibold text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 text-purple-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-8 pb-6 text-lg text-gray-700 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is Signal Snapshot™?",
      answer: "Signal Snapshot™ is a diagnostic tool that reveals how Instagram's algorithm and potential buyers are interpreting your content through four core signals: Watch Time, Relevance, Identity, and Engagement Quality. It's not a content strategy or coaching program—it's a one-time analysis that shows you what's actually blocking your sales."
    },
    {
      question: "How long does it take?",
      answer: "About 20 minutes. You'll answer 16 structured questions about your Instagram account, and Signal Snapshot™ will immediately diagnose your signal state, identify your Visibility Mirage™, and provide clear direction on what to focus on next."
    },
    {
      question: "Do I need exact metrics from Instagram?",
      answer: "No. While exact metrics help, estimates and patterns are enough. Signal Snapshot™ is designed to work with what you observe, not require spreadsheets or deep analytics diving."
    },
    {
      question: "What if I'm a faceless or AI avatar account?",
      answer: "Signal Snapshot™ is account-type aware. You'll identify whether you run a talking-head account, faceless account, AI avatar account, or a mix—and your results will be interpreted accordingly. You're never compared to the wrong standard."
    },
    {
      question: "Is this just another Instagram course?",
      answer: "No. Signal Snapshot™ isn't a course, training, or step-by-step program. It's a diagnostic—like an MRI for your Instagram presence. It tells you what's wrong so you stop fixing the wrong things. If you want ongoing signal intelligence, that's where Milo™ comes in."
    },
    {
      question: "What's the difference between Signal Snapshot™ and Milo™?",
      answer: "Signal Snapshot™ is a one-time diagnostic that gives you clarity right now. Milo™ is the full signal intelligence system that monitors and interprets your signals continuously over time. Think of Signal Snapshot™ as the entry point—if you want your signals working consistently, Milo™ is the next step."
    },
    {
      question: "Will this tell me what content to post?",
      answer: "No. Signal Snapshot™ doesn't generate content ideas or give you posting tactics. It shows you what's broken at the signal level so you know where to focus your effort. It tells you what NOT to do next, which is often more valuable than another content idea."
    },
    {
      question: "What if I'm just starting out on Instagram?",
      answer: "Signal Snapshot™ is designed for people who are already posting and showing up but aren't seeing consistent sales. If you're brand new with minimal content history, you may not have enough signal data yet for the diagnostic to be useful."
    },
    {
      question: "Is there a refund policy?",
      answer: "No. Signal Snapshot™ is a diagnostic that delivers immediate clarity the moment you complete it. Because the value is delivered instantly and in full, refunds aren't offered. This is priced as a low-risk entry point—not a high-commitment offer."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-16 max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Turn Your Instagram Content Into Consistent Sales
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold max-w-4xl mx-auto leading-relaxed">
              Steal the Signal Snapshot™ Framework to find what's blocking your Instagram sales without posting more, chasing trends or guessing what's wrong.
            </h2>

            {/* Product Image */}
            <div className="py-8 flex justify-center">
              <Image
                src="/SignalSnapshotBundle.png"
                alt="Signal Snapshot Bundle"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>

            <div className="pt-8">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-xl font-semibold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                SAY NO MORE I'M IN
              </a>
            </div>
          </div>

          {/* Section 2: Benefits */}
          <div className="mt-16 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Signal Snapshot™ helps you:
              </span>
            </h3>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border-l-4 border-purple-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-purple-600">Get clear on why your Instagram visibility isn't converting into sales,</span> so you can stop guessing what's wrong and focus on the real bottleneck.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-blue-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-blue-600">Stop wasting time posting, tweaking, and experimenting blindly,</span> so you can avoid burnout and finally feel confident your effort is going in the right direction.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-purple-50 p-8 rounded-2xl border-l-4 border-cyan-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-cyan-600">Start attracting the right kind of attention (buyers, not just browsers),</span> so engagement begins to feel useful instead of frustrating.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-purple-400">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-purple-600">Finally understand what not to fix next,</span> so you don't fall into rebranding, trend-chasing, or content overhauls that don't address the real issue.
                </p>
              </div>
            </div>

            {/* CTA Button after Section 2 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                GRAB YOUR SIGNAL SNAPSHOT™ NOW
              </a>
            </div>
          </div>

          {/* Section 3: Who It's For */}
          <div className="mt-20 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Who It's For
              </span>
            </h3>

            <div className="space-y-5 max-w-4xl mx-auto mt-12">
              <div className="bg-white p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-purple-600">Instagram-based entrepreneurs</span> who are already posting and showing up, and want consistent sales without posting more, chasing trends, or guessing what's broken.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-blue-600">Creators and personal brands</span> who get engagement but want it to turn into demand without rewriting their content or rebranding again.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 transition-colors">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-cyan-600">Coaches, consultants, and experts</span> who know their offer works, and want buyers to recognize it faster without forcing CTAs or selling harder.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-purple-600">Faceless or AI-native accounts</span> that want clarity on what's actually working without needing to build a personality-led brand.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-blue-600">Business owners tired of "posting and praying"</span> who want to understand why effort hasn't matched results without months of trial and error.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 transition-colors">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-bold text-cyan-600">People who feel close—but can't see the gap,</span> and want a clear diagnosis without hiring a strategist or buying another course.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl text-gray-800 font-semibold italic max-w-3xl mx-auto leading-relaxed">
                If you're already creating content and still wondering why sales feel inconsistent, this was built for you.
              </p>
            </div>

            {/* CTA Button after Section 3 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                SNAG YOUR SIGNAL-LEVEL CLARITY HERE
              </a>
            </div>
          </div>

          {/* Section 4: The Story */}
          <div className="mt-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                The Story Behind Signal Snapshot™
              </span>
            </h3>

            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
              <p className="font-semibold text-xl">For a long time, I thought I had a content problem.</p>

              <p>The posts were going out.</p>

              <p>Engagement existed.</p>

              <p>People were watching, liking, saving.</p>

              <p className="font-semibold">But sales were inconsistent.</p>

              <p>Growth would show up… then disappear.</p>

              <p>Momentum would build… then stall.</p>

              <p>And no matter what I tried, I couldn't tell what was actually wrong.</p>

              <p className="font-semibold">Everyone had advice:</p>

              <p className="pl-6">Post more.</p>

              <p className="pl-6">Try new hooks.</p>

              <p className="pl-6">Change formats.</p>

              <p className="pl-6">Engage harder.</p>

              <p>None of it explained why things worked one week and failed the next.</p>

              <p className="font-bold text-xl text-purple-600">That's when I realized the real issue wasn't content.</p>

              <p className="font-bold text-xl text-purple-600">It was signals.</p>

              <p>Instagram doesn't look at content the way creators do.</p>

              <p>It interprets behavior — watch time, relevance, identity, intent — and makes quiet decisions about what gets pushed forward and what gets throttled back.</p>

              <p className="font-semibold">And most people are operating completely blind to that layer.</p>

              <p>So before Milo ever existed, I built something simpler.</p>

              <p className="pl-6">A way to see the signals clearly, without guessing.</p>

              <p className="pl-6">A way to diagnose what was happening right now, instead of waiting for months.</p>

              <p className="pl-6">A way to understand why effort wasn't turning into consistent sales.</p>

              <p className="font-bold text-xl text-cyan-600">That became Signal Snapshot™.</p>

              <p>It's not a strategy.</p>

              <p>It's not a content plan.</p>

              <p>It's a diagnosis.</p>

              <p className="font-semibold">Signal Snapshot shows you how your content is being interpreted — by the algorithm and by buyers — so you can finally see what's helping, what's leaking, and what not to fix next.</p>

              <p>For many people, that clarity alone is a relief.</p>

              <p>And for those who want their signals working consistently over time, that's where Milo comes in.</p>

              <p className="font-bold text-xl text-gray-900 border-l-4 border-purple-500 pl-6 py-2">
                Signal Snapshot doesn't help you do more.
              </p>

              <p className="font-bold text-xl text-gray-900 border-l-4 border-purple-500 pl-6 py-2">
                It helps you see what actually matters — before you waste more time fixing the wrong thing.
              </p>
            </div>

            {/* CTA Button after Section 4 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                SAY NO MORE, I'M IN
              </a>
            </div>
          </div>

          {/* Section 5: How It Works */}
          <div className="mt-20 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                How Signal Snapshot™ Works
              </span>
            </h3>

            <p className="text-xl text-gray-800 text-center max-w-3xl mx-auto leading-relaxed">
              Signal Snapshot™ is designed to give you clarity fast — without prep, homework, or guesswork.
            </p>

            <div className="space-y-10 max-w-4xl mx-auto mt-12">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-600 mb-4">
                  1. You Identify Your Account Type
                </h4>
                <p className="text-lg text-gray-800 mb-4">
                  You start by telling Signal Snapshot whether your account is:
                </p>
                <ul className="list-none space-y-2 pl-4 mb-4 text-gray-800">
                  <li>• Talking head</li>
                  <li>• Faceless</li>
                  <li>• AI avatar</li>
                  <li>• Or a mix</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  This matters because signals show up differently depending on how you create content.<br />
                  Your results are interpreted in context, not compared to the wrong standard.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">
                  2. You Answer 16 Simple Questions
                </h4>
                <p className="text-lg text-gray-800 mb-4">
                  You'll answer a short, structured set of questions covering four core signals:
                </p>
                <ul className="list-none space-y-2 pl-4 mb-4 text-gray-800">
                  <li>• Watch Time</li>
                  <li>• Relevance</li>
                  <li>• Identity</li>
                  <li>• Engagement Quality</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Exact metrics are optional.<br />
                  Estimates and patterns are enough.<br />
                  No spreadsheets. No prep work.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-cyan-400">
                <h4 className="text-2xl font-bold text-cyan-600 mb-4">
                  3. Your Signals Are Diagnosed
                </h4>
                <p className="text-lg text-gray-800 mb-4">
                  Each signal is evaluated and clearly labeled as:
                </p>
                <ul className="list-none space-y-2 pl-4 mb-4 text-gray-800">
                  <li>• <span className="font-semibold">Strong</span> — working in your favor</li>
                  <li>• <span className="font-semibold">Fragile</span> — inconsistent or unstable</li>
                  <li>• <span className="font-semibold">Leaking</span> — actively holding you back</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Instead of isolated tips, Signal Snapshot looks at the pattern across signals.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-600 mb-4">
                  4. Your Visibility Mirage Is Identified
                </h4>
                <p className="text-lg text-gray-800 mb-4">
                  Based on that pattern, Signal Snapshot identifies the single most likely Visibility Mirage™ you're operating inside — the reason effort hasn't turned into consistent sales.
                </p>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  You'll finally understand:
                </p>
                <ul className="list-none space-y-2 pl-4 text-gray-700">
                  <li>• Why things look good on the surface</li>
                  <li>• Why results don't stick</li>
                  <li>• What's actually limiting growth</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">
                  5. You Get Clear, Plain-English Insight
                </h4>
                <p className="text-lg text-gray-800 mb-4">
                  You'll see:
                </p>
                <ul className="list-none space-y-2 pl-4 mb-4 text-gray-800">
                  <li>• What your signals are communicating</li>
                  <li>• Why certain fixes haven't worked</li>
                  <li>• What's helping vs what's hurting</li>
                  <li>• What not to do next</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  No tactics. No overwhelm. Just clarity.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-cyan-400">
                <h4 className="text-2xl font-bold text-cyan-600 mb-4">
                  6. You See the Path Forward
                </h4>
                <p className="text-lg text-gray-800 mb-4">
                  You'll receive three high-level directional moves aligned to your signal state — not step-by-step tactics, but clear guidance on where focus should go next.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  And if you want your signals monitored and interpreted continuously as things change, that's where Milo™ becomes the natural next step.
                </p>
              </div>
            </div>

            {/* The Key Difference */}
            <div className="mt-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl p-10 text-center">
              <h4 className="text-3xl font-bold text-white mb-4">
                The Key Difference
              </h4>
              <p className="text-2xl text-white font-semibold leading-relaxed">
                Signal Snapshot™ doesn't help you do more.<br />
                It helps you stop fixing the wrong thing.
              </p>
            </div>

            {/* CTA Button after Section 5 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                SAY NO MORE I'M IN
              </a>
            </div>
          </div>

          {/* Section 6: What You Get */}
          <div className="mt-20 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                What You Get
              </span>
            </h3>

            <p className="text-xl text-gray-800 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              When you access Signal Snapshot™ (Powered by Milo™), here's exactly what's included:
            </p>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-purple-600">
                    Signal Snapshot™ Diagnostic Experience
                  </h4>
                  <span className="text-purple-600 font-bold text-xl whitespace-nowrap ml-4">
                    ($197 value)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  A one-time, guided intelligence session
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You'll answer 16 structured questions and receive a clear diagnosis across Watch Time, Relevance, Identity, and Engagement Quality — so you finally understand why your Instagram effort hasn't translated into consistent sales.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-blue-600">
                    Visibility Mirage™ Identification
                  </h4>
                  <span className="text-blue-600 font-bold text-xl whitespace-nowrap ml-4">
                    ($147 value)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  The shortcut most people never get
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You'll see which Visibility Mirage™ you're operating inside (Reach Without Revenue, Praise Without Purchase, Spiky Performer, Invisible Specialist, or Mixed Signals) — so you stop fixing the wrong problem → faster clarity, less wasted effort.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-cyan-600">
                    Plain-English Signal Breakdown
                  </h4>
                  <span className="text-cyan-600 font-bold text-xl whitespace-nowrap ml-4">
                    ($127 value)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  No metrics obsession required
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Each signal is explained in simple terms:
                </p>
                <ul className="list-none space-y-2 pl-4 text-gray-700">
                  <li>• What's working</li>
                  <li>• What's leaking</li>
                  <li>• Why certain tactics haven't helped</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  So you don't need to decode analytics or guess what matters.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-purple-600">
                    "What Not To Fix" Guardrails
                  </h4>
                  <span className="text-purple-600 font-bold text-xl whitespace-nowrap ml-4">
                    ($97 value)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Prevents costly missteps
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You'll be told explicitly what not to change — no rebranding, no posting more, no trend chasing — saving you time, energy, and unnecessary pivots.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-blue-600">
                    3 High-Level Directional Moves
                  </h4>
                  <span className="text-blue-600 font-bold text-xl whitespace-nowrap ml-4">
                    ($67 value)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Clarity without overwhelm
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You'll receive three strategic focus directions aligned to your signal state — not tactics, but guidance that helps you move forward confidently instead of experimenting blindly.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-cyan-600">
                    Account-Type-Aware Interpretation
                  </h4>
                  <span className="text-cyan-600 font-bold text-xl whitespace-nowrap ml-4">
                    (Included)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Works whether you're on camera or not
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Your results are interpreted based on whether you run:
                </p>
                <ul className="list-none space-y-2 pl-4 text-gray-700">
                  <li>• A talking-head account</li>
                  <li>• A faceless account</li>
                  <li>• An AI avatar account</li>
                  <li>• Or a mix</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  So you're never compared to the wrong standard.
                </p>
              </div>

              {/* Feature 7 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-purple-600">
                    Powered by Milo™ Intelligence
                  </h4>
                  <span className="text-purple-600 font-bold text-xl whitespace-nowrap ml-4">
                    (Included)
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Built on the same engine as the full system
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Signal Snapshot™ uses the same signal intelligence framework behind Milo™ — giving you accurate, credible insight without committing to a subscription yet.
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-16 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 rounded-3xl p-12 max-w-3xl mx-auto border-4 border-purple-300">
              <div className="text-center space-y-6">
                {/* Product Image */}
                <div className="flex justify-center mb-6">
                  <Image
                    src="/SignalSnapshotBundle.png"
                    alt="Signal Snapshot Bundle"
                    width={500}
                    height={375}
                    className="rounded-2xl shadow-lg"
                  />
                </div>

                <div>
                  <p className="text-4xl text-gray-700 font-semibold mb-2">Total Value:</p>
                  <p className="text-7xl font-bold text-gray-400 line-through">$602+</p>
                </div>
              </div>
            </div>

            {/* CTA Button after Section 6 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                GRAB SIGNAL SNAPSHOT™ NOW
              </a>
            </div>
          </div>

          {/* Section 8: The Truth About What's Actually Holding You Back */}
          <div className="mt-20 space-y-12">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                The Truth About What's Actually Holding You Back
              </span>
            </h3>

            {/* The Lie */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-t-4 border-purple-500 max-w-4xl mx-auto">
              <h4 className="text-3xl font-bold text-purple-600 mb-6">
                The Lie
              </h4>
              <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                <p className="font-semibold text-xl">
                  You've been told the problem is that you're not doing enough.
                </p>

                <p className="pl-4">
                  Not enough posts.
                </p>

                <p className="pl-4">
                  Not enough hooks.
                </p>

                <p className="pl-4">
                  Not enough trends.
                </p>

                <p className="pl-4">
                  Not enough engagement.
                </p>

                <p className="font-semibold text-lg pt-2">
                  So you keep adding effort — and hoping something sticks.
                </p>
              </div>
            </div>

            {/* The Mistake */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-t-4 border-cyan-500 max-w-4xl mx-auto">
              <h4 className="text-3xl font-bold text-cyan-600 mb-6">
                The Mistake
              </h4>
              <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                <p className="font-semibold text-xl">
                  Most people are trying to optimize tactics before they understand their signals.
                </p>

                <p className="mb-3">They:</p>

                <ul className="list-none space-y-2 pl-4 mb-4">
                  <li>• Post more when watch time is leaking</li>
                  <li>• Rewrite content when relevance is unclear</li>
                  <li>• Rebrand when identity is fragile</li>
                  <li>• Push CTAs when intent hasn't formed</li>
                </ul>

                <p className="font-bold text-xl text-gray-900">
                  That's why results feel random.
                </p>

                <p className="font-semibold text-lg">
                  You're fixing symptoms, not the system making the decisions.
                </p>
              </div>
            </div>

            {/* The Truth */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-xl border-t-4 border-blue-500 max-w-4xl mx-auto">
              <h4 className="text-3xl font-bold text-blue-600 mb-6">
                The Truth
              </h4>
              <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                <p className="font-bold text-xl text-gray-900">
                  Instagram doesn't reward effort.
                </p>

                <p className="font-bold text-xl text-blue-600">
                  It rewards signal alignment.
                </p>

                <p className="mt-4">Before your content gets reach…</p>

                <p className="mt-4">Before buyers feel urgency…</p>

                <p className="mt-4">Before sales become consistent…</p>

                <p className="font-semibold">
                  Your signals are already being evaluated — quietly — by the algorithm and by your audience.
                </p>

                <p className="font-bold text-xl text-purple-600 mt-6">
                  Signal Snapshot™ exists to show you those decisions.
                </p>

                <p className="pl-4">
                  Not weeks later.
                </p>

                <p className="pl-4">
                  Not after another pivot.
                </p>

                <p className="pl-4">
                  Not after another launch that "almost worked."
                </p>

                <p className="font-bold text-2xl text-gray-900 mt-4">
                  Right now.
                </p>

                <p className="mt-6">
                  When you can see what's actually happening, you stop guessing.
                </p>

                <p className="mt-6">
                  When you stop guessing, results stop feeling random.
                </p>

                <p className="font-bold text-2xl text-transparent bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text mt-6">
                  That's authority.
                </p>
              </div>
            </div>

            {/* CTA Button after Section 8 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                SAY NO MORE, I'M IN
              </a>
            </div>
          </div>

          {/* Section 9: Meet Your Leader */}
          <div className="mt-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-3xl p-12 max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Meet Your Leader
              </span>
            </h3>

            {/* Leader Image and Intro */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              <div className="flex flex-col items-center md:items-start flex-shrink-0">
                <Image
                  src="/Duane.png"
                  alt="Duane"
                  width={250}
                  height={250}
                  className="rounded-full shadow-2xl border-4 border-purple-300 mb-4"
                  priority
                />
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Hi, I'm Duane
                </p>
              </div>

              <div className="space-y-4 text-lg text-gray-800 leading-relaxed flex-1">
                <p className="font-semibold text-xl">
                  Let's be real: it's frustrating when your content looks good… but sales feel random.
                </p>

                <p>
                  You're posting.
                </p>

                <p>
                  Engagement exists.
                </p>

                <p>
                  People say "this is great."
                </p>

                <p className="font-semibold">
                  And yet — consistency never sticks.
                </p>

                <p className="mt-6 font-semibold text-xl">
                  For a long time, that was my reality too.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">

              <p>
                I wasn't new.
              </p>

              <p>
                I wasn't guessing blindly.
              </p>

              <p>
                But I couldn't explain why momentum would build — then disappear.
              </p>

              <p className="font-bold text-xl text-purple-600 mt-6">
                The turning point came when I stopped treating Instagram like a content problem and started treating it like a signal system.
              </p>

              <p className="font-semibold">
                As a software and AI engineer, that's how my brain works.
              </p>

              <p className="font-semibold">
                If something behaves inconsistently, there's an underlying system making decisions you can't see.
              </p>

              <p className="mt-6">
                So I stopped consuming advice and started breaking Instagram down at the signal level:
              </p>

              <ul className="list-none space-y-2 pl-4 mb-4">
                <li>• What behavior actually gets rewarded</li>
                <li>• What quietly gets throttled</li>
                <li>• What looks good on the surface but kills momentum underneath</li>
              </ul>

              <p className="font-bold text-xl text-cyan-600 mt-6">
                Once I could see that layer, everything changed.
              </p>

              <p>
                I didn't post more.
              </p>

              <p>
                I didn't chase trends.
              </p>

              <p>
                I didn't rebuild my brand.
              </p>

              <p className="font-semibold mt-4">
                Sales finally matched results.
              </p>

              <p className="font-semibold mt-4">
                And Instagram stopped feeling like a guessing game.
              </p>

              <p className="font-bold text-2xl text-blue-600 mt-8">
                That's why Signal Snapshot™ exists.
              </p>

              <div className="mt-8 bg-white rounded-2xl p-8 border-l-4 border-purple-500">
                <p className="font-bold text-xl text-gray-900 mb-4">
                  My promise is simple:
                </p>

                <p className="text-lg mb-3">
                  I won't tell you to do more.
                </p>

                <p className="text-lg mb-3">
                  I'll help you see what actually matters — so you can stop fixing the wrong thing and start moving forward with clarity.
                </p>

                <p className="font-semibold text-lg text-purple-600 mt-4">
                  If you're already putting in the work, you deserve answers that make sense.
                </p>
              </div>
            </div>

            {/* CTA Button after Section 9 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                SAY NO MORE, I'M IN
              </a>
            </div>
          </div>

          {/* Section 10: Before the Testimonials */}
          <div className="mt-20 space-y-12">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Before the Testimonials
              </span>
            </h3>

            <div className="max-w-4xl mx-auto space-y-10">
              <p className="text-xl text-center text-gray-800 leading-relaxed">
                Most products rely on testimonials to convince you something works.
              </p>

              <p className="text-xl text-center text-gray-800 leading-relaxed">
                Signal Snapshot™ is different.
              </p>

              <p className="text-2xl font-bold text-center text-purple-600">
                Here's why.
              </p>

              {/* Subsection 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <h4 className="text-2xl font-bold text-purple-600 mb-4">
                  This Isn't a "Results May Vary" Product
                </h4>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                  <p>Signal Snapshot™ doesn't promise outcomes like:</p>

                  <ul className="list-none space-y-2 pl-4">
                    <li>• More followers</li>
                    <li>• Viral posts</li>
                    <li>• Guaranteed sales</li>
                  </ul>

                  <p className="font-bold text-xl text-gray-900">It promises clarity.</p>

                  <p className="font-semibold">And clarity doesn't depend on timing, trends, or luck.</p>

                  <p>
                    If you're already posting on Instagram, you already have signals.
                  </p>

                  <p>
                    Signal Snapshot™ simply shows you what those signals are communicating — clearly and honestly.
                  </p>

                  <p className="font-semibold">That's not something testimonials make more true.</p>
                </div>
              </div>

              {/* Subsection 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">
                  This Is a Diagnostic, Not a Transformation
                </h4>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                  <p>You wouldn't expect testimonials to prove an MRI works.</p>

                  <p>You trust it because:</p>

                  <ul className="list-none space-y-2 pl-4 mb-4">
                    <li>• It shows what's happening inside</li>
                    <li>• It removes guesswork</li>
                    <li>• It gives you facts you can act on</li>
                  </ul>

                  <p className="font-bold text-xl text-blue-600">Signal Snapshot™ works the same way.</p>

                  <p>
                    It doesn't motivate you.
                  </p>

                  <p>
                    It doesn't hype you up.
                  </p>

                  <p>
                    It doesn't sell you a dream.
                  </p>

                  <p className="font-semibold">
                    It shows you what's actually going on — so you can stop guessing.
                  </p>
                </div>
              </div>

              {/* Subsection 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500">
                <h4 className="text-2xl font-bold text-cyan-600 mb-4">
                  Early Access Means Signal Snapshot™ is new by design.
                </h4>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                  <p>That means:</p>

                  <ul className="list-none space-y-2 pl-4 mb-4">
                    <li>• You're not buying something diluted by mass advice</li>
                    <li>• You're not getting a recycled framework</li>
                    <li>• You're seeing the system before it's common</li>
                  </ul>

                  <p>
                    The intelligence behind it (Milo™) has already been pressure-tested.
                  </p>

                  <p>
                    Signal Snapshot™ is simply the cleanest entry point.
                  </p>
                </div>
              </div>

              {/* Subsection 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <h4 className="text-2xl font-bold text-purple-600 mb-4">
                  What People Say After Clarity (What to Expect)
                </h4>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                  <p>While formal testimonials are coming, here's what users consistently say after getting signal-level clarity:</p>

                  <ul className="list-none space-y-3 pl-4 mb-4">
                    <li className="italic">"This explains everything I couldn't articulate."</li>
                    <li className="italic">"I finally know what not to fix."</li>
                    <li className="italic">"I thought I had a content problem. I didn't."</li>
                    <li className="italic">"This saved me months of experimenting."</li>
                  </ul>

                  <p className="font-bold text-xl text-gray-900">
                    That reaction is the product working.
                  </p>
                </div>
              </div>

              {/* Subsection 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold text-blue-600 mb-4">
                  If You Want Proof, Here's the Real Test
                </h4>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                  <p>After Signal Snapshot™, you'll know:</p>

                  <ul className="list-none space-y-2 pl-4 mb-4">
                    <li>• Whether your issue is Watch Time, Relevance, Identity, or Intent</li>
                    <li>• Why previous fixes didn't work</li>
                    <li>• What would actually move the needle — and what wouldn't</li>
                  </ul>

                  <p className="font-semibold">
                    If that clarity alone isn't valuable to you, this probably isn't for you.
                  </p>
                </div>
              </div>

              {/* Subsection 6 */}
              <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border-2 border-purple-300">
                <h4 className="text-2xl font-bold text-purple-600 mb-4">
                  Testimonials Will Come
                </h4>
                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                  <p className="font-semibold">But Signal Snapshot™ doesn't rely on social proof to be useful.</p>

                  <p>It relies on:</p>

                  <ul className="list-none space-y-2 pl-4 mb-4">
                    <li>• Accurate diagnosis</li>
                    <li>• Honest interpretation</li>
                    <li>• Respect for your time and effort</li>
                  </ul>

                  <p className="font-bold text-xl text-purple-600">
                    That's the standard it's built on.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button after Section 10 */}
            <div className="mt-12 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                I'M IN! SAY NO MORE
              </a>
            </div>
          </div>

          {/* Section 11: Final CTA */}
          <div className="mt-20 mb-20">
            <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 rounded-3xl p-16 max-w-4xl mx-auto border-4 border-purple-300 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    If you're already creating content, you shouldn't be guessing why sales feel inconsistent.
                  </span>
                </h3>

                <div className="space-y-3 text-2xl text-gray-800 font-semibold">
                  <p>You don't need more posts.</p>
                  <p>You don't need another strategy.</p>
                  <p className="text-3xl font-bold text-purple-600">
                    You need to see what your signals are actually communicating.
                  </p>
                </div>

                <div className="pt-6">
                  <p className="text-3xl font-bold text-gray-900 mb-6">
                    Run your Signal Snapshot™ now.
                  </p>

                  <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                    <p className="text-xl text-gray-800 mb-4">In about 20 minutes, you'll know:</p>
                    <ul className="list-none space-y-3 text-xl text-gray-800">
                      <li className="font-semibold">• What's working</li>
                      <li className="font-semibold">• What's leaking</li>
                      <li className="font-semibold">• And what not to fix next</li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                      So you can stop spinning, stop second-guessing, and move forward with clarity — not hope.
                    </p>
                  </div>

                  {/* Product Image */}
                  <div className="mt-10 mb-6 flex justify-center">
                    <Image
                      src="/SignalSnapshotBundle.png"
                      alt="Signal Snapshot Bundle"
                      width={600}
                      height={450}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="mt-8">
                    <p className="text-3xl text-gray-700">
                      <span className="font-bold text-gray-900">Total Value: </span>
                      <span className="line-through text-gray-400">$602+</span>
                    </p>
                  </div>

                  <div className="mt-8">
                    <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      👉 Stop Guessing. Snag Signal Snapshot™
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 12: FAQs */}
          <div className="mt-20 mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h3>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>

            {/* Final CTA Button After FAQ */}
            <div className="mt-16 text-center">
              <a href="https://buy.stripe.com/cNi4gA7vA6VlaZb0MIbsc00" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                SAY NO MORE, I'M IN
              </a>
              <div className="mt-6">
                <p className="text-3xl text-gray-700">
                  <span className="font-bold text-gray-900">Total Value: </span>
                  <span className="line-through text-gray-400">$602+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
