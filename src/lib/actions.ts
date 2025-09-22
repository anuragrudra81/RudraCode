"use server";

import { z } from "zod";
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
    const aiResponse = await processContactMessage(validatedFields.data);

    return {
      message: aiResponse.reply,
      success: true,
    };
  } catch (exception) {
      console.error("AI form processing exception:", exception);
      const errorMessage = exception instanceof Error ? exception.message : "An unexpected error occurred.";
      return {
          message: `Sorry, there was a problem submitting your message. Error: ${errorMessage}`,
          success: false,
      };
  }
}
