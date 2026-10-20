# Design System & UI Engineering Guide

This document is the single source of truth for all UI/UX design, visual tokens, and frontend development. Any AI agent, developer, or designer working on this codebase must strictly reference and enforce the guidelines defined below.

---

## 1. Brand Essence & Architectural Aesthetic

- **Design Philosophy:** *Industrial Modernism* — engineered, precise, high-trust, and technologically advanced.
- **Mood & Atmosphere:** Serious enterprise execution, operational clarity, cinematic framing, and structured technical data display.
- **Spatial Strategy:** Generous negative space, sharp grid alignment, low-radius geometric containers, and zero decorative fluff. Avoid bubbly, overly rounded, or playful visual patterns.

---

## 2. Design Tokens & Palette

The brand's anchor color is **Industrial Orange**, supported by high-contrast cool charcoals, slate tones, and frosted overlays.

### 2.1 Color Tokens

| Token Name | Hex / RGBA | Usage |
| :--- | :--- | :--- |
| `color-brand-primary` | `#F26A21` | High-impact actions, primary CTAs, active highlights |
| `color-brand-hover` | `#D95A19` | Hover/focus state for primary action elements |
| `color-dark-base` | `#1A1A1A` | Primary text, deep dark backgrounds, solid buttons |
| `color-dark-surface` | `#111827` | Section backgrounds, card backdrops |
| `color-slate-depth` | `#1E293B` | Secondary dark containers, subtle borders, shadows |
| `color-surface-light`| `#F8FAFC` | Standard light mode background, alternating sections |
| `color-white` | `#FFFFFF` | Overlaid hero text, light card backgrounds |
| `color-muted-text` | `#94A3B8` | Captions, subtle labels, secondary statistics |

### 2.2 Glassmorphism & Translucent Layers

For technical telemetry cards, stats, or HUD-style overlays placed on photographic hero backgrounds:

```css
/* Glass Card Token */
--glass-bg: rgba(26, 26, 26, 0.45);
--glass-blur: blur(10px);
--glass-border: 1px solid rgba(255, 255, 255, 0.18);
--glass-corner-node: rgba(255, 255, 255, 0.6);
```

---

## 3. Typography Hierarchy

### 3.1 Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
```

### 3.2 Type Scale & Specs

| Hierarchy | Size | Weight | Tracking (Letter Spacing) | Line Height | Casing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | `48px` – `64px` | 600 (Semi-Bold) | `-0.025em` | `1.1` | Sentence case |
| **Section Title (H2)**| `32px` – `40px` | 600 (Semi-Bold) | `-0.02em` | `1.2` | Sentence case |
| **Subheader (H3)** | `20px` – `24px` | 500 (Medium) | `-0.01em` | `1.3` | Sentence case |
| **Body (Default)** | `16px` – `18px` | 400 (Regular) | `0em` | `1.6` | Sentence case |
| **Technical Labels** | `11px` – `13px` | 500 (Medium) | `+0.12em` | `1.4` | **UPPERCASE** |
| **Data Metric / Num**| `36px` – `48px` | 500 / 600 | `-0.01em` | `1.0` | Standard |

---

## 4. Component Standards

### 4.1 Buttons
- **Shape:** Strictly rectangular or subtly rounded (`border-radius: 2px` to `4px`). **No full pills.**
- **Labeling:** Uppercase, font-size `12px` - `13px`, tracking `0.1em`, font-weight `600`.
- **Button Variants:**
  - **Primary CTA:** Background `#F26A21`, text `#FFFFFF`. Hover: `#D95A19`.
  - **Secondary CTA:** Background `#1A1A1A`, text `#FFFFFF`. Hover: `#333333`.
  - **Ghost / Outline:** Transparent background, `1px solid rgba(255,255,255,0.4)` on dark or `#1A1A1A` on light backgrounds.
  - **Icon Accents:** Small leading or trailing square glyph (`■` or `→`) to reinforce the technical/logistics aesthetic.

### 4.2 Data & Metric Overlays (HUD / Stat Cards)
- Apply the glassmorphic styling (`rgba(26, 26, 26, 0.45)`, `backdrop-filter: blur(10px)`).
- Container framing: Add subtle corner accents (2px by 2px square marks or dots in the four corners) to evoke precision engineering.
- Layout: Large metric numerals paired with uppercase technical micro-labels underneath.

### 4.3 Navigation Header
- **Desktop:** Floating, transparent background when overlaid on hero media. 
- **Logo:** High contrast (White / Primary Orange accent).
- **Links:** Uppercase, `12px` font size, `0.12em` letter spacing, subtle underline or opacity transition on hover.
- **Top CTA:** High-contrast bordered or filled button aligned to the far right.

### 4.4 Imagery & Visual Media
- **Style:** Cinematic, sharp, high-resolution photography depicting heavy industry, fleet transport, automation, and logistics.
- **Overlay:** Apply a subtle dark gradient (`rgba(0,0,0,0.45)` down to `rgba(0,0,0,0.7)`) to ensure guaranteed readability for overlaid white text and metric widgets.

---

## 5. Agent Instructions for Building UI

When prompted to create new pages or components:
1. **Always inherit the tokens:** Check the colors, fonts, and radii above before generating CSS, Tailwind classes, or React components.
2. **Prioritize contrast:** Keep headlines pure white `#FFFFFF` over images/dark cards and `#1A1A1A` over light areas.
3. **Use the primary orange selectively:** Do not drown sections in orange; treat it as an intentional trigger color for conversion and direction.
4. **Enforce clean code:** Keep component structures modular, fully responsive, and accessible (WCAG AA compliance).