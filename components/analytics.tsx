'use client'

import Script from 'next/script'

export function Analytics() {
  return (
    <>
      {/* Google Analytics GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-347437097"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-347437097');
        `}
      </Script>

      {/* HubSpot Tracking Code */}
      <Script
        src="//js-na1.hs-scripts.com/4911580.js"
        strategy="afterInteractive"
        id="hs-script-loader"
      />

      {/* HubSpot Chat Widget Configuration */}
      <Script id="hubspot-chat-config" strategy="afterInteractive">
        {`
          window.addEventListener('load', function() {
            // Wait for HubSpot to load
            var checkHubSpot = setInterval(function() {
              if (window._hsq) {
                clearInterval(checkHubSpot);
                // Enable chat widget
                if (window._hsq.push) {
                  window._hsq.push(['do', 'chat', {
                    'portalId': '4911580',
                    'region': 'na1'
                  }]);
                }
              }
            }, 100);
          });
        `}
      </Script>

      {/* HubSpot Forms API for Chat Widget */}
      <Script
        src="//js-na1.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        id="hs-forms-loader"
      />
    </>
  )
}