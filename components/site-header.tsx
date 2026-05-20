import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          aria-label="Rey Mark — Home"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="Rey Mark logo"
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md object-contain"
          />
          <span>
            <span className="text-muted-foreground"></span>Rey Mark
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
