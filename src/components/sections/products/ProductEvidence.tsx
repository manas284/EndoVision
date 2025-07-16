import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, User } from "lucide-react";

export function ProductEvidence() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Clinical Applications & Evidence</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Trusted by leading surgeons for its reliability and outstanding performance in complex procedures.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <User className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Surgeon Testimonial</CardTitle>
                </CardHeader>
                <CardContent>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "The clarity of the EndoVision 4K scope is a game-changer. It has significantly improved my confidence in identifying subtle tissue changes during hysteroscopies."
                    </blockquote>
                    <p className="mt-4 font-semibold text-right">- Dr. Emily Carter, OB/GYN</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Use Cases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                    <p><strong>Arthroscopy:</strong> Enhanced visualization of cartilage and ligaments.</p>
                    <p><strong>Hysteroscopy:</strong> Clear identification of endometrial pathologies.</p>
                    <p><strong>Urology:</strong> Superior imaging for bladder and ureter inspections.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <Star className="w-8 h-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Performance Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                    <p>Peer-reviewed study shows a <strong>15% reduction</strong> in procedure time due to improved visualization.</p>
                    <a href="#" className="text-primary hover:underline font-semibold">Read the study &rarr;</a>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
