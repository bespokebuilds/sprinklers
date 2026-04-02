---
title: Design Workflow
nextjs:
  metadata:
    title: Design Workflow
    description: Sprinkler system design reference — head spacing tables, deflector distances, system size limits, and submittal requirements per NFPA 13.
---

## Head spacing — standard spray pendent and upright

All values per NFPA 13, 2022 edition unless noted. Check listing sheets for specific heads — listed spacing may be more restrictive than the standard tables.

| Hazard | Max Coverage (sq ft) | Max Spacing (ft) | Min Spacing (ft) | Max Distance from Wall (ft) |
| --- | --- | --- | --- | --- |
| Light Hazard | 225 | 15 | 6 | 7.5 |
| OH1 | 130 | 15 | 6 | 7.5 |
| OH2 | 130 | 15 | 6 | 7.5 |
| EH (< 0.25 gpm/sf) | 130 | 15 | 6 | 7.5 |
| EH (>= 0.25 gpm/sf) | 100 | 12 | 6 | 6 |

{% callout type="warning" %}
Minimum distance from any wall is **4 inches** to the centerline of the sprinkler deflector. This applies to all hazard classifications.
{% /callout %}

**Key exceptions to the table above:**

- Extended coverage heads use listed spacing, not the standard table. Always verify with the cut sheet.
- CMSA (Control Mode Specific Application) heads for storage have their own tables in NFPA 13 Chapter 20-26.
- Residential heads in NFPA 13 dwelling units follow the head's listing — typically 16 ft max spacing, 8 ft from wall.

---

## Deflector-to-ceiling distance

| Head Type | Smooth Flat Ceiling | Beam / Bar Joist Construction |
| --- | --- | --- |
| Standard spray pendent | 1" to 12" below | 1" to 22" below bottom of beam |
| Standard spray upright | 1" to 12" below ceiling | 1" to 22" below |
| Sidewall | Per listing | Per listing |
| ESFR pendent (K14 / K16.8) | 6" to 14" | Not permitted for beam construction |
| ESFR pendent (K22.4+) | 6" to 18" | Not permitted for beam construction |

{% callout %}
For concealed heads, the deflector distance is measured from the ceiling plane to the deflector in the activated (dropped) position, not the cover plate. Check the listing for the specific model.
{% /callout %}

**Obstructions near deflectors:**

- Continuous obstructions (soffits, ducts) within 18 inches horizontally require additional heads below the obstruction if depth exceeds the table in NFPA 13, Section 8.5.5.
- Non-continuous obstructions (columns, light fixtures) use the three-times rule: if the distance from sprinkler to obstruction is less than three times the depth of the obstruction, relocate the head or add coverage.

---

## System size limits

Maximum area served by a single sprinkler riser, per NFPA 13:

| System Type | Light Hazard | Ordinary Hazard | Extra Hazard |
| --- | --- | --- | --- |
| Wet pipe | 52,000 sq ft | 52,000 sq ft | 40,000 sq ft |
| Wet pipe (2025 edition) | 78,000 sq ft | 52,000 sq ft | 40,000 sq ft |
| Dry pipe | 40,000 sq ft | 40,000 sq ft | 40,000 sq ft |
| Preaction (single interlock) | 40,000 sq ft | 40,000 sq ft | 40,000 sq ft |
| Deluge | Per calc | Per calc | Per calc |

{% callout type="warning" %}
Dry and preaction systems exceeding 500 gallons capacity must deliver water to the inspector's test connection within 60 seconds. Systems that cannot meet this requirement must be reduced in size or subdivided.
{% /callout %}

**Number of sprinklers on a dry system:** Max 500 heads per valve. This is a hard NFPA 13 limit — the area limit and the head count limit both apply, and the more restrictive one governs.

---

## Design density quick reference

| Hazard | Density (gpm/sq ft) | Design Area (sq ft) | Hose Allowance (gpm) |
| --- | --- | --- | --- |
| Light Hazard | 0.10 | 1,500 | 100 |
| OH1 | 0.15 | 1,500 | 250 |
| OH2 | 0.20 | 1,500 | 250 |
| EH1 | 0.30 | 2,500 | 500 |
| EH2 | 0.40 | 2,500 | 500 |

{% callout %}
Design area reductions: Quick-response heads in wet systems allow a design area reduction per NFPA 13 Section 19.3.3.2. The reduction does not apply to dry or preaction systems.
{% /callout %}

---

## Pipe sizing — schedule method reference

Pipe schedule sizing is permitted for Light and Ordinary Hazard only. All other hazards require hydraulic calculation.

| Pipe Size (in) | Light Hazard — Max Heads | OH1 — Max Heads |
| --- | --- | --- |
| 1 | 2 | 2 |
| 1-1/4 | 3 | 3 |
| 1-1/2 | 5 | 5 |
| 2 | 10 | 10 |
| 2-1/2 | 30 | 20 |
| 3 | 60 | 40 |
| 3-1/2 | 100 | 65 |
| 4 | — | 100 |

{% callout type="warning" %}
Pipe schedule is increasingly rejected by AHJs on new construction. Use hydraulic calculation as the default approach.
{% /callout %}

---

## NFPA 13 Chapter 29 — submittal checklist

Check every item before submitting. Missing items are the number one cause of plan review delays.

- [ ] Floor plans showing all piping, pipe sizes, head locations, hanger locations, and brace locations
- [ ] Riser diagram with valve arrangement, trim, and component identification
- [ ] Hydraulic calculations with summary sheet (demand vs. supply clearly shown)
- [ ] Water supply data — flow test less than 12 months old
- [ ] Cut sheets for all sprinkler heads, valves, and devices
- [ ] Seismic bracing calculations and locations (if required by jurisdiction or ASCE 7)
- [ ] Material list — pipe type, fitting type, hanger type
- [ ] System description with hazard classification, occupancy type, and design criteria
- [ ] Plans signed and sealed by the required professional (varies by state)
- [ ] Commodity classification and storage arrangement (for storage occupancies)
- [ ] Antifreeze solution documentation (if applicable)
- [ ] Standpipe calculations (if combined system)

---

## Common AHJ rejection items

These are the most frequent causes of plan review rejection. Address them before submittal.

| Issue | Resolution |
| --- | --- |
| Flow test older than 12 months | Obtain a new flow test from the water purveyor or conduct one per NFPA 291 |
| Missing hydraulic calculation summary | Add the summary page showing demand point, supply curve, and safety margin |
| Head spacing exceeds listed maximum | Verify coverage area per cut sheet; add heads or reposition as needed |
| Obstruction not addressed | Apply NFPA 13 Section 8.5.5 rules; add heads below obstructions or relocate |
| No seismic bracing shown (seismic zone) | Add lateral and longitudinal braces per NFPA 13 Section 18.5 |
| Pipe not supported per table | Add hangers per NFPA 13 Table 9.2.1 — max 12 ft for 1" pipe, 15 ft for 4" pipe |
| Design area not identified on plans | Outline the hydraulically most remote area on the floor plan |
| Wrong hazard classification | Verify occupancy per NFPA 13 Chapter 5; provide justification documentation |
| Heads too close to obstructions | Relocate heads or obstructions to meet clearance rules |
| Missing alarm device information | Show all waterflow switches, tamper switches, and connections to FACP |

---

## Drawing standards

Recommended drawing content beyond the NFPA 13 minimum:

| Drawing Element | Purpose |
| --- | --- |
| North arrow and scale | Orientation and verification of dimensions |
| Grid lines matching architectural | Cross-reference coordination |
| Ceiling height annotations | Deflector distance verification |
| Pipe material legend | Quick reference for fabrication |
| Head symbol legend | Differentiate pendent, upright, sidewall, concealed |
| Hanger detail sheet | Show typical hanger types and attachment methods |
| Notes sheet | General notes, special conditions, deviations |

{% callout %}
Electronic submittals are increasingly required. Confirm the AHJ's preferred format — many now require PDF with layers intact, not flattened.
{% /callout %}

---

## Hydraulic calculation setup

Key parameters to confirm before starting calculations:

| Parameter | Source |
| --- | --- |
| Hazard classification | Occupancy and AHJ determination |
| Design density and area | NFPA 13 density/area curves or specific tables |
| K-factor and head type | Selected sprinkler listing |
| Pipe type and C-factor | C=120 (black steel), C=150 (copper/CPVC), C=100 (galvanized after 15 years) |
| Water supply data | Flow test — static, residual, and flow in gpm |
| Elevation differences | Architectural/structural drawings |
| System type | Wet, dry, preaction, deluge |

{% callout type="warning" %}
For dry systems, add 0.15 gpm/sq ft to the design density or increase the design area by 30% — whichever method is used, it must be applied before calculating. This accounts for the delay in water delivery.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Density/area curve diagram showing Light, OH1, OH2, EH1, and EH2 design points" caption="NFPA 13 density/area curves — select the design point at the intersection of density and area for the hazard classification." /%}
