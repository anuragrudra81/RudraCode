"use server";

import { z } from "zod";
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type State = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }
  
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey || resendApiKey.startsWith("REPLACE")) {
    console.error("Resend API key is not configured or is a placeholder.");
    return {
        message: "The contact form is not configured correctly. Please contact the site administrator.",
        success: false,
    };
  }
  
  const resend = new Resend(resendApiKey);
  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['anuragrudra91@gmail.com'],
        reply_to: email,
        subject: `New message from ${name} via RudraCode Hub`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
            <p>You have a new contact form submission:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    });

    if (error) {
        console.error("Resend API Error:", error);
        return {
            message: "Sorry, something went wrong and we couldn't send your message. Please try again later.",
            success: false,
        };
    }

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      success: true,
    };
  } catch (exception) {
      console.error("Email sending exception:", exception);
      return {
          message: "An unexpected error occurred. Please try again.",
          success: false,
      };
  }
}
