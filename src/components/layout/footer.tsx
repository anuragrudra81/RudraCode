"use client";

import * as React from "react";
import { Logo } from '@/components/logo';
import { Github, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              All-in-One Internet & Software Development Agency
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://www.facebook.com/anurag.rudra.568253" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/anuragrudra81" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/anurag-rudra-293544242/" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} RudraCode Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
