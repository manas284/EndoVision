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
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { toast } = useToast();
  const { ref, controls, sectionVariants, itemVariants } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { translations } = useLanguage();
  
  const contactTranslations = translations.contact;

  const contactFormSchema = z.object({
    name: z.string().min(2, contactTranslations.form.validation.name),
    email: z.string().email(contactTranslations.form.validation.email),
    specialty: z.string().min(1, contactTranslations.form.validation.specialty),
    message: z.string().min(10, contactTranslations.form.validation.messageMin).max(500, contactTranslations.form.validation.messageMax),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

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
          title: contactTranslations.toast.success.title,
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: contactTranslations.toast.failure.title,
          description: result.message,
        });
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: contactTranslations.toast.error.title,
        description: contactTranslations.toast.error.description,
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
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{contactTranslations.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {contactTranslations.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
            <motion.div className="space-y-8" variants={itemVariants}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{contactTranslations.info.email.title}</h3>
                    <p className="text-muted-foreground">{contactTranslations.info.email.description}</p>
                    <a href="mailto:bluezonesurgical@gmail.com" className="text-primary font-medium hover:underline">bluezonesurgical@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{contactTranslations.info.phone.title}</h3>
                    <p className="text-muted-foreground">{contactTranslations.info.phone.description}</p>
                    <a href="tel:+919653472948" className="text-primary font-medium hover:underline">+91 9653472948</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{contactTranslations.info.office.title}</h3>
                    <p className="text-muted-foreground">{contactTranslations.info.office.address}</p>
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
                          <FormLabel>{contactTranslations.form.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={contactTranslations.form.placeholders.name} {...field} disabled={isSubmitting} />
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
                          <FormLabel>{contactTranslations.form.email}</FormLabel>
                          <FormControl>
                            <Input placeholder={contactTranslations.form.placeholders.email} {...field} disabled={isSubmitting} />
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
                          <FormLabel>{contactTranslations.form.specialty}</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={contactTranslations.form.placeholders.specialty} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Arthroscopy">{contactTranslations.specialties.arthroscopy}</SelectItem>
                              <SelectItem value="Hysteroscopy">{contactTranslations.specialties.hysteroscopy}</SelectItem>
                              <SelectItem value="Urology">{contactTranslations.specialties.urology}</SelectItem>
                              <SelectItem value="General Inquiry">{contactTranslations.specialties.general}</SelectItem>
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
                          <FormLabel>{contactTranslations.form.message}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={contactTranslations.form.placeholders.message}
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
                          {contactTranslations.form.sending}
                        </>
                      ) : (
                        contactTranslations.form.submit
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
