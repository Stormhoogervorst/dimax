"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = variant === "onDark";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const wrapperClasses = cn(
    "z-40 w-full",
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

  const hamburgerClasses = cn(
    "inline-flex items-center justify-center md:hidden transition-colors",
    isDark
      ? "text-text-on-dark hover:text-text-on-dark/80"
      : "text-text-primary hover:text-text-secondary",
  );

  return (
    <>
      <header className={wrapperClasses}>
        <Container className="flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            className={logoClasses}
            aria-label="Dimax — terug naar home"
          >
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

          <div className="hidden md:block">
            <Button
              href="/boeken"
              variant={isDark ? "accentPill" : "primaryPill"}
            >
              Boek nu
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={hamburgerClasses}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu openen"
          >
            <Menu size={28} aria-hidden="true" />
          </button>
        </Container>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobiel menu"
          className="fixed inset-0 z-50 flex flex-col bg-brand-primary px-5 py-8 md:hidden"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-2xl font-medium tracking-tight text-text-on-dark"
              aria-label="Dimax — terug naar home"
            >
              Dimax
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center text-text-on-dark transition-colors hover:text-text-on-dark/80"
              aria-label="Menu sluiten"
            >
              <X size={28} aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobiele hoofdnavigatie"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-2xl font-medium text-text-on-dark"
              >
                {item.label}
              </Link>
            ))}

            <Button
              href="/boeken"
              variant="accentPill"
              size="lg"
              className="mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Boek nu je rit
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
