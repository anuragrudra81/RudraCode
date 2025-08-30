
"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function BookingPage() {
  const calendlyUrl = "https://calendly.com/rudracode/30min";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A simple timeout to hide the skeleton loader after a few seconds,
    // giving Calendly time to initialize. A more robust solution
    // might use Calendly's events if available.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Book a Meeting</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Schedule a free consultation with our team to discuss your project needs. Pick a time that works for you below.
            </p>
          </div>
          <div className="relative min-h-[700px] w-full rounded-lg bg-card shadow-lg">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Skeleton className="h-full w-full rounded-lg" />
              </div>
            )}
            <div
              className="calendly-inline-widget w-full min-h-[700px]"
              data-url={calendlyUrl}
              style={{
                opacity: loading ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold">Or, Contact Us Directly</h2>
                <p className="mt-2 text-muted-foreground md:text-lg">If you prefer, you can also reach out to us through other channels.</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
                    <div className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:contact@rudracode.com" className="text-lg font-medium hover:underline">contact@rudracode.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-primary" />
                        <a href="tel:+1234567890" className="text-lg font-medium hover:underline">+1 (234) 567-890</a>
                    </div>
                </div>
                <div className="mt-12">
                    <Button asChild size="lg">
                        <Link href="/contact">Explore All Options</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
