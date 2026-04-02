---
title: Obstructions to Spray
nextjs:
  metadata:
    title: Obstructions to Spray
    description: "NFPA 13 obstruction clearance rules — distance tables, three-times rule, ESFR requirements, and beam/duct thresholds."
---

Quick-lookup tables for NFPA 13 obstruction clearance rules. Covers standard spray, ESFR, extended coverage, and continuous/non-continuous obstructions. {% .lead %}

---

## Obstruction clearance table

Per NFPA 13 Section 8.6.5 (2019) / 10.2.6 (2022+). Determines the maximum allowable depth of an obstruction below the deflector plane based on its horizontal distance from the sprinkler.

| Horizontal distance from sprinkler (ft) | Max allowable obstruction depth below deflector (in.) |
|---|---|
| Less than 1 ft | 0 (no obstruction allowed) |
| 1 ft | 2.5 |
| 2 ft | 3.5 |
| 3 ft | 5.5 |
| 4 ft | 7.5 |
| 5 ft | 9.5 |
| 6 ft | 12 |
| 7 ft | 14 |
| 8 ft | 15.5 |
| 9 ft | 18 |
| 10 ft | 22 |
| 11 ft and beyond | No limit (past cone of discharge) |

{% callout type="note" %}
This table applies to standard spray sprinklers. The principle: the farther an obstruction is from the sprinkler centerline, the deeper it can extend below the deflector without blocking the discharge cone. Within 1 ft horizontally, nothing may project below the deflector plane.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Obstruction clearance geometry showing deflector plane, horizontal distance, and allowable depth" caption="Obstruction clearance geometry — horizontal distance vs. maximum depth below deflector" /%}

---

## Rules summary

| Rule | Applies to | Requirement | Reference |
|---|---|---|---|
| 18-inch rule | Standard spray sprinklers | Min 18 in. clear below deflector to top of storage | 8.5.6.1 (2019) |
| 36-inch rule | ESFR and CMSA sprinklers | Min 36 in. clear below deflector to top of storage | 8.5.6.2 (2019) |
| Three-times rule | Non-continuous obstructions < 24 in. wide | Min horizontal distance from sprinkler to obstruction = 3x the max dimension of the obstruction | 8.6.5.2.1 (2019) |
| Four-times rule | Extended coverage sprinklers | Min horizontal distance = 4x the max dimension, but never exceeding 36 in. | 8.6.5.2.2 (2019) |
| 30-inch threshold | Continuous obstructions against a wall | Width exceeding 30 in. requires sprinklers beneath the obstruction | 8.6.5.1 (2019) |
| Noncombustible obstruction exception | Pipes, conduit, etc. under 1 in. wide | No special treatment required | 8.6.5.2.3 (2019) |

{% callout type="warning" %}
The three-times and four-times rules apply to non-continuous obstructions only. Continuous obstructions (ducts, soffits, solid shelves) follow different rules based on width and proximity to wall.
{% /callout %}

---

## ESFR obstruction rules

ESFR sprinklers have significantly tighter obstruction clearances than standard spray. These are pass/fail requirements; there is no interpolation table.

| Parameter | Requirement |
|---|---|
| Horizontal clearance from ESFR pendent | Min 1 ft on each side of sprinkler frame |
| Vertical clearance below ESFR deflector | Min 2 ft clear below the deflector to any obstruction |
| Clearance to top of storage | Min 36 in. from deflector to top of storage |
| Fluorescent lights | Must be mounted parallel to sprinkler branch lines or treated as obstructions |
| Open-top containers / bins | Top of container is considered top of storage |
| Solid shelving | Not permitted with ESFR unless listed |

{% callout type="warning" %}
ESFR systems will not be listed for use with solid shelf storage in most cases. If the owner plans solid shelves, ESFR may not be an option. Verify with the sprinkler manufacturer listing.
{% /callout %}

---

## Beam and joist rules

When structural members create separate bays, sprinkler coverage must account for each bay independently.

### Beam depth thresholds

| Beam depth | Impact on sprinkler layout |
|---|---|
| Less than 4 in. | Generally ignored unless within 1 ft of sprinkler |
| 4 in. to 12 in. | Position sprinkler at centerline of bay; check clearance table |
| 12 in. to 18 in. | Bay may need dedicated coverage; check deflector-to-beam relationship |
| Greater than 18 in. | Each bay is treated as a separate compartment; sprinkler required in each bay |

### Sprinkler positioning relative to beams

| Sprinkler orientation | Max distance from face of beam | Deflector position |
|---|---|---|
| Upright or pendent (standard) | 1 in. to 12 in. from bottom of beam | 1 in. to 12 in. below ceiling (per listing) |
| Upright between beams | Centered in bay | 1 in. to 12 in. below the deck |
| Pendent below beam | N/A | 1 in. to 6 in. below bottom of beam |

{% callout type="note" %}
For bar joists and open-web steel joists, the chord members and web members are generally small enough to be disregarded unless bundled conduit or piping is attached to them.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Beam depth impact on sprinkler bay coverage" caption="Beam depth thresholds and sprinkler bay treatment" /%}

---

## Common obstructions quick reference

| Obstruction | Trigger threshold | Typical resolution |
|---|---|---|
| HVAC ducts (continuous) | Width > 4 ft or extends below sprinkler deflector plane within clearance table limits | Add sprinklers beneath duct; or relocate sprinkler so duct falls outside discharge cone |
| Ducts < 4 ft wide | Within horizontal/depth limits per clearance table | Reposition sprinkler or verify clearance table compliance |
| Light fixtures (surface mount) | Depth > 2.5 in. within 1 ft of sprinkler, or fails clearance table at greater distances | Relocate light or sprinkler; recessed fixtures often resolve |
| Light fixtures (pendant / drop) | Fails clearance table based on horizontal distance and depth below deflector | Shorten drop rod, relocate light, or relocate sprinkler |
| Cable trays | Width > 4 ft continuous, or fails clearance table | Add sprinklers below; maintain 18 in. vertical clearance above tray |
| Columns / structural members | > 12 in. wide, within discharge cone | Add sprinkler on shielded side of column |
| Open steel bar joists | Individual members < 1 in. | No action (noncombustible exception) |
| Signage / banners | Any size within discharge cone | Relocate or add sprinkler coverage below |
| Privacy curtains (hospitals) | Non-continuous, operable | Verify sprinkler spacing per NFPA 13 cubicle curtain rules; mesh top curtains preferred |
| Pipe / conduit (< 1 in.) | Below 1 in. nominal | Exempt per noncombustible small-obstruction exception |
| Pipe / conduit (> 1 in.) | Exceeds 1 in. nominal | Treat as non-continuous obstruction; apply three-times rule |

---

## Continuous vs. non-continuous obstructions

| Category | Definition | Rule applied |
|---|---|---|
| Continuous | Extends unbroken for the full width of the sprinkler coverage area (ducts, soffits, solid shelves) | Clearance table + 30 in. wall threshold |
| Non-continuous | Isolated items that do not span the full coverage width (columns, pipes, lights) | Three-times rule (or four-times for extended coverage) |
| Horizontal | Runs parallel to the ceiling (trays, ledges) | Use clearance table for depth/distance |
| Vertical | Extends from floor toward ceiling (columns, partitions) | Evaluate whether discharge pattern is blocked; add sprinkler on shadow side if needed |

---

## Edition changes

| Topic | 2016 edition | 2019 edition | 2022 edition |
|---|---|---|---|
| Obstruction clearance table | Section 8.5.5 | Section 8.6.5 | Relocated to Chapter 10 (10.2.6) |
| ESFR clearance | 36 in. below deflector | 36 in. below deflector (no change) | 36 in. below deflector; added language on solid shelving prohibition |
| Three-times rule | Applied to obstructions < 24 in. | No change | Clarified measurement point for irregular shapes |
| Four-times rule for EC heads | Not explicitly stated | Added 8.6.5.2.2 for extended coverage | Retained in Chapter 10 |
| Noncombustible small-obstruction exemption | < 1 in. wide | < 1 in. wide (no change) | Retained; cross-referenced with piping chapter |
| Beam depth bay separation | > 18 in. = separate bay | No change | Added guidance on tapered beams |

{% callout type="note" %}
The 2022 edition reorganized obstruction content into Chapter 10. Section numbers shifted significantly, but the technical requirements are largely the same. Always confirm you are referencing the correct edition for your AHJ.
{% /callout %}

---

## Field verification checklist

Use during final inspection or plan review:

- [ ] Verify 18 in. (or 36 in. for ESFR) clearance from deflector to top of storage
- [ ] Check all obstructions within 10 ft horizontal of each sprinkler against the clearance table
- [ ] Confirm three-times rule compliance for isolated obstructions < 24 in.
- [ ] Verify ESFR: 1 ft horizontal + 2 ft vertical clearance at every head
- [ ] Check beam depths; confirm bay-by-bay coverage where beams exceed 18 in.
- [ ] Confirm continuous obstructions > 30 in. wide against walls have sprinklers beneath
- [ ] Verify no unauthorized storage stacking into sprinkler clearance zone
