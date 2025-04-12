import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="contact" className="pt-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="tracking-tighter text-4xl font-medium lg:text-5xl">
            let&apos;s build the future together
          </h2>
          <p className="mt-4">partner with us on your next project today.</p>

          <div className="mx-auto mt-10 max-w-sm lg:mt-12">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] pr-3">
              <div className="md:pr-1.5 lg:pr-0">
                <Link href="https://tally.so/r/wLoJKj">
                  <Button>contact us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
