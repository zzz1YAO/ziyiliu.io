# Ziyi Liu Academic Homepage

Personal academic homepage built with static frontend files:
- `index.html`
- `styles.css`
- `scripts.js`

## Latest Update (2026-02-17)

This version upgrades the homepage to a more modern academic style while keeping the site lightweight.

### What changed
- Switched page language to English and unified profile/content wording.
- Replaced auto-generated footer date with a manual, fixed `Last updated` date.
- Added SEO/social metadata:
  - `meta description`
  - Open Graph tags
  - Twitter Card tags
- Improved accessibility:
  - Better profile image `alt` text
  - Visible keyboard focus styles (`:focus-visible`)
  - Consistent external-link safety attributes (`noopener noreferrer`)
- Refined contact/privacy setup:
  - Removed public phone number
  - Removed placeholder social links
- Upgraded visual system:
  - Introduced CSS variables (colors, spacing, radius, shadows)
  - Added layered gradient background and soft orb effects
  - Improved card hierarchy and spacing for sections
  - Sticky glass-style navigation bar
- Added interaction enhancements:
  - Smooth anchor scrolling with top offset
  - Active nav highlighting while scrolling (scroll spy)
  - Section reveal-on-scroll animation using `IntersectionObserver`
  - Reduced-motion fallback support

## Notes
- The site remains framework-free and deployment-friendly for GitHub Pages.
- Image asset: `profile.jpg`.

