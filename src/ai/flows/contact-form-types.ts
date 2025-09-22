/**
 * @fileOverview Defines the data structures (types and schemas) for the contact form flow.
 */

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
