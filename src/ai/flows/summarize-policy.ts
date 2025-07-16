// Summarize Policy Flow
'use server';

/**
 * @fileOverview An AI agent that summarizes company policies.
 *
 * - summarizePolicy - A function that handles the policy summarization process.
 * - SummarizePolicyInput - The input type for the summarizePolicy function.
 * - SummarizePolicyOutput - The return type for the summarizePolicy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePolicyInputSchema = z.object({
  policyText: z
    .string()
    .describe('The text content of the company policy to be summarized.'),
});
export type SummarizePolicyInput = z.infer<typeof SummarizePolicyInputSchema>;

const SummarizePolicyOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the company policy.'),
});
export type SummarizePolicyOutput = z.infer<typeof SummarizePolicyOutputSchema>;

export async function summarizePolicy(input: SummarizePolicyInput): Promise<SummarizePolicyOutput> {
  return summarizePolicyFlow(input);
}

const summarizePolicyPrompt = ai.definePrompt({
  name: 'summarizePolicyPrompt',
  input: {schema: SummarizePolicyInputSchema},
  output: {schema: SummarizePolicyOutputSchema},
  prompt: `You are an AI expert in summarizing legal documents.

  Please provide a concise summary of the following company policy. The summary should capture the key points and be easily understandable for a general audience.

  Policy Text:
  {{policyText}}`,
});

const summarizePolicyFlow = ai.defineFlow(
  {
    name: 'summarizePolicyFlow',
    inputSchema: SummarizePolicyInputSchema,
    outputSchema: SummarizePolicyOutputSchema,
  },
  async input => {
    const {output} = await summarizePolicyPrompt(input);
    return output!;
  }
);
