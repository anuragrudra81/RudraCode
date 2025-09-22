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

  if (!resendApiKey || resendApiKey === "REPLACE_WITH_YOUR_NEW_AND_VERIFIED_RESEND_API_KEY") {
    console.error("Resend API key is not configured.");
    return {
        message: "The contact form is not configured correctly. Please contact the site administrator.",
        success: false,
    };
  }
  
  const resend = new Resend(resendApiKey);
  const { name, email, message } = validatedFields.data;
  const emailTo = 'anuragrudra91@gmail.com';

  try {
    const { data, error } = await resend.emails.send({
        from: 'Contact Form <contact@rudracode.dev>',
        to: [emailTo],
        reply_to: email,
        subject: 'New Contact Form Submission from RudraCode Hub',
        html: `
            <p>You have a new contact form submission:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    });

    if (error) {
        console.error("Resend error:", error);
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
