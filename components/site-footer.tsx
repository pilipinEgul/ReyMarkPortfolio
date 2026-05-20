import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rey Mark. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/pilipinEgul"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/your-handle"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:you@example.com"
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
