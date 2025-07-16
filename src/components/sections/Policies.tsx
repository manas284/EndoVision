"use client";

import { PolicyAccordion } from './PolicyAccordion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

export function Policies() {
    const { ref, controls } = useScrollAnimation();
  return (
    <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.6 }}
        id="policies" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Company Policies</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Clear, concise, and transparent. Understand our commitments to you.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <PolicyAccordion />
        </div>
      </div>
    </motion.section>
  );
}