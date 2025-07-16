const timelineEvents = [
  { year: 2012, milestone: "Founded in Boston, MA, with a vision to revolutionize surgical optics." },
  { year: 2015, milestone: "Launched our first-generation UHD Hysteroscope, setting new industry standards." },
  { year: 2019, milestone: "Achieved ISO 13485 certification, cementing our commitment to quality." },
  { year: 2023, milestone: "Introduced the Plasma EDGE™ energy system, expanding our product ecosystem." },
  { year: 2024, milestone: "Expanded global distribution to over 20 countries worldwide." },
];

export function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A history of innovation and commitment to excellence in the medical field.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative mb-8 md:mb-0">
              <div className="flex md:items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 lg:pr-12 md:text-right">
                  <div className={`p-6 rounded-lg shadow-md bg-card mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <h3 className="font-headline text-2xl font-bold text-primary">{event.year}</h3>
                    <p className="mt-2 text-muted-foreground">{event.milestone}</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
