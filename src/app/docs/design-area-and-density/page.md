---
title: Design Area and Density
nextjs:
  metadata:
    title: Design Area and Density
    description: Understanding sprinkler design area, density, density/area curves, hose stream allowances, and duration requirements per NFPA 13.
---

Design area and density are the two parameters that define how much water a sprinkler system must deliver. Together with the hose stream allowance and duration, they establish the total water supply requirement for the system. {% .lead %}

---

## Density

Density is the rate of water application, expressed in gallons per minute per square foot (gpm/sq ft). It represents how much water the sprinkler system must deliver over each square foot of the design area.

Higher-hazard occupancies require higher densities because their contents produce fires that release more heat and spread faster. The density must be sufficient to control the fire before it overwhelms the sprinkler system.

### Common design densities

- Light Hazard: 0.10 gpm/sq ft
- Ordinary Hazard Group 1: 0.15 gpm/sq ft (most common selection)
- Ordinary Hazard Group 2: 0.20 gpm/sq ft (most common selection)
- Extra Hazard Group 1: 0.30 gpm/sq ft
- Extra Hazard Group 2: 0.40 gpm/sq ft

These are typical values. The actual density selected depends on where the designer picks a point on the density/area curves.

---

## Density/area curves

NFPA 13 Figure 19.3.3.1 presents the density/area curves — a set of curves that allow the designer to trade off between density and design area. Each curve represents a hazard classification.

### How to read the curves

The horizontal axis is the design area in square feet. The vertical axis is the density in gpm/sq ft. For each hazard group, the curve shows the minimum acceptable combinations of density and area.

- Moving left on the curve (smaller area) requires a higher density
- Moving right on the curve (larger area) allows a lower density
- Any combination of density and area on or above the curve is acceptable

### Selecting a design point

The designer selects a point on the curve that balances system cost against water supply availability:

- **Higher density, smaller area** — requires higher pressures but less total flow; often favorable when the water supply has good pressure but limited flow
- **Lower density, larger area** — requires more total flow but lower pressures; favorable when the supply has ample flow but limited pressure

{% figure src="/placeholder-diagram.svg" alt="NFPA 13 density/area curves" caption="Density/area curves showing the relationship between design density and design area for each hazard classification" /%}

{% callout type="note" title="The most common shortcut" %}
Many designers default to the flat portion of the curve (e.g., 0.15/1,500 for OH1) without checking whether a different point would work better with the available water supply. Running the numbers at two or three points on the curve can save the project a fire pump or a tank.
{% /callout %}

---

## Design area

The design area (remote area) is the area of floor that the sprinkler system must protect simultaneously. It represents the assumed maximum fire size that the sprinkler system is designed to control.

### Standard design areas

- Light Hazard: 1,500 sq ft
- Ordinary Hazard: 1,500 sq ft (can increase with density trade-off)
- Extra Hazard: 2,500 sq ft (can increase with density trade-off)

### Remote area shape requirements

Per NFPA 13 Section 28.2.4:

- The remote area must be rectangular
- The long dimension must be parallel to the branch lines
- The length of the long dimension must be at least **1.2 x sqrt(design area)**

For a 1,500 sq ft design area: minimum long dimension = 1.2 x sqrt(1,500) = 1.2 x 38.7 = **46.5 ft**

### Number of sprinklers

The number of sprinklers in the remote area equals:

**N = Design area / Coverage area per sprinkler** (round up)

---

## Quick response sprinkler reductions

Quick response (QR) sprinklers activate faster than standard response heads, controlling fires at an earlier stage. NFPA 13 allows design area reductions when QR heads are used:

- Light Hazard with QR heads: design area may be reduced to 1,125 sq ft (25% reduction)
- Ordinary Hazard with QR heads in certain occupancies: density/area curve shifts apply

This reduction reflects the demonstrated improvement in fire control performance from faster head activation.

{% callout type="warning" title="QR reductions have conditions" %}
Quick response reductions only apply when specific conditions are met — ceiling height limits, head spacing limits, and minimum pressure requirements. Verify all conditions in NFPA 13 before applying the reduction.
{% /callout %}

---

## Hose stream allowance

In addition to the sprinkler system demand, the water supply must provide water for fire department hose streams used during manual firefighting operations.

### Allowances by hazard

- **Light Hazard**: 100 gpm (inside hose streams)
- **Ordinary Hazard**: 250 gpm
- **Extra Hazard**: 500 gpm (check specific requirements — some scenarios require more)

### How hose streams are applied

The hose stream allowance is added to the sprinkler demand **at the base of the riser**. It does not travel through the sprinkler piping and therefore does not add friction loss to the calculation. It is simply additional flow the water supply must deliver at the BOR pressure.

---

## Duration

The water supply must sustain the total demand (sprinkler + hose) for a minimum time:

- **Light Hazard**: 30 minutes
- **Ordinary Hazard**: 60 minutes
- **Extra Hazard**: 90-120 minutes
- **Storage**: 60-120 minutes depending on commodity and height

Duration is primarily relevant for water storage tank sizing. If the system draws from a municipal supply with continuous replenishment, duration is typically satisfied automatically (the utility does not "run out"). For tank-fed systems, the required volume equals the total demand rate multiplied by the duration.

{% figure src="/placeholder-diagram.svg" alt="Design criteria summary table" caption="Summary of design density, area, hose stream, and duration requirements by hazard classification" /%}

---

## Room design method

NFPA 13 Section 19.3.3.2 allows an alternative approach for small rooms: the room design method. Instead of using the remote area from the density/area curves, the designer calculates the demand for the single most demanding room.

### When to use it

The room design method is applicable when:

- The building is divided into rooms by walls with limited openings
- Individual rooms are small enough that a standard remote area would span multiple rooms
- The room with the highest demand can be clearly identified

This method can produce a smaller system demand than the standard remote area approach, particularly in buildings with many small, enclosed rooms.

---

## ESFR and control mode specific application (CMSA)

For storage occupancies, the density/area approach is replaced by specific head-by-head design criteria:

### ESFR (Early Suppression Fast Response)

ESFR heads are designed to suppress (not just control) storage fires without in-rack sprinklers. They are ceiling-only and require:

- Specific minimum operating pressures (varies by K-factor and storage height)
- Number of heads in the design (typically 12 or more)
- Maximum ceiling height and storage height limits
- No obstructions in the spray pattern

### CMSA (Control Mode Specific Application)

CMSA heads are designed for specific storage arrangements. Like ESFR, they have prescriptive design criteria — a specific number of heads at a specific minimum pressure rather than a density/area calculation.

{% callout type="note" title="Storage design is its own specialty" %}
NFPA 13 Chapters 20-26 cover storage in extensive detail. Storage design is significantly more complex than standard occupancy design and is a major focus of NICET Level III and IV exams.
{% /callout %}
