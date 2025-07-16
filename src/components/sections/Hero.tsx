"use client";

import Image from 'next/image';
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
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="EndoVision surgical suite with advanced endoscopic equipment"
        data-ai-hint="surgical suite"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <motion.div 
        className="relative z-20 text-center container px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-headline text-4xl md:text-6xl font-bold tracking-tight"
          variants={itemVariants}
        >
          Who We Are
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90"
          variants={itemVariants}
        >
          We design cutting-edge UHD endoscopes and the advanced Plasma EDGE™ system to redefine precision in minimally invasive surgery.
        </motion.p>
        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#specialties">
              See More
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
