"use client";

import { useEffect } from 'react';
import { Skeleton } from './ui/skeleton';

export default function CalendlyWidget() {
  useEffect(() => {
    const head = document.querySelector('head');
    if (!head) return;
    
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.async = true;
    head.appendChild(script);

    return () => {
      // Check if the script is still in the head before trying to remove it
      if (head.contains(script)) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full min-h-[700px] bg-card rounded-lg shadow-lg"
      data-url="https://calendly.com/web-forms/30min"
    >
      <Skeleton className="w-full h-[700px] rounded-lg" />
    </div>
  );
}
