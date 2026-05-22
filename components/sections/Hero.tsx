import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";

export function Hero() {
  return (
    <section className="relative overflow-visible bg-brand-primary">
      {/* ============ HEADER BAR ============
          Gebruikt de gemeenschappelijke Header component (variant onDark).
          Bevat ook de hamburger menu toggle voor mobile. */}
      <Header variant="onDark" />

      {/* ============ BODY ============
          - Eigen wrapper i.p.v. Container: rechter-padding is 24px (i.p.v. 48px)
            zodat de afgeronde foto-container ~24px van de schermrand staat.
          - Linker-padding blijft consistent met design system spacing. */}
      <div className="mx-auto max-w-[1280px] px-5 pb-8 md:pl-12 md:pr-6 lg:pb-12">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-12">
          {/* ============ LINKERHELFT (content) ============ */}
          <div className="relative z-20 flex max-w-2xl flex-col justify-center py-10 lg:py-12">
            <h1 className="font-display text-display-l font-medium text-text-on-dark">
              Een <span className="text-brand-accent">betrouwbare</span>{" "}
              chauffeur in uw eigen auto.
            </h1>

            <p className="mt-5 max-w-xl text-body-l text-text-on-dark-muted">
              Vriendelijke studentchauffeurs rijden u in uw eigen auto — naar
              Schiphol, een feest, of waar u ook moet zijn.
            </p>

            {/* In-hero CTA */}
            <div className="mt-7">
              <Button href="/boeken" variant="accentPill" size="lg">
                Boek nu je rit
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* ============ RECHTERHELFT (foto, overlapt volgende sectie) ============
              - mt-8 op desktop = 32px onder de header.
              - Negatieve margin-bottom laat de foto visueel in de Diensten
                sectie steken (~100px mobile / ~200px desktop).
              - overflow-visible op de foto-container zodat de overlap zichtbaar
                is. De rounded-card-lg corners zitten direct op het <Image>
                zodat de foto aan alle hoeken (ook onder) afgerond blijft. */}
          <div className="relative z-10 mt-2 mb-[-100px] overflow-visible lg:mt-8 lg:mb-[-200px] lg:self-stretch">
            <div className="relative h-72 overflow-visible sm:h-96 lg:h-full lg:min-h-[420px]">
              <Image
                src="/foto_2.jpg"
                alt="Tevreden passagier werkt op laptop op de achterbank tijdens een rit van Dimax"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-card-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
