import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-b border-border/60 py-20", className)}
    >
      <div className="container">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-10 flex items-baseline gap-3">
              {eyebrow && (
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
}
