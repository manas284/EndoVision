"use client";

import { PolicyAccordion } from './PolicyAccordion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

export function Policies() {
    const { ref, controls, sectionVariants, itemVariants } = useScrollAnimation();
  return (
    <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        id="policies" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Company Policies</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Clear, concise, and transparent. Understand our commitments to you.
          </p>
        </motion.div>
        <motion.div className="max-w-3xl mx-auto mt-12" variants={itemVariants}>
          <PolicyAccordion />
        </motion.div>
      </div>
    </motion.section>
  );
}
