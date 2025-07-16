"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const specialties = [
  {
    title: "Arthroscopy",
    description: "Advanced arthroscopic tools for joint examination and surgery.",
    href: "/specialties/arthroscopy",
    imageUrl: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072",
    imageHint: "arthroscopy surgery"
  },
  {
    title: "Hysteroscopy",
    description: "Precise instruments for uterine cavity inspection and intervention.",
    href: "/specialties/hysteroscopy",
    imageUrl: "https://www.datocms-assets.com/136621/1737729829-desk_banner_histeroscopia.png",
    imageHint: "hysteroscopy procedure"
  },
  {
    title: "Urology",
    description: "Innovative devices for urinary tract and bladder procedures.",
    href: "/specialties/urology",
    imageUrl: "https://storage.googleapis.com/project-1107279361797.appspot.com/8301ec9a-6c17-48f0-b054-99859f77f0a6.png",
    imageHint: "urology instruments"
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Specialties</h2>
           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We provide cutting-edge endoscopic technology across key surgical fields to enhance visualization, improve outcomes, and support surgeons.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {specialties.map((specialty, index) => (
            <motion.div 
              variants={itemVariants} 
              key={index} 
            >
              <Link href={specialty.href} className="block relative rounded-lg overflow-hidden group aspect-square">
                <Image
                  src={specialty.imageUrl}
                  alt={specialty.title}
                  data-ai-hint={specialty.imageHint}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full text-white transform-gpu translate-y-2/3 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="transform-gpu translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-100">
                    <h3 className="font-headline text-2xl font-bold">{specialty.title}</h3>
                    <p className="mt-2 text-primary-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">{specialty.description}</p>
                    <Button variant="link" className="p-0 mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                      Learn More &rarr;
                    </Button>
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
