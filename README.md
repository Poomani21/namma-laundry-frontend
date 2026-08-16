# Namma Laundry Frontend

Namma Laundry — Phase 1: Complete Frontend Foundation & UI

Act as a 30+ years experienced senior UI/UX designer and frontend architect.

Build Phase 1 of the new Namma Laundry website.

IMPORTANT

This is a completely new website.

New domain:

nammalaundry.in

Do NOT copy or minimally redesign the old website.

I have attached/reference images from Namma Laundry's existing WhatsApp/store promotional offers. Use those images ONLY as a brand/style reference.

The reference is mainly for:

Bottle Green

White

Gold/Golden

Existing brand personality

Price/service presentation

Premium local-business feeling

Do NOT copy the poster layout.

Create a completely fresh professional website.

DESIGN DIRECTION

The website must feel:

Premium

Clean

Modern

Trustworthy

Professional

Established

Local but premium

Easy to read

Mobile-first

Conversion-focused

Use:

Bottle Green + White + Gold

Use gold as an accent, not as the main colour.

Avoid:

Excessive animations

Excessive gradients

Over-decoration

Huge text

Crowded sections

Generic SaaS appearance

Canva-poster appearance

AI-looking generic content

Use excellent spacing, typography, hierarchy and responsive design.

BUSINESS POSITIONING

Namma Laundry has approximately 10 years of local experience.

The website should communicate:

Experience

Trust

Professional laundry care

Quality

Local presence

Convenience

Easy ordering

Do NOT invent:

Phone numbers

Addresses

Ratings

Awards

Certifications

Customer numbers

Exact service areas

Prices

Reviews

Use placeholders where real information is not available:

[PHONE NUMBER]

[WHATSAPP NUMBER]

[ADDRESS]

[SERVICE AREA]

[BUSINESS HOURS]

[PRICE]

CREATE THESE ROUTES

Build the frontend for:

/
 /services
 /services/blankets
 /services/curtains
 /services/carpets
 /services/home-linen
 /services/dry-cleaning
 /services/sarees
 /services/shoes
 /services/bags
 /services/wash-fold
 /services/wash-iron
 /services/steam-ironing
 /services/stain-removal

 /pricing
 /estimate

 /knowledge-centre
 /knowledge-centre/:slug

 /about
 /reviews
 /contact

 /admin
 /admin/login
 /admin/dashboard
 /admin/services
 /admin/pricing
 /admin/articles
 /admin/reviews
 /admin/enquiries
 /admin/settings


For this phase, the admin routes can be UI skeletons only.

Do NOT implement Firebase yet.

Do NOT implement Firestore yet.

Do NOT implement Cloudflare R2 yet.

Those will be handled in later phases.

HEADER

Create a professional responsive header.

Desktop:

Namma Laundry logo

Home

Services

Pricing

Online Estimate

Knowledge Centre

About

Reviews

Contact

Primary CTA: Get Estimate

Mobile:

Logo

Hamburger menu

Clean mobile navigation

Do not overcrowd the header.

HOMEPAGE

Create a complete premium homepage.

Sections:

1. Hero

Clearly communicate:

Professional laundry care

Approximately 10 years of experience

Local trusted service

Include:

Strong headline

Short supporting text

Get Estimate

WhatsApp

Call

Do not overcrowd the hero.

2. Trust / Experience

Show approximately 10 years of experience.

Use elegant trust cards/numbers.

Do not invent statistics.

3. Services

Show the major services:

Blankets

Curtains

Carpets

Home Linen

Dry Cleaning

Sarees

Shoes

Bags

Wash & Fold

Wash & Iron

Steam Ironing

Stain Removal

4. Why Choose Us

Show concise benefits:

Experienced service

Professional care

Fabric-conscious approach

Convenient service

Transparent pricing

Local experience

5. How It Works

Use a simple process:

Choose Service → Get Estimate → Book/Contact → Professional Care → Completion

Do not claim pickup/delivery unless provided.

6. Pricing Preview

Create a pricing preview section.

CTA:

View Pricing

7. Online Estimate CTA

Strong section encouraging customers to calculate an estimate.

CTA:

Get Your Estimate

8. Reviews

Create review cards using clearly marked placeholder reviews.

Do not invent real reviews.

9. Knowledge Centre

Show article cards with placeholder/sample article titles.

10. Service Area

Use:

[SERVICE AREA]

11. Final CTA

Get Estimate / WhatsApp / Call

12. Footer

Include:

Logo

Navigation

Services

Knowledge Centre

Contact

Phone

WhatsApp

Address

Business hours

Social links placeholders

Copyright

SERVICES PAGE

Create a professional services overview.

Use categories such as:

Laundry

Wash & Fold

Wash & Iron

Steam Ironing

Dry Cleaning

Dry Cleaning

Sarees

Home Fabric Care

Blankets

Curtains

Carpets

Home Linen

Specialised Care

Shoes

Bags

Stain Removal

Use reusable ServiceCard components.

INDIVIDUAL SERVICE PAGES

Each service needs a professional dedicated layout.

Every service page should contain:

Breadcrumb

Hero

Service title

Short introduction

Why this service is needed

What we handle

Process

Suitable items/fabrics

Frequency/recommendation placeholder

Pricing section

Online Estimate CTA

Why Choose Namma Laundry

FAQs

Related Services

WhatsApp CTA

Call CTA

Booking CTA

Create these pages:

Blankets

Curtains

Carpets

Home Linen

Dry Cleaning

Sarees

Shoes

Bags

Wash & Fold

Wash & Iron

Steam Ironing

Stain Removal

Use reusable components and data-driven page architecture.

PRICING PAGE

Create the complete pricing UI.

Do NOT hardcode real prices.

Use placeholder pricing data for now.

The architecture should later allow prices to come from Firestore.

Display:

Service

Item

Unit

Price

Notes

ONLINE ESTIMATE PAGE

Create the complete frontend UI for the estimate system.

Customer should be able to:

Select service

Select item

Enter quantity

Add multiple items

Remove items

See subtotal

See estimated total

Use placeholder pricing data during this phase.

Show:

Estimated Total

Then buttons:

Book Order

WhatsApp

Call

Clearly display:

"This is an estimated price. Final pricing may vary depending on item condition, fabric, size, stains and special treatment."

The actual Firestore pricing integration comes in Phase 2.

KNOWLEDGE CENTRE

Create:

/knowledge-centre

And reusable article page:

/knowledge-centre/:slug

Create sample article cards for:

How frequently blankets should be professionally cleaned

How frequently curtains should be cleaned

Carpet cleaning frequency

Upholstery cleaning

Monsoon fabric care

Seasonal cleaning

Pet households

Homes with children

Fabric-care tips

Washing vs dry cleaning vs specialised cleaning

Do not make the content extremely long.

Use concise useful content.

Later Firestore will manage articles.

ABOUT PAGE

Create professional sections for:

Approximately 10 years experience

Local presence

Professional care

Customer focus

Service philosophy

Quality/process

Use placeholders for information not provided.

REVIEWS PAGE

Create:

Review hero

Review grid

Trust section

CTA

Use placeholder reviews clearly marked as placeholders.

CONTACT / BOOKING PAGE

Create:

Contact form

Name

Phone

Email

Service

Message

Preferred contact method

Also show:

Phone placeholder

WhatsApp placeholder

Address placeholder

Service area placeholder

Business hours placeholder

The form does NOT need Firestore integration yet.

ADMIN UI SKELETON

Create the visual admin panel only.

Routes:

/admin
/admin/login
/admin/dashboard
/admin/services
/admin/pricing
/admin/articles
/admin/reviews
/admin/enquiries
/admin/settings


Create a clean sidebar and dashboard.

Dashboard cards:

Services

Pricing Items

Articles

Reviews

Enquiries

Create table/form UI placeholders.

IMPORTANT:

Do NOT implement Firebase authentication or Firestore in Phase 1.

COMPONENT SYSTEM

Create reusable components:

Header

Footer

Button

CTAButton

WhatsAppButton

CallButton

ServiceCard

ServiceGrid

PricingCard

PricingTable

EstimateBuilder

EstimateItem

ReviewCard

ArticleCard

FAQ

Breadcrumb

ContactForm

SectionHeading

TrustSection

ProcessSection

LoadingState

EmptyState

ErrorState

AdminSidebar

AdminHeader

AdminTable

AdminForm

Keep components reusable.

RESPONSIVE DESIGN

Test and optimize:

1920px

1440px

1280px

1024px

768px

430px

390px

375px

There must be:

No horizontal scrolling

No text overflow

No broken cards

No broken buttons

No broken mobile navigation

No overlapping content

ANIMATIONS

Use only subtle professional animations.

Allowed:

Fade

Small hover

Gentle transitions

Scroll reveal where useful

Avoid excessive animation.

SEO FOUNDATION

For each page create the correct structure for:

H1

H2/H3

Page title

Meta description

Canonical

Open Graph

Alt text

Do not add fake business information.

IMPORTANT TECHNICAL RULES

For this phase:

DO NOT add:

Supabase

Lovable backend

Firebase

Firestore

Cloudflare R2

Payment gateway

Customer accounts

Complex booking system

Those will be implemented later.

Use clean frontend architecture so those integrations can be added without rebuilding the UI.

IMPORTANT

Do NOT redesign completed sections repeatedly.

Do NOT create only a homepage.

Build the complete frontend structure in this phase.

Do NOT stop at a visual mockup.

The project must run locally with:

npm install
npm run dev


Fix any frontend/build/import/type errors created during this phase.

At the end, keep the project in a clean state ready for Phase 2.

PHASE 1 ONLY

Complete the frontend/design foundation first.

Do not start Firebase/backend/R2 implementation yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a8b16036-cae1-4ac0-9f2f-0190339fdde6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
