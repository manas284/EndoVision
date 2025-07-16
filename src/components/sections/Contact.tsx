"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/app/actions';
import * as React from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  specialty: z.string().min(1, "Please select a specialty."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const { ref, controls, sectionVariants, itemVariants } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      specialty: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.message,
        });
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a question or need support? Reach out to our team.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
            <motion.div className="space-y-8" variants={itemVariants}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">Our support team is available 24/7.</p>
                    <a href="mailto:contact@endovision.com" className="text-primary font-medium hover:underline">contact@endovision.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Speak with our specialists directly.</p>
                    <a href="tel:+917389073923" className="text-primary font-medium hover:underline">+91 7389073923</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">Office</h3>
                    <p className="text-muted-foreground">123 Innovation Drive<br/>Navi Mumbai, India</p>
                  </div>
                </div>
            </motion.div>
          <motion.div variants={itemVariants}>
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="specialty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specialty</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a specialty" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Arthroscopy">Arthroscopy</SelectItem>
                              <SelectItem value="Hysteroscopy">Hysteroscopy</SelectItem>
                              <SelectItem value="Urology">Urology</SelectItem>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help..."
                              className="min-h-[120px]"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
