"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const specialties = [
  {
    title: "Arthroscopy",
    description: "Advanced arthroscopic tools for joint examination and surgery.",
    href: "/specialties/arthroscopy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.2c.8-1.5.8-3.2 0-4.7l-2-3.3-1.2-2c-.5-.8-.5-1.8 0-2.6l1.2-2 2-3.3c.8-1.5.8-3.2 0-4.7" />
        <path d="M7 21l3-1.7" />
        <path d="M17 3l-3 1.7" />
        <path d="M12 6.8c-.8 1.5-.8 3.2 0 4.7l2 3.3 1.2 2c.5.8.5 1.8 0 2.6l-1.2 2-2 3.3c-.8 1.5-.8 3.2 0 4.7" />
        <path d="M5 4.5c1.7 1 3.4 1.7 5.2 2.3" />
        <path d="M19 19.5c-1.7-1-3.4-1.7-5.2-2.3" />
      </svg>
    )
  },
  {
    title: "Hysteroscopy",
    description: "Precise instruments for uterine cavity inspection and intervention.",
    href: "/specialties/hysteroscopy",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.5 4.5c-2.3-1.2-4.5-2.8-6-4.5" />
            <path d="M16 8.5c-3.4-1-6.1-2.7-8-5" />
            <path d="M8 3.5c-2.7 1.8-4.7 4-6 6.5" />
            <path d="M19.5 10c-1 2.5-2.6 4.8-4.5 6.5" />
            <path d="M18 10.5c-1.8 2-3.8 3.6-6 5" />
            <path d="M9.5 14c-2 .5-4.3 1-6.5 1.5" />
            <path d="M14 18c-2 .5-4.3 1-6.5 1.5" />
            <path d="M21 17.5c-2.5.5-5.3 1-8 1.5" />
            <path d="M15.5 21.5c-2.5.5-5.3 1-8 1.5" />
        </svg>
    )
  },
  {
    title: "Urology",
    description: "Innovative devices for urinary tract and bladder procedures.",
    href: "/specialties/urology",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.6 12.2a2 2 0 0 0-1.3-2.5l-4.3-.8a2 2 0 0 1-1.3-2.5l2-3.8a2 2 0 0 0-2.3-3l-3.3 2.6a2 2 0 0 1-2.9-.1L6 2.4a2 2 0 0 0-3.1 2.2l1 4.6a2 2 0 0 1 0 2.8l-1 4.6a2 2 0 0 0 3 3.1l2.5-2.2a2 2 0 0 1 2.9-.1l3.3 2.6a2 2 0 0 0 2.3-3l-2-3.8a2 2 0 0 1 1.3-2.5Z" />
            <path d="M12 8.9c-2 .9-2.8 2.3-2.8 3.6" />
            <path d="M10.9 14.8c.8-1 1.4-2.2 1.4-3.5" />
            <path d="M15 2v5" />
            <path d="M9 2v5" />
        </svg>
    )
  },
];

export function Specialties() {
    const { ref, controls, sectionVariants, itemVariants } = useScrollAnimation();
  return (
    <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        id="specialties" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Specialties</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {specialties.map((specialty, index) => (
            <motion.div 
              variants={itemVariants} 
              key={index} 
              className="group"
            >
               <Link href={specialty.href} className="block text-center p-8 transition-shadow duration-300 rounded-lg hover:shadow-2xl h-full">
                <div className="flex justify-center mb-6">
                  {specialty.icon}
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">{specialty.title}</h3>
                <p className="mt-2 text-muted-foreground">{specialty.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
