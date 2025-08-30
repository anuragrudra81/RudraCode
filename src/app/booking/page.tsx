
"use client";

import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function BookingPage() {
  // Replace with your actual Calendly link
  const calendlyUrl = "https://calendly.com/rudracode/30min";

  useEffect(() => {
    const head = document.querySelector('head');
    if (!head) return;

    // Check if the script is already added
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      // If script exists, but widget is not there, maybe reload it.
      // For simplicity, we assume if script is there, it's working or will work.
      // A more robust solution might involve using Calendly's API.
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', '');
    
    let scriptCleanUp: () => void = () => {};

    script.onload = () => {
        // The script is loaded, you could potentially call Calendly's init functions
        // if they were exposed and needed, but the widget usually auto-initializes.
    };
    
    head.appendChild(script);

    scriptCleanUp = () => {
      const scriptElement = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptElement) {
        head.removeChild(scriptElement);
      }
    };

    return scriptCleanUp;
  }, []);

  return (
    <>
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
