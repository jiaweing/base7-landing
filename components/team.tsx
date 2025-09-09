import { Globe, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const members = [
  {
    name: "Jia Wei Ng",
    role: "Business Director, Co-Founder",
    avatar: "/team/jiawei.jpg",
    linkedin: "https://www.linkedin.com/in/jiaweing",
    website: "https://jiawei.ng",
  },
  {
    name: "Cheng En Liout",
    role: "Creative Director, Co-Founder",
    avatar: "/team/chengen.jpg",
    linkedin: "https://www.linkedin.com/in/cheng-en-liout",
    website: "https://lioutchengen.com",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl md:mb-16 lg:text-5xl">our team</h2>

        <div>
          <h3 className="mb-6 text-lg font-medium">Core</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {members.slice(0, 2).map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
                <div className="flex flex-row gap-2 text-muted-foreground">
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="mt-2 size-4" />
                  </Link>
                  <Link
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mt-2 size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
