"use client";

import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Head from 'next/head';

export default function BookingPage() {
  // Replace with your actual Calendly link
  const calendlyUrl = "https://calendly.com/rudracode/30min";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Book a Meeting | RudraCode Hub</title>
        <meta name="description" content="Schedule a free consultation with our team to discuss your project needs." />
      </Head>
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Book a Meeting</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Schedule a free consultation with our team to discuss your project needs. Pick a time that works for you below.
            </p>
          </div>
          <div
            className="calendly-inline-widget w-full min-h-[700px] bg-card rounded-lg shadow-lg"
            data-url={calendlyUrl}
          >
            <Skeleton className="w-full h-[700px] rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
