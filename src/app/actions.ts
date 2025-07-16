'use server';

import { summarizePolicy, SummarizePolicyInput } from "@/ai/flows/summarize-policy";

export async function getPolicySummary(policyText: string) {
  const input: SummarizePolicyInput = { policyText };
  return await summarizePolicy(input);
}
