import CalendlyWidget from "@/components/calendly-widget";

export const metadata = {
    title: 'Book a Meeting | RudraCode Hub',
    description: 'Schedule a free consultation with our team to discuss your project needs.',
};

export default function BookingPage() {
  return (
    <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Book a Meeting</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Schedule a free consultation with our team to discuss your project needs. Pick a time that works for you below.
                </p>
            </div>
            <CalendlyWidget />
        </div>
    </div>
  );
}
