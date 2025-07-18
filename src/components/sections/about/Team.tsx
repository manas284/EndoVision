import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Dr. Alisha Chen",
    title: "Founder & CEO",
    bio: "A visionary surgeon-scientist dedicated to advancing medical technology.",
    imageUrl: "https://placehold.co/400x400.png",
    linkedinUrl: "#",
    aiHint: "professional woman"
  },
  {
    name: "Mark O'Brian",
    title: "Chief Technology Officer",
    bio: "Expert in optical engineering and plasma physics, driving our core innovations.",
    imageUrl: "https://placehold.co/400x400.png",
    linkedinUrl: "#",
    aiHint: "professional man"
  },
  {
    name: "Sophia Rodriguez",
    title: "Head of Operations",
    bio: "Ensures our quality management and global supply chain meet the highest standards.",
    imageUrl: "https://placehold.co/400x400.png",
    linkedinUrl: "#",
    aiHint: "professional woman smiling"
  },
];

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            The passionate minds driving BluezoneSurgical forward.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden group">
              <CardHeader className="p-0">
                <div className="aspect-square relative w-full">
                  <Image
                    src={member.imageUrl}
                    alt={`Headshot of ${member.name}`}
                    data-ai-hint={member.aiHint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-semibold">{member.title}</p>
                <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-muted-foreground hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
