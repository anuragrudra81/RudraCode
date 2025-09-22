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

  // Gracefully handle missing credentials
  if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Email credentials are not set in environment variables.");
    return {
      message: "Could not send email. Server is missing email credentials. Please configure GMAIL_EMAIL and GMAIL_APP_PASSWORD in your .env file.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;
  
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