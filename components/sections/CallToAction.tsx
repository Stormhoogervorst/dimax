import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * CallToAction — darkFeature blok onderaan de homepage.
 * Donkerblauw vlak met grote radius "drijft" in een cream sectie, met
 * foto links en gecentreerde tekst rechts (gestapeld op mobile).
 */
export function CallToAction() {
  return (
    <section className="bg-brand-accent-soft py-12 md:py-20">
      <Container>
        <div className="overflow-hidden rounded-card-lg bg-brand-primary p-8 md:p-12">
          <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2">
            {/* Foto: chauffeur / luxe auto interieur */}
            <div className="relative h-[280px] overflow-hidden rounded-card-lg md:h-[320px]">
              <Image
                src="/foto 5.jpeg"
                alt="Chauffeur in luxe auto interieur"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Tekst kolom — verticaal gecentreerd */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-display text-display-l font-medium leading-[1.05] text-brand-accent">
                Klaar voor uw volgende rit?
              </h2>
              <p className="mb-10 max-w-md text-body-m text-text-on-dark-muted">
                Wij brengen onze klanten al sinds 2003 veilig van A naar B.
                Heeft u een rit op de planning waarvoor u een chauffeur nodig
                heeft? Plan deze dan eenvoudig online in.
              </p>

              <div>
                <Button href="/boeken" variant="accentPill" size="lg">
                  Plan uw rit in
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
