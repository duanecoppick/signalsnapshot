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
  const checkoutUrl = process.env.NEXT_PUBLIC_SIGNAL_SNAPSHOT_CHECKOUT_URL ?? "https://buy.stripe.com/28E28s8zE5Rh8R3cvqbsc01";

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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                You're Getting Engagement. But You're Not Getting Customers.
              </span>
            </h1>

            <h2 className="text-xl md:text-3xl text-gray-700 font-semibold max-w-4xl mx-auto leading-relaxed">
              If your content attracts peers instead of buyers, no amount of posting will fix it. Signal Snapshot shows you in 20 minutes whether your messaging is too general to trigger buying intent — and what to change first.
            </h2>

            <div className="max-w-4xl mx-auto text-left space-y-4 text-lg text-gray-800 leading-relaxed px-8">
              <p>You're getting engagement.</p>

              <p>People are liking, commenting, saving. Other creators tell you your content is "so good."</p>

              <p className="font-semibold">But you're not getting customers.</p>

              <p>And if you're honest, most of the people interacting with you look a lot like you.</p>

              <p>If your audience is learning from you instead of hiring you, that's not random.</p>

              <p className="font-semibold">It's positioning.</p>

              <p>Right now your messaging may be too broad to trigger buying intent.</p>

              <p>When your target is broad, your language stays general.</p>

              <p>General messaging attracts peers.</p>

              <p>It does not trigger buyers.</p>

              <p>So you post consistently.<br/>
              You grow engagement.<br/>
              You build an audience.</p>

              <p>And strangers still aren't landing in your DMs asking how to work with you.</p>

              <p>That's not an effort problem.</p>

              <p>It's that your content is building credibility with the wrong crowd.</p>

              <p className="font-bold text-xl text-purple-600 mt-6">And here's why that's urgent:</p>

              <p>Every post that attracts peers instead of customers reinforces how you're seen.</p>

              <p>Over time, you don't just lose sales.</p>

              <p className="font-semibold">You become known as helpful instead of hireable.</p>

              <p>And once that identity sets in, fixing it takes far more effort than catching it early.</p>

              <p className="font-bold text-xl text-gray-900 mt-6">Signal Snapshot shows you in about 20 minutes whether your messaging is too general to trigger buyer intent — and what needs to shift first.</p>

              <p>Before you spend another quarter reinforcing the wrong audience, find out who you're actually attracting.</p>
            </div>

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
              <a href={checkoutUrl} className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-xl font-semibold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Find Out What's Blocking My Customers
              </a>
            </div>
          </div>

          {/* Section 2: Peer vs Buyer */}
          <div className="mt-16 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                If Most of Your Engagement Comes From Other Creators…
              </span>
            </h3>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800 leading-relaxed px-8">
              <p>If your comments are mostly from people in your niche…</p>

              <p>If your DMs are conversations, not buying inquiries…</p>

              <p>If people say "this is gold" but never ask about your offer…</p>

              <p className="font-semibold text-xl text-gray-900 mt-6">You may not have a content quality problem.</p>

              <p className="font-semibold text-xl text-purple-600">You may have a buyer positioning problem.</p>

              <p className="mt-6 font-bold">Peers engage with strategy.</p>

              <p className="font-bold">Buyers respond to specificity.</p>

              <p className="mt-6">If your content could apply to almost anyone in your niche, it's probably not specific enough to make a buyer stop scrolling and act.</p>

              <p className="font-semibold text-gray-900 mt-6">Signal Snapshot shows you exactly which part of your messaging is too general — and how that's affecting buyer intent.</p>
            </div>

            {/* CTA Button after Section 2 */}
            <div className="mt-12 text-center">
              <a href={checkoutUrl} className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Run My Signal Snapshot
              </a>
            </div>
          </div>

          {/* Section 3: What You'll Know */}
          <div className="mt-20 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                What You'll Know In 20 Minutes
              </span>
            </h3>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800 leading-relaxed px-8">
              <p className="font-semibold">After completing Signal Snapshot, you'll know:</p>

              <ul className="list-none space-y-3 pl-4">
                <li><span className="font-bold text-purple-600">•</span> Whether your messaging is attracting peers or buyers</li>
                <li><span className="font-bold text-purple-600">•</span> Whether your target is too broad to trigger buying intent</li>
                <li><span className="font-bold text-purple-600">•</span> Whether your content is explaining instead of implicating</li>
                <li><span className="font-bold text-purple-600">•</span> The single signal most likely blocking inbound DMs</li>
                <li><span className="font-bold text-purple-600">•</span> What to adjust first — without rewriting everything</li>
              </ul>

              <p className="mt-6 font-bold">No theory.<br/>
              No content calendar.<br/>
              No overwhelm.</p>

              <p className="font-semibold text-gray-900 mt-6">Just a clear diagnosis of what's actually preventing buyer action.</p>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a href={checkoutUrl} className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                See What My Content Is Really Attracting
              </a>
            </div>
          </div>

          {/* Section 4: Consequence/Urgency */}
          <div className="mt-20 space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Why Fixing This Now Matters
              </span>
            </h3>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800 leading-relaxed px-8">
              <p className="font-semibold">If you spend another 3–6 months attracting the wrong audience:</p>

              <ul className="list-none space-y-3 pl-4">
                <li><span className="font-bold text-purple-600">•</span> Your positioning drifts.</li>
                <li><span className="font-bold text-purple-600">•</span> Your authority builds in the wrong circles.</li>
                <li><span className="font-bold text-purple-600">•</span> You become known as helpful instead of hireable.</li>
                <li><span className="font-bold text-purple-600">•</span> And your confidence takes a hit — even though your effort hasn't changed.</li>
              </ul>

              <p className="font-semibold text-xl text-gray-900 mt-6">Most creators try to fix this by posting more.</p>

              <p className="font-semibold">That only reinforces the pattern.</p>

              <p className="mt-6">Signal Snapshot helps you catch the misalignment early — before it hardens.</p>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <a href={checkoutUrl} className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Stop Reinforcing The Wrong Audience
              </a>
            </div>
          </div>

          {/* Section 5: Final CTA */}
          <div className="mt-20 mb-20">
            <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 rounded-3xl p-16 max-w-4xl mx-auto border-4 border-purple-300 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    You Don't Need More Effort. You Need The Right Signal.
                  </span>
                </h3>

                <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-800 leading-relaxed">
                  <p>In about 20 minutes, you'll know whether your messaging is positioned to attract buyers — or just peers.</p>

                  <p className="font-semibold text-xl text-gray-900">If you're serious about turning engagement into customers, this is the fastest place to start.</p>
                </div>

                <div className="pt-6">
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
                    <a href={checkoutUrl} className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      Find Out What Needs To Shift
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
              <a href={checkoutUrl} className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Find Out What Needs To Shift
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
