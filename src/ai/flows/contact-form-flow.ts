'use server';
/**
 * @fileOverview An AI flow to process contact form submissions.
 *
 * - processContactMessage - A function that handles the contact form data.
 * - ContactFormInput - The input type for the processContactMessage function.
 * - ContactFormOutput - The return type for the processContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  reply: z
    .string()
    .describe('A brief, friendly confirmation message to the user.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function processContactMessage(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return contactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are a friendly assistant for RudraCode. A user has submitted a contact form.
  
  The user's name is {{name}}.
  Their email is {{email}}.
  Their message is: "{{message}}"
  
  Generate a short, friendly confirmation reply acknowledging that their message has been received. Address them by name. For example: "Thanks, {{name}}! We've received your message and will get back to you shortly."`,
});

const contactFormFlow = ai.defineFlow(
  {
    name: 'contactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('AI failed to generate a response.');
    }
    return output;
  }
);
