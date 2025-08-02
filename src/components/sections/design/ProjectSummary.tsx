
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layers, LayoutTemplate, Palette, Route, Bot, Database } from "lucide-react";

const sections = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Project Overview",
    content: "This application is a professional, production-quality corporate website for 'BluezoneSurgical,' a fictional medical device company. It's built as a server-rendered web app using a modern tech stack, designed to be performant, scalable, and easy to maintain. Key features include detailed product pages, specialty-specific content, a career portal, and a functional contact form.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Technology Stack",
    content: `The project leverages a powerful and modern technology stack:
    - **Next.js:** A React framework for building full-stack web applications. It handles routing, server-side rendering (SSR), and static site generation (SSG).
    - **React:** A JavaScript library for building user interfaces with a component-based architecture.
    - **TypeScript:** A statically typed superset of JavaScript that enhances code quality and developer experience.
    - **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
    - **ShadCN/UI:** A collection of beautifully designed, accessible, and reusable components built on top of Tailwind CSS and Radix UI.
    - **Genkit:** An open-source framework from Google for building AI-powered features and applications.`
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
    title: "Component Architecture",
    content: `The component structure is organized for maximum reusability and clarity:
    - **` + "`/components/layout`" + `:** Contains global layout components like the Header, Footer, and Breadcrumbs that are used across multiple pages.
    - **` + "`/components/sections`" + `:** Holds larger, page-specific sections (e.g., Hero, Features, Contact). These components are composed to build out individual pages.
    - **` + "`/components/ui`" + `:** Consists of the core ShadCN UI components (Button, Card, Dialog, etc.). These are the fundamental building blocks of the interface.
    - **` + "`/components/providers`" + `:** Wrappers that provide context to the application, such as the ThemeProvider for light/dark mode and MotionProvider for animations.`
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Styling and Theming",
    content: "Styling is primarily managed by Tailwind CSS. The theme is defined in `tailwind.config.ts` and `src/app/globals.css`. Colors are defined using HSL CSS variables for easy theming. The application supports both light and dark modes, which can be toggled by the user. Custom fonts ('Inter' and 'Space Grotesk') are imported from Google Fonts in `src/app/layout.tsx`.",
  },
  {
    icon: <Route className="h-8 w-8 text-primary" />,
    title: "Routing",
    content: "The application uses the Next.js App Router. Routes are defined by the folder structure within the `src/app` directory. For example, `src/app/about/page.tsx` corresponds to the `/about` route. Dynamic routes are used for product detail pages (e.g., `src/app/products/[slug]/page.tsx`), allowing for flexible content rendering based on URL parameters.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI Integration",
    content: "The application uses Google's Genkit framework for its AI capabilities. AI-related code is located in the `src/ai` directory. This includes 'flows' which are server-side functions that can interact with generative models. A key example is the contact form submission logic in `src/ai/flows/contact-flow.ts`, which processes form data (though in this version, it's set up to use Resend for email, showcasing how AI flows can be adapted for various backend tasks).",
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Data Management",
    content: "Static content, such as product details, FAQs, and specialty information, is managed in TypeScript files within the `src/lib` directory (e.g., `src/lib/products.tsx`). This approach keeps content separate from the UI logic, making it easy to update. For multi-language support, translations are stored in `src/lib/translations.ts` and provided throughout the app via a React Context in `src/contexts/LanguageContext.tsx`.",
  },
];

export function ProjectSummary() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Project Design Overview
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A comprehensive look at the architecture, technology, and design principles of the BluezoneSurgical application.
          </p>
        </div>
        <div className="space-y-8">
          {sections.map((section) => (
            <Card key={section.title} className="shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                {section.icon}
                <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                    {section.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
