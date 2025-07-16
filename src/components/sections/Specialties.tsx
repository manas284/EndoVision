import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bone, HeartPulse, Droplets } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const specialties = [
  {
    icon: <Bone className="h-10 w-10 text-primary" />,
    title: "Arthroscopy",
    description: "Advanced visualization for joint and orthopedic procedures.",
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "Hysteroscopy",
    description: "High-definition solutions for gynecological examinations and surgeries.",
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Urology",
    description: "Precision instruments for comprehensive urological care.",
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
              <Card className="text-center group hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="mx-auto bg-card p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <CardTitle className="font-headline pt-4">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
