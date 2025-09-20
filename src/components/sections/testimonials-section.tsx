import { selectTestimonials } from "@/ai/flows/intelligent-testimonial-selection";
import { allTestimonials } from "@/lib/data";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import type { Testimonial } from "@/lib/types";

export default async function TestimonialsSection() {
  const allTestimonialStrings = allTestimonials.map(t => `${t.quote} - ${t.author}, ${t.company}`);

  let selectedTestimonials: Testimonial[] = [];
  try {
    const aiResponse = await selectTestimonials({
      service: "General Software Development and Internet Services",
      allTestimonials: allTestimonialStrings,
      numTestimonials: 5,
    });
    
    // The AI returns strings. We need to find the original testimonial objects.
    if (aiResponse && aiResponse.selectedTestimonials) {
      const foundTestimonials = aiResponse.selectedTestimonials.map(selectedQuote => {
        return allTestimonials.find(t => selectedQuote.includes(t.quote));
      }).filter((t): t is Testimonial => t !== undefined);

      // Remove duplicates
      selectedTestimonials = Array.from(new Set(foundTestimonials));
    }

    // Fallback if AI fails or returns fewer than expected.
    if (selectedTestimonials.length < 3) {
      console.warn("AI returned fewer than 3 testimonials, using fallback.");
      selectedTestimonials = allTestimonials.slice(0, 3);
    }
  } catch (error) {
    console.error("AI testimonial selection failed:", error instanceof Error ? error.message : error);
    // Fallback to showing first 3 testimonials
    selectedTestimonials = allTestimonials.slice(0, 3);
  }

  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">Hear from businesses who have transformed with RudraCode.</p>
        </div>
        <TestimonialsCarousel testimonials={selectedTestimonials} />
      </div>
    </section>
  );
}
