import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03." title="Selected projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-lg border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>

            <p className="text-pretty text-sm text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-4 text-sm">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Live <ArrowUpRight className="size-3.5" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-3.5" /> Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
