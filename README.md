# کلینیک ترک اعتیاد خورشید مشهد

Production-quality Persian RTL medical website built with Next.js 15, TypeScript, and Tailwind CSS 4.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm start
```

## Environment

Optional — set canonical domain for SEO:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.ir
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage (17 sections) |
| `/services` | Services listing |
| `/services/[slug]` | Service detail template |
| `/doctors` | Team listing |
| `/doctors/[slug]` | Doctor profile template |
| `/family-guide` | Family guide (SEO pillar) |
| `/about` | About clinic |
| `/articles` | Articles listing |
| `/articles/[slug]` | Article template |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/addiction-treatment-mashhad` | Local SEO landing |
| `/addiction-consultation-mashhad` | Consultation landing |
| `/outpatient-addiction-treatment-mashhad` | Outpatient landing |

Draft service pages (substance-specific) exist at `/services/opioid-treatment` etc. but show draft state until client confirms services.

## Client verification required

Before publishing, confirm with the clinic:

- License numbers and certificate images
- Doctor names, credentials, photos, medical council numbers
- Service offerings (especially substance-specific pages)
- FAQ answers marked `[پاسخ باید توسط کلینیک تأیید شود]`
- Map embed URL (Google Maps / Neshan / Balad)
- Claims: years of experience, privacy policy

## SEO

- Unique metadata per page via `src/lib/metadata.ts`
- JSON-LD: Organization, WebSite, Article, Person, BreadcrumbList
- `sitemap.xml` and `robots.txt` auto-generated
- Semantic HTML, RTL, accessibility patterns

## Design system

- Primary: `#174C45`
- Background: `#FAFAF7`
- Font: Vazirmatn
- Mobile sticky CTA: تماس / مسیریابی
