import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Rocket } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <Eye className="h-10 w-10 text-primary" />
              <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To empower surgeons with the most advanced visualization tools, enhancing their precision and improving patient outcomes in every procedure.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <Rocket className="h-10 w-10 text-primary" />
              <CardTitle className="font-headline text-3xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To be the global leader in minimally invasive surgical technology, pioneering innovations that make surgery safer, faster, and more effective for everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
