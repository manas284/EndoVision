'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles the contact form submission.
 */

import { ai } from '@/ai/genkit';
import { 
  SendContactMessageInputSchema, 
  type SendContactMessageInput, 
  SendContactMessageOutputSchema, 
  type SendContactMessageOutput 
} from './contact-types';

export async function sendContactMessage(input: SendContactMessageInput): Promise<SendContactMessageOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: SendContactMessageInputSchema,
    outputSchema: SendContactMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would add logic here to:
    // 1. Store the message in a database.
    // 2. Send an email notification to the sales/support team.
    // 3. Potentially use an LLM to categorize or summarize the message.
    console.log('Received contact form submission:', input);

    return {
      confirmation: `Thank you, ${input.name}. We have received your message and will get back to you shortly.`,
    };
  }
);
