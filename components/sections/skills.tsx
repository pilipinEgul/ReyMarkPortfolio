import { Section } from "@/components/section";
import { skills } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills" eyebrow="02." title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.group}
            className="rounded-lg border border-border/60 bg-card/40 p-5"
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {group.group}
            </h3>
            <ul className="space-y-1.5 text-sm">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
