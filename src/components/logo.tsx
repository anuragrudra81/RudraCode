import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TerminalSquare } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-block", className)}>
      <div className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
        <TerminalSquare className="h-7 w-7" />
        RudraCode<span className="text-foreground">.</span>
      </div>
    </Link>
  );
}
