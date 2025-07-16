'use server';
/**
 * @fileOverview Server actions for the application.
 */
import { sendContactMessage } from '@/ai/flows/contact-flow';
import type { SendContactMessageInput } from '@/ai/flows/contact-types';

export async function submitContactForm(input: SendContactMessageInput) {
  try {
    const result = await sendContactMessage(input);
    return { success: true, message: result.confirmation };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
