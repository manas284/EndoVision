'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles the contact form submission.
 */

import type {
  SendContactMessageInput,
  SendContactMessageOutput,
} from './contact-types';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const TO_EMAIL = 'bluezonesurgical@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // Resend requires a verified domain or this default for free tier

export async function sendContactMessage(
  input: SendContactMessageInput
): Promise<SendContactMessageOutput> {
  console.log('Received contact form submission:', input);
  
  if (!resend) {
    console.error('RESEND_API_KEY is not set. Email not sent.');
    // In a real app, you might want to fall back to a database save or other notification
    // For this example, we'll return a success message as if it worked to not break the UI.
    return {
      confirmation: `Thank you, ${input.name}. We have received your message and will get back to you shortly. (Email not sent due to missing configuration)`,
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `BluezoneSurgical Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New Inquiry from ${input.name} - Specialty: ${input.specialty}`,
      react: ContactFormEmail({ ...input }),
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error('Failed to send email.');
    }

    console.log('Email sent successfully:', data);

    return {
      confirmation: `Thank you, ${input.name}. We have received your message and will get back to you shortly.`,
    };
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('An unexpected error occurred while sending the email.');
  }
}
