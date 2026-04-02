---
title: Occupancy and Hazard Classification
nextjs:
  metadata:
    title: Occupancy and Hazard Classification
    description: "NFPA 13 hazard classification quick reference — design criteria by hazard, occupancy examples, commodity classification, and storage parameters."
---

Consolidated design criteria, occupancy examples, commodity classifications, and storage parameters from NFPA 13. All section references are to the 2022 edition unless noted. {% .lead %}

---

## Design criteria by hazard classification

This is the primary lookup table. For pre-2022 editions, the density/area curves allowed trading density for area; the 2022 single-point values below eliminate that trade-off.

| Hazard | Density (gpm/sq ft) | Design Area (sq ft) | Hose Stream (gpm) | Duration (min) |
| --- | --- | --- | --- | --- |
| Light Hazard | 0.10 | 1,500 | 100 | 30 |
| Ordinary Hazard Group 1 | 0.15 | 1,500 | 250 | 60 |
| Ordinary Hazard Group 2 | 0.20 | 1,500 | 250 | 60 |
| Extra Hazard Group 1 | 0.30 | 2,500 | 500 | 90 |
| Extra Hazard Group 2 | 0.40 | 2,500 | 500 | 90-120 |

{% callout type="note" %}
These single-point values are from the 2022 edition (Section 19.3). Pre-2022 editions use density/area curves (Figure 19.3.3.1.1 in prior editions) which permit smaller design areas at higher densities. Know which edition your jurisdiction enforces.
{% /callout %}

---

## Occupancy examples by classification

Per NFPA 13 Section 4.3. These are representative, not exhaustive. When a specific occupancy is not listed, classify based on the quantity and combustibility of contents.

### Light Hazard (Section 4.3.2)

| Occupancy Type | Examples |
| --- | --- |
| Assembly | Churches, auditoriums, theaters (non-stage areas) |
| Educational | Classrooms, libraries (reading areas) |
| Institutional | Hospitals, nursing homes, patient rooms |
| Office | General office areas, data processing |
| Residential | Hotels, apartments, dormitories |
| Miscellaneous | Museum galleries, restaurant seating areas, courtrooms |

### Ordinary Hazard Group 1 (Section 4.3.3.1)

| Occupancy Type | Examples |
| --- | --- |
| Automotive | Parking garages, car showrooms |
| Manufacturing (light) | Electronics assembly, bakeries, beverage manufacturing |
| Commercial | Restaurants (kitchen areas), laundries, dry cleaners |
| Institutional | Library stack areas (up to 8 ft high) |
| Miscellaneous | Machine shops, canneries, glass manufacturing |

### Ordinary Hazard Group 2 (Section 4.3.3.2)

| Occupancy Type | Examples |
| --- | --- |
| Manufacturing | Metal working, paper/pulp processing, leather goods |
| Repair/Service | Automotive repair, tire storage (limited), post offices |
| Mercantile | Department stores, supermarkets, large retail |
| Industrial | Cereal mills, feed mills, textile manufacturing |
| Storage | Wood product storage (limited quantity), warehouses (non-high-piled) |
| Miscellaneous | Piers, wharves, stages/studios |

### Extra Hazard Group 1 (Section 4.3.4.1)

| Occupancy Type | Examples |
| --- | --- |
| Manufacturing | Die casting, plywood/particleboard manufacturing |
| Processing | Rubber reclaiming, saw mills, upholstering with plastics |
| Printing | Printing plants with high ink volumes |
| Miscellaneous | Aircraft hangars (without fuel), metal extruding |

### Extra Hazard Group 2 (Section 4.3.4.2)

| Occupancy Type | Examples |
| --- | --- |
| Processing | Flammable liquid spraying, flow coating, open oil quenching |
| Manufacturing | Solvent cleaning, varnish/paint dipping, manufactured housing |
| Chemical | Plastics processing, solvent extracting |
| Miscellaneous | Asphalt saturating, upholstering with large quantities of plastic foam |

{% callout type="warning" %}
A building often contains multiple hazard classifications. NFPA 13 allows subdividing the building and designing each area to its own classification, provided adequate separation or transition is maintained. The highest hazard classification does NOT need to be applied to the entire building.
{% /callout %}

---

## Commodity classification

Per NFPA 13 Chapter 5 (2022 edition; previously in Chapter 5/6 of earlier editions). Commodity class drives storage sprinkler design criteria.

### Non-plastics: Class I through IV

| Class | Description | Examples |
| --- | --- | --- |
| Class I | Non-combustible products on wood pallets or in single-layer corrugated cartons | Metal parts, empty cans, glass bottles, food in non-combustible containers |
| Class II | Class I products in slatted wooden crates, multi-layer corrugated cartons, or equivalent combustible packaging | Canned goods in cartons, glass products in multi-wall boxes |
| Class III | Wood, paper, natural fiber products, Group C plastics (<5% by weight) | Lumber, furniture (wood, no foam), clothing, shoes, food in plastic containers <5% |
| Class IV | Class I/II/III products with appreciable Group A plastic packaging, or Group B plastics (5-15% by weight) | Small appliances in molded foam packaging, products in blister packs |

### Plastics: Group A, B, C

| Group | Description | Specific Materials |
| --- | --- | --- |
| Group A | High heat release, fast flame spread | ABS, acrylic (PMMA), polycarbonate, polypropylene, polystyrene (expanded/extruded), polyurethane foam, PET, FRP, SAN |
| Group B | Moderate heat release | Fluoroplastics (PTFE), nylon, silicone rubber, wire/cable with PE/PP insulation |
| Group C | Low heat release, comparable to Class III commodity | CPVC, phenolics, PVC (rigid), PVDC, urea melamine |

{% callout type="note" %}
Group A expanded plastics (EPS, polyurethane foam) are the most challenging commodity. Cartoned expanded Group A plastics at rack storage heights above 25 ft typically require in-rack sprinklers in addition to ceiling-level protection, even with ESFR heads.
{% /callout %}

### Commodity classification decision flow

1. Identify the product itself -- what is the base commodity material?
2. Identify the packaging -- single-wall corrugated, multi-wall, foam inserts, blister packs?
3. Identify the pallet -- wood, plastic, or none?
4. The **controlling commodity** is the highest classification of the product, packaging, or pallet material
5. Plastic pallets automatically elevate Class I-III commodities to at minimum Class IV (uncartoned Group A plastic if the pallet material is Group A)

---

## Storage configuration parameters

Storage sprinkler design depends on the interaction of commodity class, storage height, storage arrangement, and ceiling height.

### Storage arrangement types

| Arrangement | Description | Key Design Impact |
| --- | --- | --- |
| Solid pile | Stacked directly on floor, no racks | Flue spaces rely on irregular stacking; worst case for fire development |
| Palletized | Stacked on pallets, no racks | Limited flue spaces; design as solid pile unless flue spaces maintained |
| Single-row rack | One pallet deep | Longitudinal flue spaces present; transverse flues at each tier |
| Double-row rack | Two pallets deep, back-to-back | Reduced longitudinal flues; most common warehouse rack |
| Multi-row rack | Three or more pallets deep | Requires in-rack sprinklers in most cases |
| Open-top containers | Bins, shelf storage, totes | Shelf dividers limit sprinkler penetration |

### Key thresholds affecting design

| Parameter | Threshold | Impact |
| --- | --- | --- |
| Storage height exceeds 12 ft | Triggers Chapter 20-25 storage rules | Must use storage-specific sprinkler criteria instead of density/area |
| Aisle width less than 8 ft | Narrow aisle | May require ESFR or specific listed protection scheme |
| Ceiling height exceeds 35 ft | Limits K14.0 ESFR | Must use K16.8 or larger ESFR, or in-rack sprinklers |
| Ceiling height exceeds 40 ft | Limits most ESFR | K25.2 ESFR at minimum, or control-mode specific application (CMSA) |
| Clearance to sprinkler deflector <36 in | Below minimum | NFPA 13 Section 10.2.5 -- increase clearance or reduce storage height |
| Clearance to sprinkler deflector >36 in for ESFR | May violate listing | Most ESFR listings require max 36 in clearance to top of storage |

---

## ESFR vs. control-mode density/area for storage

| Factor | ESFR | Control-Mode Density/Area |
| --- | --- | --- |
| Design approach | 12 sprinklers at minimum pressure | Density over calculated area |
| In-rack sprinklers | Not required (key advantage) | Often required above 25 ft storage |
| Hose stream | 250 gpm | 500 gpm |
| Duration | 60 min | 90-120 min |
| Ceiling height limit | 40-48 ft depending on K-factor | Varies; generally more flexible with in-rack |
| Water supply required | High pressure, moderate volume | Moderate pressure, high volume |
| Obstructions | Very sensitive to obstructions | Less sensitive |
| Draft curtains | Cannot be used | May be required |

---

## Edition history notes

| Edition | Key Changes to Classification/Design |
| --- | --- |
| 2016 | Consolidated commodity classification tables; added specific guidance for exposed Group A plastic pallets |
| 2019 | Major chapter reorganization -- storage moved to dedicated chapters 20-25; occupancy classification remained in Chapter 4 |
| 2022 | Density/area curves replaced with single-point density values for new designs; curves retained for existing systems; storage chapters further refined |

---

## Quick reference: NFPA 13 section numbers (2022 edition)

| Topic | Section |
| --- | --- |
| Occupancy hazard classification | 4.3 |
| Light Hazard | 4.3.2 |
| Ordinary Hazard | 4.3.3 |
| Extra Hazard | 4.3.4 |
| Commodity classification | Chapter 5 |
| Design criteria (density/area) | Chapter 19 |
| Single-point criteria | 19.3 |
| Palletized/solid pile storage | Chapter 20 |
| Rack storage | Chapters 21-23 |
| Shelf storage | Chapter 24 |
| Hose stream and duration | 19.2.3 |
