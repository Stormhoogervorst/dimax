# Dimax — Design Guide

> Leidraad voor de Dimax website. Voor jou, de klant, en als referentie naast `.cursorrules`.

## Het merk in één zin

Dimax is een chauffeursdienst voor mensen van 30-99 jaar die zich willen laten rijden in hun eigen auto, met vriendelijke studentchauffeurs en eerlijke prijzen.

**Slogan:** *Van A naar B zonder zelf te rijden!*

## Designfilosofie

**"Corporate luxe"** — professioneel en betrouwbaar zonder kil te zijn. De doelgroep (30-99 jaar, vermogend) wil zien dat dit serieus is, maar ook warm en menselijk genoeg om hun avondje uit aan toe te vertrouwen.

Concreet betekent dit:
- **Donkerblauw** als hoofdkleur (vertrouwen, autoriteit) gecombineerd met **warm cream** (geen klinisch wit)
- **Grote afgeronde hoeken** — voelt vriendelijk, niet hard/technisch
- **Medium font weights** in plaats van bold — rustige autoriteit, niet schreeuwerig
- **Subtiele micro-animaties** — geen flashy effecten die de doelgroep wegjagen

## Kleurenpalet

### Hoofdkleuren

| Kleur | Hex | Wanneer |
|---|---|---|
| **Primary** (donkerblauw) | `#0B2545` | Hero achtergrond, footer, donkere CTA, headings op licht |
| **Primary Deep** | `#081A33` | Hover state op donkere knoppen |
| **Primary Mid** | `#13315C` | Borders op donker, subtiele dividers |
| **Accent** (lichtblauw) | `#8DA9C4` | Pills, cards op donkere achtergrond, pricing cards |
| **Accent Soft** | `#D9E2EC` | Footer CTA blok, grote rustige vlakken |
| **Accent Muted** | `#EEF2F7` | Hover op accent knoppen |

### Surface (achtergronden)

| Kleur | Hex | Wanneer |
|---|---|---|
| **Cream** | `#F7F5EE` | Hoofdcanvas voor lichte secties — warm, niet klinisch |
| **White** | `#FFFFFF` | Feature cards bovenop accent achtergrond |
| **Off-white** | `#FAFAF7` | Subtiel afwijkend voor gestapelde vlakken |

### Tekst

| Kleur | Hex | Wanneer |
|---|---|---|
| **Primary** | `#0B2545` | Headings + body op licht |
| **Secondary** | `#3A5275` | Body paragraphs |
| **Muted** | `#6B7B95` | Eyebrows, captions, footer links |
| **On Dark** | `#FFFFFF` | Tekst op donkerblauw |
| **On Dark Muted** | `#B8C5D6` | Subtitels op donker |
| **On Accent** | `#0B2545` | Tekst op lichtblauwe vlakken |

### Wat NIET te gebruiken

- ❌ Felle kleuren (rood, geel, knal-blauw)
- ❌ Pure zwart `#000` — alle "donker" is `#0B2545` voor cohesie
- ❌ Koel grijs — altijd warme cream
- ❌ Goud sterren in reviews — sterren zijn donkerblauw

## Typografie

**Font:** Inter (display + body). Optioneel Instrument Serif voor extra luxe-toets.

| Schaal | Gebruik | Grootte |
|---|---|---|
| Display XL | Hero hoofdkop | 56-96px |
| Display L | Sectiekoppen | 40-64px |
| Display M | Subsecties, grote statistieken | 32-44px |
| H3 | Card-koppen | 24px |
| H4 | Pricing card titels | 20px |
| Body L | Lead paragraphs | 18px |
| Body M | Standaard body | 16px |
| Body S | Footer links | 14px |
| Eyebrow | Sectie-labels boven kop | 14px (sentence case, niet UPPERCASE) |

**Belangrijk:** Headings zijn altijd **medium weight (500)**, niet bold. Dit geeft "rustige autoriteit" — een belangrijk concept voor dit merk.

## Spacing

- **Section vertical:** 128px desktop / 64px mobile
- **Container max-width:** 1280px
- **Container padding:** 48px desktop / 20px mobile
- **Card padding:** 32px standaard, 40px voor grote cards

## Border radii

Grote radii zijn bewust gekozen — voelen vriendelijker voor de doelgroep dan strakke hoekige UI.

- Buttons: 12px (of pill 9999px voor hero/header CTA)
- Cards: 20px (standaard), 28px (groot)
- Inputs: 12px
- Avatars: pill

## Component overzicht

### Buttons

| Variant | Gebruik |
|---|---|
| **Primary** | Donkerblauwe rechthoekige CTA in lichte secties |
| **Primary Pill** | Donkerblauwe pill — header CTA, hero CTA |
| **Accent Pill** | Lichtblauwe pill op donkere achtergrond — signature button |
| **Ghost** | Outlined knop, secundaire actie in lichte secties |
| **Ghost on Dark** | Outlined op donker — secundair in hero |
| **Phone Pill** | Combinatie-pill met label + nummer (hero contact) |

### Cards

| Variant | Achtergrond | Wanneer |
|---|---|---|
| **Feature** | Wit | Op accent achtergrond, met icoon |
| **Pricing** | Accent (lichtblauw) | Tariefopties |
| **Review** | Accent | Customer reviews met sterren |
| **Info Overlay** | Wit + grote shadow | Floats op hero foto |

### Secties

| Variant | Wanneer |
|---|---|
| **Dark Hero** | Hoofdhero op homepage |
| **Light Hero** | Hero op subpagina's (Reviews, etc.) |
| **Dark Stats** | Statistieken sectie met foto-overlay |
| **Accent Block** | Reviews preview, footer CTA |
| **Dark Feature** | "Waarom Dimax" sectie met illustratie |

## Sitemap & paginastructuur

Op basis van het intakeformulier:

```
/                  Home
/tarieven          Tarieven
/over-ons          Over ons
/voorwaarden       Voorwaarden
/boeken            Boeking aanvragen (MVP)
```

**Belangrijk voor SEO:** URL's nu vastleggen, later wijzigen = ranking verlies + 301 redirects.

## Booking flow (MVP)

Minimaal nodig om live te gaan:

1. **Startlocatie + tijd**
2. **Eventuele tussenstops**
3. **Eindlocatie**
4. **Eigen auto of auto regelen?**
5. **Opmerkingen / aanvullende info**
6. **Contactgegevens** (naam, e-mail, telefoon)

Boekingsvenster: max 3 maanden vooruit, minimaal 1 week van tevoren.

Flow eindigt met: bevestigingsmail naar klant + notificatie naar Dimax team. Geen online betaling in MVP.

## Inspiratie

Klant noemde drie websites:

1. **chauffeursdiensten.nl** — simpele tool voor aanvraag (maar geen offerte-flow, directe dienst-aanvraag)
2. **pantarij.nl** — professionele look
3. **sneleentaxi.nl** — aanvraagsysteem

Eigen design systeem is gebaseerd op de **Rido Framer template** structuur, met donkerblauw palet i.p.v. groen.

## SEO basis

- `lang="nl"` op HTML
- Eén `<h1>` per pagina
- Metadata template: `%s | Dimax`
- Sitemap + robots.txt automatisch via Next.js
- Structured data: `LocalBusiness` schema met `TaxiService` type
- Beelden met betekenisvolle `alt` tekst
- Page speed: alle foto's via `next/image`, geen externe fonts laden zonder display swap

## Roadmap

**Fase 1 — Marketing site (NU):**
- Homepage, Tarieven, Over ons, Voorwaarden
- Simpele "vraag rit aan" formulier dat e-mail stuurt
- SEO basis op orde

**Fase 2 — Booking MVP:**
- Volledige booking flow met intake
- Notificaties naar team
- Bevestigingsmails

**Fase 3 — Later (niet nu bouwen):**
- Klant-account, betaling, agenda-sync, kortingscodes, beheerdersdashboard

---

*Laatst bijgewerkt: bij elke design beslissing aanpassen. Dit document is de single source of truth.*
