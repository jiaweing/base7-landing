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
      question: "What services does Base 7 offer?",
      answer:
        "Base 7 offers a comprehensive range of software services including consulting, development, architecture, design, deployment, and Software as a Service (SaaS) solutions. We specialize in building scalable, impactful, and beautifully designed software that transforms ideas into reality.",
    },
    {
      id: "item-2",
      question: "What is your approach to software development?",
      answer:
        "We focus on ubiquitous computing, building technology that is accessible, adaptive, and seamlessly integrated across devices and contexts. Our local-first approach prioritizes data sovereignty, reliability, and user empowerment, while leveraging edge computing to deliver fast, intelligent, and scalable software.",
    },
    {
      id: "item-3",
      question: "Where is Base 7 located?",
      answer:
        "Base 7 is headquartered in Singapore, serving clients locally and globally. Our Singapore roots influence our approach to innovation and technology development.",
    },
    {
      id: "item-4",
      question: "How do you ensure the quality of your software solutions?",
      answer:
        "We implement rigorous quality assurance processes throughout the development lifecycle. Our team follows industry best practices, conducts thorough testing, and maintains open communication with clients to ensure that all solutions meet the highest standards of performance, security, and user experience.",
    },
    {
      id: "item-5",
      question: "How can I get started with Base 7?",
      answer:
        "Getting started is easy! Contact us through our website to schedule an initial consultation. We'll discuss your needs, goals, and vision to determine how our services can best support your objectives. From there, we'll develop a tailored plan to bring your software ideas to life.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl tracking-tighter">
            here are your questions, answered
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
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
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

          <p className="text-muted-foreground mt-6 px-8">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link
              href="mailto:hello@base07.com"
              className="text-primary font-medium hover:underline"
            >
              team directly
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
