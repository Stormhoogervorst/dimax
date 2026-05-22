import Image from "next/image";

type Step = {
  n: string;
  title: string;
  body: string;
};

const STEPS: readonly Step[] = [
  {
    n: "01",
    title: "Boek online",
    body: "Vul snel het formulier in: ophaaltijd, locatie en bestemming.",
  },
  {
    n: "02",
    title: "Wij bevestigen",
    body:
      "Binnen een uur ontvangt u een bevestiging met de naam van uw chauffeur.",
  },
  {
    n: "03",
    title: "Veilig op weg",
    body:
      "Uw chauffeur staat op tijd voor de deur en rijdt u in uw eigen auto.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-brand-primary md:min-h-[600px]">
      {/* Achtergrondfoto — auto in beweging (motion blur) */}
      <Image
        src="/foto%203.webp"
        alt="Onderweg met een chauffeur van Dimax"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Donkerblauwe overlay — top lichter, bottom donkerder (10% donkerder) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 to-brand-primary"
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1280px] flex-col px-5 pt-16 pb-12 md:min-h-[600px] md:px-12 md:pt-20 md:pb-16">
        {/* ============ TOP: kop rechtsboven ============ */}
        <div className="md:flex md:justify-end">
          <div className="max-w-md">
            <p className="text-sm font-medium text-brand-accent">
              Hoe het werkt
            </p>
            <h2 className="mt-3 font-display text-display-l font-medium leading-[1.05] text-text-on-dark">
              In 3 stappen geregeld.
            </h2>
            <p className="mt-4 text-body-m text-text-on-dark-muted">
              Geen wachttijden, geen verrassingen. Boek vandaag, wij rijden u
              veilig naar uw bestemming.
            </p>
          </div>
        </div>

        {/* Spacer — laat de achtergrondfoto ademen tussen kop en stappen */}
        <div className="min-h-[64px] flex-1" />

        {/* ============ BOTTOM: stappen ============ */}
        <div className="mt-12 md:mt-20">
          {/* Scheidingslijn met accent-markeringen — alleen desktop */}
          <div
            aria-hidden="true"
            className="relative hidden md:block"
          >
            <div className="h-px w-full bg-text-on-dark-muted/30" />
            <div className="absolute inset-x-0 top-0 grid grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.n}>
                  <div className="-mt-1 h-2 w-2 bg-brand-accent" />
                </div>
              ))}
            </div>
          </div>

          <ol className="mt-8 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <li key={step.n}>
                <span
                  aria-hidden="true"
                  className="font-display text-display-l font-medium leading-none text-text-on-dark"
                >
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-h4 font-medium text-text-on-dark">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-xs text-body-s text-text-on-dark-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
