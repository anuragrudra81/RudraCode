import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-card py-20 md:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            All-in-One Internet & Software Development Agency
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
            From concept to launch, we provide comprehensive digital solutions to elevate your business. Web, mobile, AI, and beyond.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex h-full min-h-[300px] w-full items-center justify-center">
            <Image
                src="https://picsum.photos/600/400"
                alt="Software Development team working on a project"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint="software development"
                priority
            />
            <div className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 rounded-full bg-primary/10"></div>
            <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-lg bg-accent/10"></div>
        </div>
      </div>
    </section>
  );
}
