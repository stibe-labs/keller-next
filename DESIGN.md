# Keller Adapt — design system

Follow this file for every page and component: colour, type, spacing, radii, and components. Keep the Keller name, logo, and terracotta accent. Do not borrow another brand’s colours or words.

## Mood

Warm paper, ink, and one terracotta accent. A made-in-Kerala product company, not a software template. Editorial serif for headlines. Quiet sans for interface text. Large type at the footer. One action per screen.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg-canvas` | `#F3EEE6` | Page background |
| `--color-bg-light` | `#E7DFD3` | Alternate sections |
| `--color-bg-card` | `#FBF7F2` | Cards |
| `--color-ink` / `--color-text-main` | `#1C1410` | Headlines, navbar, footer |
| `--color-text-muted` | `#5E534C` | Body |
| `--color-primary` | `#E24B32` | The only accent: buttons, links, eyebrows |
| `--color-primary-dark` | `#9E3222` | Hover, pressed |
| `--color-border` | `#DDD2C6` | Hairlines |
| `--color-on-ink` | `#F6F0E8` | Text on ink surfaces |

No purple gradients. No green status colours. No second accent.

## Typography

- Display: **Fraunces** (optical size). Headlines, dropdown titles, footer wordmark.
- UI: **Outfit**. Navigation, buttons, body, forms.
- Headline measure: short. The hero is six words or fewer.
- Hero size: `clamp(3.4rem, 7vw, 6.2rem)`, line-height `0.92`, weight `560`.
- Section titles: `clamp(2.1rem, 4vw, 3.4rem)`, left aligned.
- Body: `1.05rem`, line-height `1.6`, muted ink.
- Eyebrows: Outfit, 12px, weight 600, tracking `0.16em`, uppercase, terracotta. No pill.

## Spacing and shape

- Container: `1240px`, side padding `24px`.
- Section padding: `clamp(72px, 9vw, 112px)` vertical.
- Radii: buttons `8px`, cards `16px`, inputs `8px`. Avoid full pills on buttons.
- Shadows: soft and short. `0 10px 30px rgba(28, 20, 16, 0.06)`.

## Components

### Navbar

Full-width mega menu on warm ink (`#1C1410`). Logo left, section menus centre, one action on the right: **Request a quote**. Dropdown: serif headline, short paragraph, one text link, stacked rows. Mobile: the same links in a drawer, one quote button. Do not add a second competing button.

### Hero

Order: eyebrow, one headline, one sentence, one button, one line of microcopy, one visual. The visual sits on the right on desktop and below the copy on small screens. Proof (ratings) sits under the hero, not as a second call to action.

Primary label: **Browse the catalog**.  
Microcopy: answers shipping and effort. Example: “Made in Kochi. Ships in 9 days. No account to enquire.”

### Call to action

One goal for this page: a consultation request.  
Primary label: **Request a clinic quote**.  
Microcopy under the button: “A specialist in Kochi replies within one working day. No payment to enquire.”

### Footer

Large Type. The wordmark is the biggest type on the page. Then columns: Solutions, Company, contact (email, phone, Kochi address), marketplaces. Bottom row: copyright, **Privacy**, **Terms**. On small screens, stack the columns and let the wordmark scale down.

### Icons

One clay style for every feature mark: same top-left light, same terracotta, no extra tile or border. Display size 64–80px in feature rows, smaller only in tight UI (nav, contact rows). Do not mix emoji with these marks.

### Motion

Sections arrive as they enter the viewport (`animation-timeline: view()`). Hero art may drift slightly. Everything stops under `prefers-reduced-motion: reduce`. No parallax that hides content. No animation that blocks the quote button.

## Do not

- Two equal buttons in one cluster.
- “Get started”, “Learn more”, or “Submit” as a primary label.
- Flat emoji as feature icons.
- A footer that is only a grey copyright line.
- Hard-coded greens, purples, or font sizes outside this scale.
