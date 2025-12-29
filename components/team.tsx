import { Globe, LinkedinIcon } from "lucide-react";

const members = [
  {
    name: "Jia Wei Ng",
    role: "Business Director, Co-Founder",
    avatar: "/team/jiawei.jpg",
    linkedin: "https://www.linkedin.com/in/jiaweing",
    website: "https://jiaweing.com",
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
    <section className="py-12 md:py-32" id="team">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-2xl md:mb-16 lg:text-3xl">our team</h2>

        <div>
          <h3 className="mb-6 font-medium text-lg">Core</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {members.slice(0, 2).map((member, index) => (
              <div key={index}>
                <div className="size-20 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
                  <img
                    alt={member.name}
                    className="aspect-square rounded-full object-cover"
                    height="460"
                    loading="lazy"
                    src={member.avatar}
                    width="460"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="block text-muted-foreground text-xs">
                  {member.role}
                </span>
                <div className="flex flex-row gap-2 text-muted-foreground">
                  <a
                    href={member.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkedinIcon className="mt-2 size-4" />
                  </a>
                  <a
                    href={member.website}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Globe className="mt-2 size-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
