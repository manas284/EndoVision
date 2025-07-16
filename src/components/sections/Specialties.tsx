
"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const specialties = [
  {
    title: "Arthroscopy",
    description: "Advanced visualization for joint and orthopedic procedures.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "arthroscopy surgery",
    href: "/specialties/arthroscopy"
  },
  {
    title: "Hysteroscopy",
    description: "High-definition solutions for gynecological examinations and surgeries.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "hysteroscopy procedure",
    href: "/specialties/hysteroscopy"
  },
  {
    title: "Urology",
    description: "Precision instruments for comprehensive urological care.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "urology instrument",
    href: "/specialties/urology"
  },
];

export function Specialties() {
    const { ref, controls, cardVariants } = useScrollAnimation();
  return (
    <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        hidden: { opacity: 0, y: 50 },
        }}
        id="specialties" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Specialties</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Delivering specialized endoscopic technology for superior surgical outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {specialties.map((specialty, index) => (
            <motion.div variants={cardVariants} key={index}>
               <Link href={specialty.href} className="group block relative overflow-hidden rounded-lg shadow-lg h-96">
                <Image
                    src={specialty.imageUrl}
                    alt={specialty.title}
                    data-ai-hint={specialty.imageHint}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transform transition-all duration-500 ease-in-out translate-y-20 group-hover:translate-y-0">
                        <h3 className="font-headline text-2xl font-bold text-white">{specialty.title}</h3>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-2 delay-200">
                           <p className="text-primary-foreground/90">{specialty.description}</p>
                           <Button variant="link" className="text-accent p-0 mt-4 h-auto font-semibold">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                           </Button>
                        </div>
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
