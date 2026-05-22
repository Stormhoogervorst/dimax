import type { Metadata } from "next";
import { Heart, Moon, Plane } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";

export const metadata: Metadata = {
  title: "Chauffeursdienst | Van A naar B zonder zelf te rijden",
  description:
    "Vriendelijke studentchauffeurs rijden u in uw eigen auto. Naar Schiphol, een feest of familiebezoek — eerlijke prijzen, altijd op tijd.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dimax — Van A naar B zonder zelf te rijden",
    description:
      "Vriendelijke studentchauffeurs rijden u in uw eigen auto. Naar Schiphol, een feest of familiebezoek — eerlijke prijzen, altijd op tijd.",
    url: "/",
    type: "website",
  },
};

const SERVICES = [
  {
    icon: Moon,
    title: "Avond uit",
    body:
      "Veilig thuis na een feest, bruiloft of borrel. Wij rijden u in uw eigen auto.",
  },
  {
    icon: Plane,
    title: "Naar Schiphol",
    body:
      "Comfortabel naar de luchthaven zonder parkeerstress. Op tijd, gegarandeerd.",
  },
  {
    icon: Heart,
    title: "Persoonlijk vervoer",
    body:
      "Familiebezoek, doktersafspraak, dagje uit. Wij rijden, u ontspant.",
  },
] as const;

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* ONZE DIENSTEN — zacht lichtblauw accent vlak met witte feature cards
            Padding-top houdt rekening met de Hero-foto die 100px (mobile) /
            200px (desktop) in deze sectie hangt — net genoeg ademruimte
            zodat eyebrow + kop dicht onder de foto staan. */}
        <section className="relative bg-brand-accent-soft pt-32 pb-16 lg:pt-52 lg:pb-32">
          <Container>
            <div className="max-w-2xl">
              <p className="text-eyebrow text-text-muted">Onze diensten</p>
              <h2 className="mt-3 font-display text-display-l font-medium text-text-primary">
                Voor elk moment de juiste chauffeur
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
              {SERVICES.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-card-lg bg-surface-white p-10 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-card bg-brand-accent-soft">
                    <Icon
                      className="h-6 w-6 text-brand-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-7 font-display text-h3 font-medium text-text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 text-body-m text-text-secondary">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* HOE HET WERKT — donkere stats-style sectie met motion-blur foto */}
        <HowItWorks />

        {/* CTA BLOK — darkFeature met foto + trust indicators */}
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
