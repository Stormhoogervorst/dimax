import Link from "next/link";
import { Container } from "@/components/ui/Container";

type FooterLink = { label: string; href: string };

const NAV_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Voorwaarden", href: "/voorwaarden" },
  { label: "Boeken", href: "/boeken" },
];

const EMAIL = "info@dimax.nl";
const PHONE_DISPLAY = "+31 6 57 00 44 59";
const PHONE_HREF = "tel:+31657004459";

export function Footer() {
  return (
    <footer className="bg-brand-primary">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-display text-3xl font-medium tracking-tight text-text-on-dark"
              aria-label="Dimax — terug naar home"
            >
              Dimax
            </Link>
            <p className="max-w-xs text-[15px] text-text-on-dark-muted">
              Van A naar B zonder zelf te rijden.
            </p>
          </div>

          {/* Navigatie */}
          <nav aria-label="Footer navigatie">
            <h2 className="font-display text-h4 font-medium text-text-on-dark">
              Navigatie
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-text-on-dark-muted transition-colors hover:text-text-on-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-h4 font-medium text-text-on-dark">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-text-on-dark-muted transition-colors hover:text-text-on-dark"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-text-on-dark-muted transition-colors hover:text-text-on-dark"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border-on-dark pt-6">
          <p className="text-[13px] text-text-on-dark-muted">
            &copy; 2026 Dimax Management Assistence. Alle rechten voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  );
}
