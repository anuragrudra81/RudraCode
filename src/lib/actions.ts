"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

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

  const { name, email, message } = validatedFields.data;
  
  // This is a temporary fix. In a real application, you should handle the case
  // where environment variables are not set. For this context, we proceed,
  // but email sending will fail silently if credentials are not in the environment.
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'anuragrudra91@gmail.com',
    subject: `New Contact Message from ${name} via RudraCode`,
    html: `
      <p>You received a new message from your website contact form.</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    
    return {
      message: "Thank you! Your message has been sent successfully.",
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