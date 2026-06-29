---
name: Serene Composure
colors:
  surface: '#fff8f0'
  surface-dim: '#e0d9cf'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e8'
  surface-container: '#f4ede3'
  surface-container-high: '#eee7dd'
  surface-container-highest: '#e9e2d7'
  on-surface: '#1e1b15'
  on-surface-variant: '#4d4540'
  inverse-surface: '#333029'
  inverse-on-surface: '#f7f0e5'
  outline: '#7e756f'
  outline-variant: '#cfc4bd'
  surface-tint: '#635d5a'
  primary: '#181512'
  on-primary: '#ffffff'
  primary-container: '#2d2926'
  on-primary-container: '#96908b'
  inverse-primary: '#cdc5c0'
  secondary: '#735a3a'
  on-secondary: '#ffffff'
  secondary-container: '#fddab2'
  on-secondary-container: '#785e3e'
  tertiary: '#161613'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2a27'
  on-tertiary-container: '#92918d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9e1dc'
  primary-fixed-dim: '#cdc5c0'
  on-primary-fixed: '#1e1b18'
  on-primary-fixed-variant: '#4b4642'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#e2c19b'
  on-secondary-fixed: '#291801'
  on-secondary-fixed-variant: '#594325'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fff8f0'
  on-background: '#1e1b15'
  surface-variant: '#e9e2d7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  title-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 40px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

The design system is rooted in the concept of "Razin"—meaning composed, dignified, and balanced. It targets a discerning audience seeking modest Islamic fashion that harmonizes traditional values with a modern, high-end lifestyle. 

The aesthetic is **Minimalist & Sophisticated**, leaning into a "New Luxury" approach. It avoids the clutter of traditional e-commerce in favor of editorial-style layouts, generous whitespace, and a focus on textile quality. The emotional response should be one of tranquility and confidence—an "unhurried" shopping experience that feels like browsing a high-end boutique in a quiet gallery space. 

Visual markers include high-contrast but soft-edged elements, subtle tonal layering, and an emphasis on photography that celebrates drape, texture, and silhouette.

## Colors

This palette is derived from natural earth pigments and high-end textiles, moving away from clinical whites to warmer, more organic foundations.

*   **Primary (Charcoal - #2D2926):** Used for primary typography and high-impact structural elements. It provides the "anchor" of composure.
*   **Secondary (Muted Bronze - #A68966):** Used sparingly for call-to-actions, price points, and highlights to signify quality.
*   **Tertiary (Warm Sand - #F4F1EC):** The primary background color, providing a soft, non-glare canvas for imagery.
*   **Neutral (Taupe - #E5DED4):** Used for secondary containers, borders, and UI backgrounds to create subtle depth.
*   **Accent (Linen Cream - #FAF9F6):** Used for card backgrounds and surfaces to pull them forward against the sand background.

High contrast is achieved through the interplay of Charcoal text on Linen surfaces, while softness is maintained by the absence of pure black or pure white.

## Typography

The typography strategy pairs a heritage-inspired serif with a functional, contemporary sans-serif to bridge the gap between tradition and modern e-commerce.

*   **Headlines (Playfair Display):** Should be set with tight tracking and ample line height. Use this for product names, editorial headers, and collection titles.
*   **Body & UI (Manrope):** Chosen for its modern, balanced proportions. It ensures maximum legibility for product descriptions and technical details.
*   **Arabic Typography:** Use a high-contrast Naskh-style typeface for headlines (e.g., *Amiri*) to match the elegance of Playfair Display, and a clean, modern Kufi or Neo-Naskh for body text to maintain consistency with Manrope.
*   **Hierarchy:** Use the uppercase `label-sm` for categories, metadata, and small buttons to provide a "structured" look that balances the more fluid serif headlines.

## Layout & Spacing

The layout philosophy is **Fluid-Refined**. It utilizes a 12-column grid for desktop and a 4-column grid for mobile, but emphasizes "asymmetric balance" where elements often bleed or offset to create an editorial feel.

*   **Spaciousness:** Margins are wider than standard e-commerce (min 40px) to give the content "room to breathe."
*   **Vertical Rhythm:** Section gaps are intentionally large (120px+) to slow down the user’s scroll and encourage appreciation of the imagery.
*   **Content Reflow:** On mobile, product grids should prioritize large, single-column images or asymmetrical 2-column layouts to maintain the high-end aesthetic.
*   **Safe Zones:** Text overlays on imagery must be contained within defined inner-margin safe zones to ensure legibility regardless of the photo's composition.

## Elevation & Depth

To maintain a "composed" feel, the design system avoids heavy shadows and instead uses **Tonal Layering** and **Soft Ambient Occlusion**.

*   **Tonal Tiers:** The hierarchy is created by placing lighter surfaces (`accent_cream`) on slightly darker backgrounds (`tertiary_sand`).
*   **Shadows:** When used (e.g., for hovering over product cards or modals), shadows should be extremely diffused: `0px 20px 40px rgba(45, 41, 38, 0.04)`. The shadow color is a tint of the primary charcoal, never pure black.
*   **Glassmorphism:** Use a subtle backdrop blur (12px) with a semi-transparent cream fill for sticky navigation bars to keep the focus on the content beneath while maintaining a premium feel.

## Shapes

The shape language is **Organic & Soft**. 

*   **Corners:** A consistent 0.5rem (8px) radius is used for primary containers and product cards. This is "soft" enough to feel welcoming but "sharp" enough to maintain a modern, architectural structure.
*   **Interactive Elements:** Buttons and tags utilize the `rounded-xl` (1.5rem) or pill-shaped style to contrast against the more rectangular product imagery.
*   **Imagery:** Images themselves should remain sharp or have the same 0.5rem radius as their containers to maintain a clean, high-fashion grid look.

## Components

### Buttons
*   **Primary:** Solid Charcoal background with Cream text. Rounded-pill shape. High padding (16px 32px).
*   **Secondary:** Outlined (1px Charcoal) with a transparent background. No-fill, minimalist approach.
*   **Text Link:** Manrope Bold, uppercase, with a 1px underline that animates on hover.

### Product Cards
*   Minimalist design: Image is the hero. Price and title appear in Manrope below the image. Avoid "Add to Cart" buttons on the grid; instead, use a subtle "+" icon or rely on the click-through to the detail page.

### Inputs & Selectors
*   Fields use a subtle `neutral_taupe` bottom border only, or a very light tonal background. No heavy boxes. Focus states are indicated by the primary charcoal border.

### Chips & Tags
*   Used for sizes (S, M, L) and fabric types (Silk, Crepe, Cotton). Small, pill-shaped, using `neutral_taupe` backgrounds with charcoal text.

### Navigation
*   A clean, centered top-tier navigation. Icons (Search, Cart, Profile) should be fine-line (1px weight) to match the sophisticated typography.