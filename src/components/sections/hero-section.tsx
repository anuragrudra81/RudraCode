import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export default function HeroSection() {
  const heroImage = placeholderImages.hero;
  return (
    <section className="relative w-full overflow-hidden bg-card py-20 md:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Excellence, One Line of Code at a Time
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
            We are a full-service agency that partners with businesses to create transformative digital solutions. From stunning websites to intelligent applications, we bring your vision to life.
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
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={heroImage.aiHint}
                priority
            />
            <div className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 rounded-full bg-primary/10"></div>
            <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-lg bg-accent/10"></div>
        </div>
      </div>
    </section>
  );
}
