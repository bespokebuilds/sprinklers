---
title: Special Occupancies
nextjs:
  metadata:
    title: Special Occupancies
    description: ESFR storage criteria, in-rack sprinkler requirements, residential system comparisons, cold storage, and high-rise design parameters.
---

## ESFR design criteria

ESFR (Early Suppression Fast Response) sprinklers are ceiling-only protection for storage. No in-rack sprinklers are required when ESFR criteria are met.

| K-Factor | Min Pressure (psi) | Sprinklers in Calc | Max Ceiling Height (ft) | Max Storage Height (ft) | Commodity |
| --- | --- | --- | --- | --- | --- |
| K14.0 | 75 | 12 | 35 | 30 | Class I-IV |
| K16.8 | 52 | 12 | 40 | 35 | Class I-IV |
| K22.4 | 75 | 12 | 40 | 35 | Group A plastics |
| K25.2 | 60 | 12 | 40 | 40 | Most commodities |

{% callout type="warning" %}
ESFR heads require unobstructed discharge. No beam construction, no solid shelving, no open-top containers that could block spray. If any obstruction exists, ESFR is not an option — use CMSA or in-rack protection.
{% /callout %}

**ESFR installation constraints:**

- Deflector to ceiling: 6" to 14" (K14/K16.8) or 6" to 18" (K22.4+)
- Max spacing: 100 sq ft per head, 10 ft x 10 ft typical
- Min aisle width: 4 ft (for storage up to 25 ft), 8 ft (for storage above 25 ft)
- Draft curtains: required at building perimeter if roof slope > 2 in 12
- Ceiling pockets: max 2 ft deep, otherwise add heads in pocket

---

## Commodity classification quick reference

| Class | Description | Examples |
| --- | --- | --- |
| Class I | Non-combustible product on wood pallets | Metal parts, glass, ceramic |
| Class II | Class I in single-layer corrugated cartons | Boxed metal hardware |
| Class III | Wood, paper, natural fiber products | Furniture, lumber, clothing |
| Class IV | Class I-III containing Group A plastics up to 5% | Electronics in foam packaging |
| Group A Plastics | > 5% Group A plastics by weight or volume | ABS, polystyrene, polyurethane foam |
| Group B Plastics | Non-expanded plastics | Solid PVC, nylon, fluoroplastics |
| Group C Plastics | Low-hazard plastics | PTFE, phenolics, melamines |

{% callout %}
Commodity classification is the single most impactful variable in storage design. Misclassification leads to under-designed systems. When in doubt, classify up.
{% /callout %}

---

## In-rack sprinkler requirements

In-rack sprinklers are required when ceiling-only protection (CMSA or ESFR) cannot meet the storage configuration. NFPA 13 Chapters 20-26 (2022 edition) provide specific requirements.

**When in-rack is typically required:**

- Rack storage over 25 ft with solid shelving
- Open-top containers blocking ceiling spray
- Narrow aisle (< 4 ft) storage configurations
- Storage heights exceeding ESFR capability for the commodity class

**In-rack sprinkler placement:**

| Rack Configuration | First Level | Additional Levels |
| --- | --- | --- |
| Single-row rack, Class I-IV | At top of storage tier | Every 10-12 ft of storage height |
| Double-row rack, Class I-IV | At top of storage tier | Every 10-12 ft of storage height |
| Single-row rack, Group A plastic | At top of storage tier | Every 8-10 ft of storage height |
| Multi-row rack (> 2 deep) | At top of storage tier | Per calculation — consult Chapter 25 |

**Clearances for in-rack heads:**

- Min 6 inches below any horizontal barrier (shelf, rack beam)
- Min 3 inches to any stored commodity
- Longitudinal flue space: min 3 inches between back-to-back loads
- Transverse flue space: min 6 inches at uprights

{% figure src="/placeholder-diagram.svg" alt="In-rack sprinkler placement diagram showing flue spaces, head locations, and clearances" caption="Typical in-rack sprinkler placement in double-row rack storage." /%}

---

## Residential sprinkler standards comparison

| Feature | NFPA 13D | NFPA 13R | NFPA 13 |
| --- | --- | --- | --- |
| Applies to | 1-2 family dwellings, manufactured homes | Residential up to 4 stories | All buildings |
| Design goal | Life safety only | Life safety only | Property + life safety |
| Water supply duration | 10 min | 30 min | 30-60 min (per hazard) |
| Exempt areas | Bathrooms < 55 sq ft, closets < 24 sq ft, garages, attics, open porches | Attics, closets < 24 sq ft, balconies, bathrooms < 55 sq ft (varies by edition) | None |
| Head type | Residential listed | Residential listed | Residential in dwelling units, commercial elsewhere |
| Multipurpose piping | Permitted | Permitted | Not permitted |
| Min heads flowing | 2 | Per hydraulic calc | Per hydraulic calc |
| Antifreeze | Listed solutions only | Listed solutions only | Listed solutions only |
| System types | Wet, multipurpose | Wet, dry, multipurpose | Wet, dry, preaction, deluge |

{% callout type="warning" %}
NFPA 13D does not require monitoring. NFPA 13R and 13 typically require waterflow alarm monitoring. Verify local amendments — many jurisdictions modify 13D/13R requirements.
{% /callout %}

**Residential head design data:**

- K-factor: typically K4.9 or K5.6
- Minimum operating pressure: per listing, usually 7-10 psi
- Temperature rating: 155F or 175F (verify listing)
- Coverage: typically up to 16 ft x 16 ft (256 sq ft) at listed pressure

---

## Cold storage and freezer design

Cold environments create significant challenges for sprinkler systems.

**System selection:**

| Environment | Recommended System | Notes |
| --- | --- | --- |
| Cooler (32-40F) | Wet pipe | Standard approach, no penalties |
| Freezer (0 to 32F) | Dry pipe or preaction | Dry pipe with nitrogen recommended |
| Deep freeze (below 0F) | Dry pipe or preaction | Must use dry-barrel heads; nitrogen inerting strongly recommended |

**Design penalties for dry/preaction systems:**

- 30% increase in design area (equivalent to higher demand)
- Alternatively, increase density by 0.05 gpm/sq ft above the base density
- Quick-response head reductions do NOT apply to dry or preaction systems

**Cold storage-specific requirements:**

- Antifreeze systems: listed solutions only (post-2013 editions). Glycerin and propylene glycol solutions must be UL listed for the specific concentration. Most AHJs discourage antifreeze entirely.
- Dry systems: nitrogen inerting recommended to prevent internal corrosion. Compressed air accelerates MIC (microbiologically influenced corrosion) in wet-dry cycling.
- Insulated fittings at the cold/warm boundary to prevent condensation and ice formation
- Heat tracing on any wet piping that passes through cold zones
- Galvanized pipe or internally coated pipe recommended for all cold storage dry systems

{% callout %}
Nitrogen inerting (NFPA 13, Section 7.4.2) is not yet mandatory in all editions but is increasingly specified by insurance carriers and AHJs for dry and preaction systems, especially in cold storage.
{% /callout %}

---

## High-rise design parameters

NFPA 13 and IBC define high-rise as buildings with an occupied floor more than 75 ft above the lowest level of fire department vehicle access.

| Requirement | Standard | Details |
| --- | --- | --- |
| Floor control valve assembly | NFPA 13 Section 8.17.2 | OS&Y or butterfly valve, check valve, drain, gauges, test connection — one per floor per zone |
| Component pressure rating | NFPA 13 | 175 psi max working pressure for standard components |
| High-pressure components | NFPA 13 | Required above 175 psi — 250 psi or 300 psi rated |
| Pressure zones | IBC / NFPA 14 | Zone when pressure exceeds 175 psi at the lowest head |
| Fire pump(s) | NFPA 20 | Typically required; redundant power supply mandatory |
| Standpipe integration | NFPA 14 | Combined sprinkler/standpipe systems common |
| Seismic bracing | ASCE 7 / NFPA 13 | Required in seismic design categories C, D, E, F |

**Pressure zone layout:**

- Calculate static pressure at the lowest sprinkler on each floor: 0.433 psi per foot of elevation
- If static + system pressure exceeds 175 psi, a pressure-reducing valve or separate zone is required
- Typical zone height: 250-300 ft depending on supply pressure and system demand

{% callout type="warning" %}
PRVs (pressure-reducing valves) at floor control assemblies must be set and tested during commissioning. A PRV failure can result in heads exceeding their rated pressure, voiding listings.
{% /callout %}

**High-rise fire pump considerations:**

- Electric and diesel drivers both acceptable per NFPA 20
- Secondary power supply (generator or second utility feed) required
- Fire pump test header must be accessible at grade level
- Jockey pump required for pressure maintenance
- Pump room must be separated per IBC — 2-hour fire barrier typical
