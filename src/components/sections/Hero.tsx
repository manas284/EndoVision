"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative w-full py-20 md:py-32 flex items-center justify-center text-foreground overflow-hidden">
       <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-r from-primary/30 to-accent/30 -z-10 blur-3xl" />

      <motion.div 
        className="relative z-10 text-center container px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-headline text-4xl md:text-7xl font-bold tracking-tighter"
          variants={itemVariants}
        >
          Redefining Surgical Precision
        </motion.h1>
        <motion.p 
          className="mt-6 max-w-3xl mx-auto text-base md:text-xl text-muted-foreground"
          variants={itemVariants}
        >
          We design cutting-edge UHD endoscopes and the advanced Plasma EDGE™ system to enhance visualization in minimally invasive surgery.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            <Link href="/products">
              Explore Our Products
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
            <Link href="/#contact">
              Contact Us
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
