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
      question: "what can you actually build for me?",
      answer:
        "Pretty much anything digital you can imagine. Web apps that work on any browser. Mobile apps for iOS and Android. Desktop software for Mac and PC. Browser extensions that supercharge your online experience. If it's software, we can build it — and make it work across all your devices.",
    },
    {
      id: "item-2",
      question: "how fast can you get it done?",
      answer:
        "Most projects go from idea to launch in under 30 days. Seriously. Our team has the experience to move quickly without cutting corners. Got something more complex? We'll map out a clear timeline so you know exactly what to expect.",
    },
    {
      id: "item-3",
      question: "what's it like working with you?",
      answer:
        "We keep it refreshingly simple. First, we chat about what you need. Then we create a plan that makes sense. We build in small chunks so you can see progress and give feedback along the way. No tech jargon, no surprises — just regular updates in plain English and a finished product you'll love.",
    },
    {
      id: "item-4",
      question: "what's this going to cost me?",
      answer:
        "That depends on what we're building, but we promise no surprise bills or hidden fees. Once we understand your project, we'll give you a clear quote. Need to work within a specific budget? Let's talk — we're flexible and can suggest options that give you the most value for your investment.",
    },
    {
      id: "item-5",
      question: "how do we get this on the app stores?",
      answer:
        "We handle the entire publishing process. Don't want to pay for developer accounts? No problem — we can publish under our company accounts at no extra cost. If you prefer your own accounts, we'll guide you through setup. For web apps, we'll either host it for you or set it up on your existing servers. Either way, we make launch day stress-free.",
    },
    {
      id: "item-6",
      question: "what happens after you build it?",
      answer:
        "We don't just build and bail. Your app is like a living thing that needs care to thrive. We offer ongoing support to keep everything running smoothly, fix any issues that pop up, and add new features as you need them. Think of us as your tech team on standby, ready when you need us.",
    },
    {
      id: "item-7",
      question: "how do we kick things off?",
      answer:
        "Just reach out! Drop us a message through our website, and we'll get back to you within 24 hours (usually much faster). Tell us a bit about what you're thinking, and we'll schedule a casual chat to explore how we can bring your idea to life. No pressure, no obligations — just a conversation about possibilities.",
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
