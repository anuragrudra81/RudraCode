import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | RudraCode Hub',
    description: 'Get in touch with RudraCode. We are here to answer your questions about your next project.',
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    We're here to help. Send us a message or find us at our office.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <ContactForm />
                </div>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold">Email</h3>
                            <p className="text-muted-foreground">Contact us via email for any inquiries.</p>
                            <a href="mailto:contact@rudracode.com" className="text-primary hover:underline">contact@rudracode.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold">Phone</h3>
                            <p className="text-muted-foreground">Give us a call during business hours.</p>
                            <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold">Office</h3>
                            <p className="text-muted-foreground">123 Innovation Drive, Tech City, 12345</p>
                            <a href="#" className="text-primary hover:underline">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
