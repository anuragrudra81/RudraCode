import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const service = services.find(s => s.slug === params.slug);
    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }
    return {
        title: `${service.title} | RudraCode Hub`,
        description: service.shortDescription,
    };
}


export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">{service.longDescription}</p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/booking">Book a Call</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <service.icon className="absolute inset-0 m-auto w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Past Projects</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              See how we've helped businesses like yours succeed with our {service.title} expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.aiHint}
                    />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
