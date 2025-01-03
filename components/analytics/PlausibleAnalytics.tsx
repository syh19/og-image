import Script from "next/script";

export default function PlausibleAnalytics() {
  return (
    <>
      <Script
        defer
        data-domain="og.sylwair.com"
        src="https://plausible.sylwair.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-analytics">
        {`
          window.plausible = window.plausible || function() { 
            (window.plausible.q = window.plausible.q || []).push(arguments) 
          }
        `}
      </Script>
    </>
  );
}
