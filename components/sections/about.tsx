import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a software developer who enjoys the whole stack, but my
            sweet spot is the backend the backbone of the system. I learned
            to code by breaking other people&apos;s projects and putting them
            back together.
          </p>
          <p>
            What I do best is debugging and thinking logically. Hand me a
            misbehaving system and I&apos;ll trace it line by line until I
            find exactly where the logic broke that&apos;s the part of the
            job I genuinely enjoy.
          </p>
          <p>
            Outside of work I read more than I should and run less than I
            should.
          </p>
        </div>

        <div className="space-y-2 font-mono text-sm">
          <div className="flex justify-between border-b border-border/60 py-2">
            <span className="text-muted-foreground">Based in</span>
            <span>Earth</span>
          </div>
          <div className="flex justify-between border-b border-border/60 py-2">
            <span className="text-muted-foreground">Available</span>
            <span className="text-green-500">Open to work</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Coffee count</span>
            <span>∞</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
