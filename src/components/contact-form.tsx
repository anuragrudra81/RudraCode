"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertCircle } from 'lucide-react';

const initialState = {
  message: null,
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
        <CardDescription>
          Have a project in mind or just want to say hi? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div>
            <Input name="name" placeholder="Your Name" required aria-label="Your Name" />
            {state.errors?.name && (
              <p className="mt-1 text-xs text-destructive">{state.errors.name.join(", ")}</p>
            )}
          </div>
          <div>
            <Input name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
            {state.errors?.email && (
              <p className="mt-1 text-xs text-destructive">{state.errors.email.join(", ")}</p>
            )}
          </div>
          <div>
            <Textarea name="message" placeholder="Your Message" rows={5} required aria-label="Your Message" />
            {state.errors?.message && (
              <p className="mt-1 text-xs text-destructive">{state.errors.message.join(", ")}</p>
            )}
          </div>
          {state.message && !state.success && state.errors && (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
