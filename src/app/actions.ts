'use server';

import { summarizePolicy, type SummarizePolicyOutput } from '@/ai/flows/summarize-policy';

export async function getPolicySummary(policyText: string): Promise<SummarizePolicyOutput> {
  if (!policyText) {
    throw new Error('Policy text cannot be empty.');
  }

  try {
    const summary = await summarizePolicy({ policyText });
    return summary;
  } catch (error) {
    console.error('Error in getPolicySummary action:', error);
    // Provide a user-friendly error message
    throw new Error('Failed to generate the policy summary due to a server error.');
  }
}
