import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Account Manager Access",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function VIPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-purple/5 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with Your Account Manager
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Exclusive access for top customers
            </p>
            <p className="text-sm text-gray-500">
              Start a conversation below to get immediate assistance from your dedicated account manager.
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              The chat widget will appear in the bottom right corner. Click to start your conversation.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure and private communication</span>
            </div>
          </div>
        </div>
      </div>

      {/* HubSpot Chat Embed */}
      <Script
        id="hs-script-loader"
        type="text/javascript"
        src="//js-na1.hs-scripts.com/4911580.js"
        strategy="afterInteractive"
        async
        defer
      />
    </div>
  )
}

