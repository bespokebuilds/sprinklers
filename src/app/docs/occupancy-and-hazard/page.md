---
title: Occupancy and Hazard Classification
nextjs:
  metadata:
    title: Occupancy and Hazard Classification
    description: NFPA 13 occupancy hazard classifications — Light Hazard, Ordinary Hazard, Extra Hazard, and commodity classifications for storage occupancies.
---

Hazard classification is the single most consequential decision in sprinkler system design. It determines the design density, design area, hose stream allowance, duration, and often the type of sprinkler head required. Getting this wrong means the entire system is wrong. {% .lead %}

---

## Overview

NFPA 13 Chapter 4 defines occupancy hazard classifications based on the expected severity of a fire in the space. The classification depends on the quantity and combustibility of the building contents, not the building construction type.

The three primary classifications are:

1. **Light Hazard** — low quantity of combustibles, low heat release
2. **Ordinary Hazard** — moderate quantity of combustibles (Group 1 and Group 2)
3. **Extra Hazard** — high quantity of combustibles or flammable/combustible liquids (Group 1 and Group 2)

Storage occupancies have their own separate classification system based on commodity class and storage arrangement.

{% callout type="warning" title="Classification drives everything" %}
A misclassified space cascades through every aspect of the design — density, area, pipe sizing, water supply, and head selection. When in doubt, classify conservatively or consult the AHJ early.
{% /callout %}

---

## Light Hazard

Light Hazard occupancies contain low quantities of combustible materials with low rates of heat release. Typical examples:

- Offices and conference rooms
- Churches and places of worship
- Educational classroom areas
- Hospitals and nursing homes (patient areas)
- Hotels and dormitories (guest rooms)
- Libraries (reading areas, not stack rooms)
- Museums (display areas)
- Residential common areas

### Design criteria

- **Density**: 0.10 gpm/sq ft
- **Design area**: 1,500 sq ft
- **Hose stream allowance**: 100 gpm
- **Duration**: 30 minutes

Light Hazard systems are the simplest to design and require the smallest water supply. Many Light Hazard systems can be designed using the pipe schedule method (NFPA 13 Chapter 27) rather than hydraulic calculations.

---

## Ordinary Hazard Group 1

Ordinary Hazard Group 1 (OH1) occupancies contain moderate combustible contents that are expected to produce fires of moderate heat release.

Typical examples:
- Automobile parking garages
- Bakeries
- Beverage manufacturing
- Electronic plants
- Glass and glass products manufacturing
- Laundries
- Restaurant cooking areas

### Design criteria

- **Density**: 0.15 gpm/sq ft (typical — may select from density/area curves)
- **Design area**: 1,500 sq ft
- **Hose stream allowance**: 250 gpm
- **Duration**: 60 minutes

---

## Ordinary Hazard Group 2

Ordinary Hazard Group 2 (OH2) occupancies have contents with a higher combustible load or heat release than OH1.

Typical examples:
- Cereal mills
- Chemical plants (ordinary)
- Dry cleaning
- Horse stables
- Machine shops
- Metalworking
- Mercantile (retail stores)
- Post offices
- Stages and studios
- Tire manufacturing
- Warehouses (with moderate storage)
- Wood product assembly

### Design criteria

- **Density**: 0.20 gpm/sq ft (typical)
- **Design area**: 1,500 sq ft
- **Hose stream allowance**: 250 gpm
- **Duration**: 60 minutes

{% figure src="/placeholder-diagram.svg" alt="Hazard classification examples" caption="Visual comparison of occupancy types across Light Hazard, OH1, OH2, and Extra Hazard classifications" /%}

---

## Extra Hazard Group 1

Extra Hazard Group 1 (EH1) occupancies have contents with a high rate of heat release but little or no flammable or combustible liquids.

Typical examples:
- Aircraft hangars (maintenance areas)
- Die casting
- Metal extruding
- Plywood and particle board manufacturing
- Printing (using inks with flash points above 100°F)
- Rubber reclaiming, compounding, or vulcanizing
- Sawmills
- Upholstering with plastic foam

### Design criteria

- **Density**: 0.30 gpm/sq ft (typical)
- **Design area**: 2,500 sq ft
- **Hose stream allowance**: 500 gpm
- **Duration**: 90 minutes

---

## Extra Hazard Group 2

Extra Hazard Group 2 (EH2) occupancies involve moderate to substantial amounts of flammable or combustible liquids, or occupancies where combustibles create rapidly developing fires with high heat release.

Typical examples:
- Asphalt saturating
- Flammable liquid spraying
- Flow coating
- Manufactured home or modular building assembly (plastics)
- Oil quenching
- Plastics processing
- Solvent cleaning
- Varnish and paint dipping

### Design criteria

- **Density**: 0.40 gpm/sq ft (typical)
- **Design area**: 2,500 sq ft
- **Hose stream allowance**: 500 gpm
- **Duration**: 90-120 minutes

{% callout type="note" title="Density/area curves" %}
For Ordinary Hazard and Extra Hazard classifications, the designer may select any density/area combination from the NFPA 13 density/area curves. The curve allows a trade-off: a higher density over a smaller area, or a lower density over a larger area. The most common practice is to select the point on the curve that minimizes the total water supply requirement.
{% /callout %}

---

## Storage occupancies

Storage occupancies have their own classification system separate from the general hazard groups. The fire challenge in storage is primarily driven by two factors: what is being stored (commodity classification) and how it is arranged (storage method and height).

### Commodity classification

NFPA 13 classifies stored goods into commodity classes based on the expected fire behavior:

- **Class I** — non-combustible products on wood pallets, in single-wall corrugated cartons
- **Class II** — Class I products in slatted wood crates, multi-wall corrugated cartons, or with some combustible packaging
- **Class III** — wood, paper, natural fiber products, or Group C plastics
- **Class IV** — Class I-III products containing Group A plastics in packaging or product, or free-flowing Group B plastics

### Plastic groups

Plastics are classified by their heat release and burning characteristics:

- **Group A** — most severe, including ABS, polystyrene (expanded or unexpanded), polyurethane foam, FRP
- **Group B** — moderate, including fluoroplastics, nylon, silicone
- **Group C** — least severe, including melamine, phenolic, PTFE

### Storage methods

- **Palletized** — goods on pallets stacked on the floor
- **Solid pile** — goods stacked directly without pallets
- **Shelf storage** — open shelving (metal or wood)
- **Rack storage** — steel racks (single-row, double-row, multi-row), with or without in-rack sprinklers
- **Rubber tire storage** — separate criteria in NFPA 13

{% figure src="/placeholder-diagram.svg" alt="Commodity classification decision tree" caption="Decision tree for determining commodity classification — from product contents through packaging to final class" /%}

---

## Mixed occupancies

Many buildings contain spaces with different hazard classifications. NFPA 13 provides two approaches:

### Separate systems

Design each hazard area as a separate system (or separate calculation area) with its own design criteria. A hydraulic demand is calculated for each area, and the most demanding governs the water supply.

### Shared system with highest hazard

Apply the highest hazard classification to the entire system. This is simpler but results in a larger water supply requirement.

### Separation requirements

Where different hazard levels share a system, the transition between areas must be clearly defined on the plans. The designer must ensure that the piping serving the higher-hazard area is sized for the higher density, and that the remote area analysis considers the most demanding location regardless of which zone it falls in.

{% callout type="warning" title="The highest hazard always wins" %}
If any part of the sprinkler system's remote area overlaps a higher-hazard zone, the entire remote area calculation must use the higher hazard criteria. You cannot blend densities within a single remote area.
{% /callout %}
