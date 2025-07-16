import { PolicyAccordion } from './PolicyAccordion';

export function Policies() {
  return (
    <section id="policies" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Company Policies</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Clear, concise, and transparent. Understand our commitments to you with AI-powered summaries.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <PolicyAccordion />
        </div>
      </div>
    </section>
  );
}
