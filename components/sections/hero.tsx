import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grain opacity-60" aria-hidden />
      <div className="container relative grid min-h-[calc(100vh-3.5rem)] grid-cols-1 items-center gap-12 !pt-0 pb-0 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div
            className="float-right ml-3 mt-1 w-28 opacity-0 animate-fade-in sm:w-36 md:hidden"
            style={{ animationDelay: "300ms" }}
            aria-hidden
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/portrait.png"
                alt=""
                fill
                sizes="(max-width: 640px) 112px, 144px"
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
          <p
            className="mb-4 font-mono text-sm text-muted-foreground opacity-0 animate-fade-in-up"
            style={{ animationDelay: "60ms" }}
          >
            Hi, my name is
          </p>
          <h1
            className="text-balance text-4xl font-semibold tracking-tight opacity-0 animate-fade-in-up md:text-6xl lg:text-7xl"
            style={{ animationDelay: "180ms" }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-pan">
              {site.name}
            </span>
            <span className="ml-0.5 inline-block w-[0.6ch] -translate-y-[0.08em] align-middle text-primary/80 animate-blink-caret">
              _
            </span>
          </h1>
          <h2
            className="mt-2 text-balance text-3xl font-semibold tracking-tight text-muted-foreground opacity-0 animate-fade-in-up md:text-5xl lg:text-6xl"
            style={{ animationDelay: "300ms" }}
          >
            I build things for the web.
          </h2>
          <p
            className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground opacity-0 animate-fade-in-up md:text-lg"
            style={{ animationDelay: "420ms" }}
          >
            {site.bio}
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "540ms" }}
          >
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group transition-transform hover:-translate-y-0.5",
              )}
            >
              See my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "transition-transform hover:-translate-y-0.5",
              )}
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto hidden w-full max-w-[520px] self-end opacity-0 animate-fade-in md:block md:mx-0 md:ml-auto md:-mt-16 lg:max-w-[600px] lg:-mt-24"
          style={{ animationDelay: "300ms" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-pink-500/20 blur-3xl animate-float"
          />
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/portrait.png"
              alt="Portrait"
              fill
              sizes="(min-width: 1024px) 600px, (min-width: 768px) 520px, 360px"
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <span className="block size-8 animate-bounce rounded-full border border-border/60 p-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-full">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </section>
  );
}
