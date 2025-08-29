import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-block", className)}>
      <div className="font-headline text-2xl font-bold text-primary">
        RudraCode<span className="text-accent">.</span>
      </div>
    </Link>
  );
}
