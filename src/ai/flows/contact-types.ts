/**
 * @fileOverview Defines the data structures for the contact form flow.
 *
 * - SendContactMessageInputSchema - The Zod schema for the contact form input.
 * - SendContactMessageInput - The TypeScript type for the contact form input.
 * - SendContactMessageOutputSchema - The Zod schema for the contact form output.
 * - SendContactMessageOutput - The TypeScript type for the contact form output.
 */
import { z } from 'zod';

export const SendContactMessageInputSchema = z.object({
  name: z.string().describe('The full name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  specialty: z.string().describe('The selected specialty or inquiry type.'),
  message: z.string().describe('The content of the message.'),
});
export type SendContactMessageInput = z.infer<typeof SendContactMessageInputSchema>;

export const SendContactMessageOutputSchema = z.object({
  confirmation: z.string().describe('A confirmation message to be shown to the user.'),
});
export type SendContactMessageOutput = z.infer<typeof SendContactMessageOutputSchema>;
