'use server';
/**
 * @fileOverview An AI flow to process contact form submissions.
 *
 * - processContactMessage - A function that handles the contact form data.
 */

import {ai} from '@/ai/genkit';
import {
  ContactFormInput,
  ContactFormInputSchema,
  ContactFormOutput,
  ContactFormOutputSchema,
} from '@/ai/flows/contact-form-types';

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
    // This flow currently only uses the AI to generate a reply.
    // It does not send an email.
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('AI failed to generate a response.');
    }
    return output;
  }
);
