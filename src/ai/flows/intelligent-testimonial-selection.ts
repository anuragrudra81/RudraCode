// Implemented by Gemini.
'use server';

/**
 * @fileOverview A flow that selects the most relevant testimonials based on the service being viewed.
 *
 * - selectTestimonials - A function that selects relevant testimonials.
 * - SelectTestimonialsInput - The input type for the selectTestimonials function.
 * - SelectTestimonialsOutput - The return type for the selectTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectTestimonialsInputSchema = z.object({
  service: z
    .string()
    .describe('The name of the service the user is currently viewing.'),
  allTestimonials: z
    .array(z.string())
    .describe('An array of all available testimonials.'),
  numTestimonials: z
    .number()
    .default(3)
    .describe('The number of testimonials to select.'),
});
export type SelectTestimonialsInput = z.infer<typeof SelectTestimonialsInputSchema>;

const SelectTestimonialsOutputSchema = z.object({
  selectedTestimonials: z
    .array(z.string())
    .describe('The testimonials selected as most relevant to the service.'),
});
export type SelectTestimonialsOutput = z.infer<typeof SelectTestimonialsOutputSchema>;

export async function selectTestimonials(
  input: SelectTestimonialsInput
): Promise<SelectTestimonialsOutput> {
  return selectTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectTestimonialsPrompt',
  input: {schema: SelectTestimonialsInputSchema},
  output: {schema: SelectTestimonialsOutputSchema},
  prompt: `You are an expert marketing assistant for RudraCode, an All-in-One Internet & Software Development Agency.

You are provided with a list of testimonials from past clients. Your job is to select the {{numTestimonials}} most relevant testimonials for a user who is currently viewing the {{service}} service page.

Here are the testimonials:
{{#each allTestimonials}}- {{{this}}}
{{/each}}

Output should be in JSON format.
`,
});

const selectTestimonialsFlow = ai.defineFlow(
  {
    name: 'selectTestimonialsFlow',
    inputSchema: SelectTestimonialsInputSchema,
    outputSchema: SelectTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
