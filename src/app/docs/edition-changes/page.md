---
title: NFPA 13 Edition Changes
nextjs:
  metadata:
    title: NFPA 13 Edition Changes
    description: Major changes between NFPA 13 editions from 2013 through 2025 — what designers need to know when working across jurisdictions with different adopted editions.
---

Different jurisdictions adopt different editions of NFPA 13. A designer working across multiple AHJs needs to know what changed between editions to avoid submitting plans that comply with the wrong version. This page tracks the changes that most affect daily design work. {% .lead %}

{% callout type="warning" title="Always verify the adopted edition" %}
Before starting any design, confirm which NFPA 13 edition the AHJ has adopted. Designing to the wrong edition is one of the most common reasons for plan rejection. Some jurisdictions lag the current edition by 6-10 years.
{% /callout %}

---

## 2025 Edition — Key Changes

The 2025 edition introduces several significant additions, particularly for storage on sloped ceilings and system area limits.

### Vacuum dry and preaction systems

New Section 8.11 adds definitions and installation requirements for vacuum dry and preaction systems. These systems maintain a vacuum in the piping (rather than pressurized air or nitrogen), significantly reducing internal corrosion. The C-factor for vacuum systems improves to C=120 (same as wet pipe), compared to C=120 for nitrogen-inerted or C=100 for standard air-filled dry systems.

### Sloped ceilings in storage occupancies

For the first time, NFPA 13 permits ESFR protection on sloped ceilings in storage occupancies. Six protection options are provided. ESFR on slopes greater than 2:12 requires an **18-sprinkler design area** instead of the standard 12 sprinklers.

### Light hazard system area limit increase

The maximum system size for light hazard wet pipe systems increased from **52,000 sq ft to 78,000 sq ft** — a 50% increase. This affects multi-floor buildings where a single riser previously needed to be split into multiple systems.

### High ceiling restrictions (above 30 ft)

- Sidewall sprinklers prohibited for Ordinary Hazard Group 1 and higher when ceiling height exceeds 30 ft
- Minimum K11.2 required for Ordinary Hazard Group 2 at ceiling heights above 30 ft

### Supplemental sprinklers beneath obstructions

Sprinklers installed beneath obstructions must now be quick-response or fast-response with water shields when the obstruction is non-flat. This addresses situations where duct-mounted or beam-mounted supplemental heads did not perform as intended.

### Documentation cabinet

Final documentation (as-built drawings, hydraulic calculations, O&M manuals) must now be stored on-site in a documentation cabinet accessible to the building owner and inspection personnel.

---

## 2022 Edition — Key Changes

The 2022 edition contains arguably the most significant design methodology change in decades: the replacement of density/area curves.

### Density/area curves replaced with single-point density

**This is the biggest change for daily design work.** Chapter 19 now provides single-point density options for new system designs, replacing the traditional density/area curve approach that had been used since the 1970s. Existing systems may continue using the density/area curves for modifications and additions.

| Hazard | New Single-Point Density | Design Area |
|--------|-------------------------|-------------|
| Light Hazard | 0.10 gpm/sq ft | 1,500 sq ft |
| OH Group 1 | 0.15 gpm/sq ft | 1,500 sq ft |
| OH Group 2 | 0.20 gpm/sq ft | 1,500 sq ft |
| EH Group 1 | 0.30 gpm/sq ft | 2,500 sq ft |
| EH Group 2 | 0.40 gpm/sq ft | 2,500 sq ft |

{% callout type="note" title="Density/area curves are not gone" %}
The curves still exist in the annex for reference and for modification of existing systems. But new designs under the 2022+ edition use the fixed density/area values above. The practical impact: no more optimization by sliding along the curve.
{% /callout %}

### In-rack sprinkler design rewrite

Chapter 25 was completely rewritten and consolidated. All in-rack sprinkler design criteria are now in one chapter instead of scattered across multiple storage chapters.

### ESFR criteria tightened

K14.0 and K16.8 ESFR heads are no longer permitted for many storage scenarios involving uncartoned unexpanded Group A plastics. These configurations now require K22.4 or K25.2.

### Dry system air pressure supervision

Electronic supervision of air pressure in dry and preaction systems is now mandatory (Chapter 8), not just recommended. Loss of air pressure must transmit a supervisory signal.

### Nitrogen C-factor change

The C-factor for dry systems using nitrogen changed from C=100 to **C=120**. This is a significant improvement in calculated friction loss for nitrogen-inerted systems, reflecting reduced corrosion.

### Multi-row rack depth limit

Open-frame racks are limited to a maximum depth of **20 ft between aisles** to be considered for open-frame protection criteria.

---

## 2019 Edition — Key Changes

The 2019 edition is notable for a major structural reorganization of the standard itself.

### Chapter reorganization

The standard went from 27 to 30 chapters. Storage chapters were reorganized by **sprinkler technology type** (CMDA, CMSA, ESFR) instead of by commodity/arrangement. A "2016-2019 Roadmap" was added after the index to help designers find requirements that moved.

{% callout type="warning" title="Section numbers changed" %}
If you work across 2016 and 2019 editions, be aware that many section numbers shifted. A section reference valid in 2016 may point to different content in 2019. Always use the roadmap tables when cross-referencing.
{% /callout %}

### Wet system venting requirement

All new wet pipe systems must include provisions to vent trapped air from the system. This addresses microbiologically influenced corrosion (MIC) caused by oxygen-rich air pockets in water-filled piping. Acceptable methods include automatic air vents, manual vents at high points, or listed air release valves.

### Galvanized pipe no longer required for dry systems

Galvanized pipe and fittings are no longer a blanket requirement for dry and preaction systems. The standard now recognizes nitrogen inerting and other corrosion prevention strategies as alternatives.

### K25.2 CMSA recognition

K25.2 CMSA (Control Mode Specific Application) sprinklers were formally recognized for buildings up to 40 ft roof height, expanding options for storage protection without in-rack sprinklers.

### 2-hour air test for dry/preaction

Dry and preaction systems must pass a 2-hour air pressure test with a maximum loss of **3 psi**. This is in addition to the hydrostatic test.

---

## 2016 Edition — Key Changes

### Metric conversion approach

Metric values changed from exact to approximate conversions to improve international usability. This does not affect US design practice but matters for international projects.

### Commodity classification table

New Table A.5.6.1.1 added to simplify commodity classification decisions. This annex table provides a more structured approach to determining commodity class, particularly for mixed products.

### Group A plastics classification revision

The decision tree for classifying Group A plastics (cartoned, exposed, free-flowing) was revised to be clearer and more prescriptive. This affects warehouse and distribution center designs.

### Exposed expanded Group A plastics in racks

New design criteria added for exposed expanded Group A plastics stored in racks — one of the most challenging fire scenarios. Previous editions did not provide specific criteria for this configuration, forcing designers to use engineering judgment or FM Global data sheets.

---

## 2013 Edition — Key Changes

### Antifreeze restrictions

Antifreeze solutions in new sprinkler systems were effectively prohibited unless the solution is **listed and demonstrated non-ignitable** at the installed concentration. This was in response to fire incidents where antifreeze solutions contributed to fire intensity. Glycerin-based solutions at specific concentrations are now the primary listed option.

{% callout type="warning" title="Antifreeze is a major liability" %}
Post-2013, the use of antifreeze is extremely limited. Many designers now specify dry pipe, preaction, or heat-traced wet systems rather than antifreeze for freeze-prone areas. Verify the AHJ's position on antifreeze before including it in a design.
{% /callout %}

### ESFR K14.0 ceiling height limit

K14.0 ESFR sprinklers limited to a maximum ceiling height of **35 ft**. Systems exceeding 35 ft must use K16.8 or larger ESFR heads, or add in-rack sprinklers.

### Water mist exclusion

Water mist systems were explicitly excluded from NFPA 13. These systems are covered by **NFPA 750** (Standard on Water Mist Fire Protection Systems).

### CPVC chemical compatibility

New requirements for CPVC pipe chemical compatibility were added, requiring documentation that no incompatible materials (adhesives, sealants, caulks, etc.) contact or are used near CPVC piping. This codified what CPVC manufacturers had been requiring through their listing conditions.

---

## Quick comparison table

| Feature | 2013 | 2016 | 2019 | 2022 | 2025 |
|---------|------|------|------|------|------|
| Density/area curves | Required | Required | Required | Optional (single-point available) | Optional |
| Antifreeze | Listed only | Listed only | Listed only | Listed only | Listed only |
| Wet system venting | Not required | Not required | Required (new systems) | Required | Required |
| Dry system C-factor (nitrogen) | C=100 | C=100 | C=100 | C=120 | C=120 |
| ESFR K14.0 max ceiling | 35 ft | 35 ft | 35 ft | 35 ft | 35 ft |
| Light hazard max system area | 52,000 sq ft | 52,000 sq ft | 52,000 sq ft | 52,000 sq ft | 78,000 sq ft |
| Dry system air supervision | Recommended | Recommended | Recommended | Mandatory | Mandatory |
| Sloped ceiling storage | Not permitted | Not permitted | Not permitted | Not permitted | Permitted (6 options) |
| Documentation cabinet | Not required | Not required | Not required | Not required | Required |

{% figure src="/placeholder-diagram.svg" alt="NFPA 13 edition timeline" caption="Timeline of major NFPA 13 edition changes from 2013 through 2025 — verify which edition your AHJ has adopted before starting design" /%}
