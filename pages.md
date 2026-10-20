# Landing Page Specification & Flow Guide (Elios Logistics)

## 1. Scope & Business Boundary

* **Included Offerings:**
  1. Urban Two-Wheeler Rapid Dispatch (Inner-city bike messengers, document/parcel delivery).
  2. International Air Logistics & Cross-Border Forwarding (Air cargo, customs documentation, airport-to-door).
* **Strictly Excluded:**
  * NO Ocean/Sea Freight.
  * NO Warehousing / Storage Facilities.
  * Keep all iconography, terminology, and cards strictly focused on two-wheelers and aircraft.

---

## 2. Page Flow & Component Hierarchy

### Section 01: Global Sticky Navigation

* **Left:** Vector logo (`ELIOS` with safety orange geometric accent mark `#F26A21`).
* **Center:** Minimal uppercase links (12px, tracking `0.1em`): `SERVICES`, `NETWORK`, `TRACK SHIPMENT`, `INSIGHTS`.
* **Right:** Solid dark button `#1A1A1A` with white uppercase text: `[ GET A QUOTE ]`.

### Section 02: Cinematic Hero with Dual-Speed Quote Switcher

* **Visual Background:** Deep Slate Navy (`#1E293B`) or muted, high-contrast industrial transport photography with a dark vignette.
* **Hero Headline:**
  > **High-speed urban dispatch.**  
  > **Border-to-border global freight.**
* **Interactive Mode Switcher:**
  A centered glassmorphism box (`rgba(26, 26, 26, 0.65)` with `backdrop-filter: blur(12px)` and 1px border `rgba(255, 255, 255, 0.15)`):
  * **Tab 1: Bike Dispatch (City)**
    * Fields: Pickup Address, Dropoff Address, Parcel Type (`Envelope / Document`, `Small Box < 5kg`, `Cargo Box < 25kg`).
    * CTA: Solid Orange button (`#F26A21`): `REQUEST RIDER NOW →`
  * **Tab 2: Air Freight (Global)**
    * Fields: Origin Airport/City, Destination Country, Gross Weight (kg).
    * CTA: Solid Orange button (`#F26A21`): `GET AIR FREIGHT RATE →`
* **Floating Metric HUD Cards (Bottom Corners):**
  * Card A: `< 45 MINS` — *Average Metro Delivery Turnaround*
  * Card B: `180+ DESTINATIONS` — *Direct Air Freight Corridors*

---

### Section 03: The 2-Pillar Capabilities Grid (Replaces 4-Card Logistics Layouts)

A clean, two-column asymmetric bento layout on light surface (`#F8FAFC`):

* **Card 1 (Left): Rapid Two-Wheeler Network**
  * Tag: `MODE: URBAN-01`
  * Title: **Hyperlocal City Courier & Moto-Dispatch**
  * Bulleted Features:
    * Under-60-minute priority routing for documents, samples, and parcels.
    * Live rider GPS coordinate sharing with direct client SMS verification.
    * Weather-sealed, temperature-safe secure courier panniers.
  * Link: `Explore Urban Fleet Capabilities →`

* **Card 2 (Right): Cross-Border Air Cargo & Forwarding**
  * Tag: `MODE: GLOBAL-02`
  * Title: **Express International Air Freight & Customs Brokerage**
  * Bulleted Features:
    * Priority commercial air cargo space allocations.
    * Full customs documentation, clearance, and duty compliance handling.
    * Airport-to-door consolidated chain of custody.
  * Link: `Explore Air Freight Network →`

---

### Section 04: Unified Single-Terminal Tracking Bar

* Dark slate backdrop (`#111827`) with a 1px border.
* Single input field styled like an industrial terminal:
  * Placeholder: `Enter Urban Rider ID or International Air Waybill (AWB)...`
  * Action: `TRACK SHIPMENT` (Orange accent hover).
* Dynamic status resolver: Automatically identifies whether the tracking string belongs to a local bike dispatch or international flight cargo and opens the appropriate timeline modal.

---

### Section 05: Editorial Insights Strip (SEO & AEO Engine)

* Minimalist 3-column feed pulling from `/insights`.
* Clean typography: 13px category tag in Orange, bold headline, 3-minute read counter.
* Example Topics:
  * *Pillar A (Urban):* "Optimizing Intra-City B2B Document Courier Routes."
  * *Pillar B (Air):* "Dimensional Weight (DIM) vs. Actual Weight in International Air Shipping."
  * *Pillar C (Compliance):* "Navigating Priority Cross-Border Customs Clearance."
* Action: Simple text link `View all operational playbooks →`.

---

### Section 06: Minimal Footer

* Single dark block (`#1A1A1A`).
* Left: Brand mark, live operational status badge (`🟢 All Dispatch Lanes Active`).
* Center: Categorized link list (Urban, International, Corporate, Track, Insights, Legal).
* Right: Contact hotline, carrier licensing, and copyright.
