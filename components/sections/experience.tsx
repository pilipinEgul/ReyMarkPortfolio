import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-border/60 pl-8">
        {experience.map((item) => (
          <li key={item.company} className="relative">
            <span className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-background bg-foreground" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">
                {item.role}
              </h3>
              <span className="text-muted-foreground">·</span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.company} <ArrowUpRight className="size-3.5" />
                </a>
              ) : (
                <span className="text-foreground/80">{item.company}</span>
              )}
            </div>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {item.period}
            </p>
            <p className="mt-3 max-w-2xl text-pretty text-sm text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
