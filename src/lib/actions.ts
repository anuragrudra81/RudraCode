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
  
  // Before sending the email, check if the required environment variables are set.
  if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Gmail credentials are not configured in the environment variables.");
    return {
        message: "Sorry, the email service is not configured correctly. Please contact the site administrator.",
        success: false,
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // This will show the user's name and email as the sender
    to: 'anuragrudra91@gmail.com', // Your email where you want to receive messages
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
