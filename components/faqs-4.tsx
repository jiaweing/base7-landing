"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "What projects do you build?",
      answer:
        "We build web applications, mobile apps (iOS and Android), desktop applications, and browser extensions. Our team specializes in creating cross-platform solutions that work seamlessly across different devices and operating systems.",
    },
    {
      id: "item-2",
      question: "How long does it typically take?",
      answer:
        "We deliver most projects within 30 days. Our streamlined development process and experienced team allow us to work efficiently without compromising on quality. For more complex projects, we'll provide a detailed timeline during our initial consultation.",
    },
    {
      id: "item-3",
      question: "What is your process like?",
      answer:
        "Our development process begins with an in-depth consultation to understand your requirements. We then create a detailed project plan, develop the application with regular client feedback, conduct thorough testing, and finally deploy the solution. Throughout the process, we maintain transparent communication and provide regular updates.",
    },
    {
      id: "item-4",
      question: "How much does it cost?",
      answer:
        "The cost varies depending on the complexity, features, and platforms required. We provide transparent pricing with no hidden fees. During our initial consultation, we'll assess your specific needs and provide a detailed quote. We offer flexible payment options to accommodate different budget requirements.",
    },
    {
      id: "item-5",
      question: "How is the application deployed?",
      answer:
        "We handle all aspects of deployment, including publishing your application to app stores. There are membership fees for publishing to app stores. However, we can deploy under our company's App Store and Play Store accounts free for you if needed, or assist you in setting up your own accounts. For web applications, we provide hosting solutions or can deploy to your existing infrastructure.",
    },
    {
      id: "item-6",
      question: "Do you offer maintenance and support?",
      answer:
        "We provide ongoing maintenance and support services to ensure your application continues to run smoothly. This includes regular updates, bug fixes, performance optimization, and feature enhancements. We offer different support packages tailored to your specific needs and budget.",
    },
    {
      id: "item-7",
      question: "How do I get started?",
      answer:
        "Getting started is simple! Contact us through our website, and we will get back to you within 24 hours. Let us know more about your project requirements, and we'll schedule an initial consultation to discuss your needs in detail and provide you with a tailored solution.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl tracking-tighter">
            frequently asked questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer font-semibold text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground text-center mt-6 px-8">
            We build web, mobile & desktop apps, and browser extensions within
            30 days. Let us know more about your project &{" "}
            <Link
              href="https://tally.so/r/wLoJKj"
              className="text-primary font-medium hover:underline"
              rel="noopener noreferrer"
            >
              we will get back to you in 24 hours
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
