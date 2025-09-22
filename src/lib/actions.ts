"use server";

import { z } from "zod";
import { Resend } from "resend";
import { processContactMessage } from "@/ai/flows/contact-form-flow";

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

  try {
    // We can still use the AI to generate a friendly reply
    const aiPromise = processContactMessage(validatedFields.data);
    
    // But we also send the email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = validatedFields.data;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anuragrudra91@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `<p>You received a new message from your website contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    // Get the friendly reply from the AI
    const aiResponse = await aiPromise;

    return {
      message: aiResponse.reply, // Use AI's friendly reply for the success message
      success: true,
    };
  } catch (exception) {
      console.error("Contact form submission failed:", exception);
      const errorMessage = exception instanceof Error ? exception.message : "An unexpected error occurred.";
      return {
          message: `Sorry, something went wrong and we couldn't send your message. Error: ${errorMessage}`,
          success: false,
      };
  }
}