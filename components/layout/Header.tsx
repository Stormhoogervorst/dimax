"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type HeaderVariant = "onDark" | "onLight";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Tarieven", href: "/tarieven" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Voorwaarden", href: "/voorwaarden" },
];

type HeaderProps = {
  variant?: HeaderVariant;
  /**
   * When true, the header is absolutely positioned over the first section
   * (typical for homepage hero). When false, it participates in normal flow.
   */
  overlay?: boolean;
};

export function Header({
  variant = "onLight",
  overlay = false,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "onDark";

  const wrapperClasses = cn(
    "z-50 w-full",
    overlay ? "absolute inset-x-0 top-0" : "relative",
  );

  const logoClasses = cn(
    "font-display text-2xl font-medium tracking-tight",
    isDark ? "text-text-on-dark" : "text-text-primary",
  );

  const navLinkClasses = cn(
    "text-[15px] transition-colors",
    isDark
      ? "text-text-on-dark/85 hover:text-text-on-dark"
      : "text-text-secondary hover:text-text-primary",
  );

  const menuButtonClasses = cn(
    "inline-flex h-11 w-11 items-center justify-center rounded-pill border transition-colors md:hidden",
    isDark
      ? "border-white/30 text-text-on-dark hover:bg-white/10"
      : "border-border-default text-text-primary hover:bg-brand-accent-muted",
  );

  return (
    <header className={wrapperClasses}>
      <Container className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" className={logoClasses} aria-label="Dimax — terug naar home">
          Dimax
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="hidden items-center gap-10 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/boeken"
            variant={isDark ? "accentPill" : "primaryPill"}
            className="hidden md:inline-flex"
          >
            Boek nu
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={menuButtonClasses}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden",
            isDark
              ? "bg-brand-primary-deep/95 backdrop-blur"
              : "bg-surface-cream/95 backdrop-blur border-t border-border-subtle",
          )}
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base transition-colors",
                  isDark
                    ? "text-text-on-dark hover:bg-white/10"
                    : "text-text-primary hover:bg-brand-accent-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/boeken"
              variant={isDark ? "accentPill" : "primaryPill"}
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Boek nu
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
