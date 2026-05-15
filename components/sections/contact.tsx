import { Mail } from "lucide-react";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <Section id="contact" eyebrow="05." title="Get in touch" className="border-b-0">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-pretty text-muted-foreground">
          I&apos;m currently open to interesting roles, freelance work, and
          collaborations. The fastest way to reach me is email — I usually
          reply within a day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <Mail className="size-4" /> {site.email}
          </a>
        </div>
      </div>
    </Section>
  );
}
