"use client";

import { useState } from 'react';
import Script from 'next/script';

export default function BookingPage() {
  const calendlyUrl = "https://calendly.com/anuragrudra81/30min";
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      <div className="relative h-screen w-screen">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
            {/* You can use a spinner or a more complex skeleton here if you like */}
            <p>Loading booking calendar...</p>
          </div>
        )}
        <div
          className="calendly-inline-widget h-full w-full"
          data-url={calendlyUrl}
          style={{
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out',
          }}
        ></div>
      </div>
    </>
  );
}
