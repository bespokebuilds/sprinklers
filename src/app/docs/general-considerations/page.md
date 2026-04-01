---
title: General Considerations
nextjs:
  metadata:
    title: General Considerations
    description: Foundational concepts for water-based fire sprinkler system layout, including pipe sizing methods, design approaches, and key terminology every designer must understand.
---

Before diving into specific system types, every fire sprinkler designer needs a solid understanding of the foundational concepts that govern how systems are laid out, sized, and evaluated. This page covers the core principles that apply across all water-based fire protection systems.

---

## Design Standards Overview

The primary standard governing fire sprinkler design in the United States is **NFPA 13: Standard for the Installation of Sprinkler Systems**. It is the most widely used sprinkler installation standard in the world and covers system design, installation, and component requirements for virtually all occupancy types.

Related standards include:

- **NFPA 13R** -- Residential occupancies up to four stories and 60 feet in height
- **NFPA 13D** -- One- and two-family dwellings and manufactured homes
- **NFPA 14** -- Standpipe and hose systems
- **NFPA 20** -- Fire pump installations
- **NFPA 22** -- Water tanks for private fire protection
- **NFPA 24** -- Private fire service mains and their appurtenances
- **NFPA 25** -- Inspection, testing, and maintenance of water-based systems
- **NFPA 72** -- National Fire Alarm and Signaling Code

Insurance carriers such as **FM Global** maintain their own data sheets that may impose more conservative requirements than NFPA 13, particularly regarding commodity classification, design densities, and storage protection. Designers must know early in a project whether FM Global or another insurer's standards apply, as this can significantly affect system cost and complexity.

---

## Pipe Sizing Methods

There are two fundamental approaches to sizing sprinkler pipe, though modern practice overwhelmingly favors hydraulic calculation.

### Pipe Schedule Method

The pipe schedule method uses predetermined tables that specify the maximum number of sprinklers allowed on a given pipe size. It requires no calculations -- the designer simply counts heads and selects pipe from the schedule.

NFPA 13 still permits the pipe schedule method in limited situations:

- Additions or modifications to existing pipe schedule systems
- New systems serving areas of roughly 5,000 square feet or less

While simpler, the pipe schedule method is conservative and often results in larger pipe sizes than necessary. It is rarely used for new commercial or industrial work.

### Hydraulic Calculation Method

The hydraulic calculation method sizes pipe based on actual flow and pressure requirements. The designer selects a design area, determines the required density (flow per unit area), and then calculates pipe sizes to deliver adequate water at acceptable pressures throughout the system.

Key advantages:

- Optimizes pipe sizes, reducing material costs
- Accounts for actual water supply conditions
- Required for most new systems under NFPA 13
- Allows the designer to prove the system will perform as intended

The **2025 edition of NFPA 13** removed the traditional density/area curve concept entirely, shifting to tabular design criteria for storage applications. Designers working under current editions should be aware of this significant change.

---

## Layout Fundamentals

### Tree Systems vs. Loop Systems vs. Grid Systems

**Tree systems** have a single feed main with branch lines extending from one side or both sides. Water flows in one direction through each branch line. These are the simplest to design and install, and are common in warehouses and open-floor-plan buildings.

**Loop systems** connect the ends of branch lines back to a common return main, creating a loop. Water can flow from either direction to reach any sprinkler, which reduces friction loss and allows smaller pipe sizes. Loops are common in multi-story buildings.

**Grid systems** connect branch lines at both ends to separate mains, creating multiple flow paths. These produce the lowest friction losses and smallest pipe sizes but are the most complex to calculate. Grid systems are common in large commercial buildings.

### Branch Line Sizing

Branch lines connect directly to sprinkler heads. The sizing depends on:

- Number of heads on the line
- Spacing between heads
- Required flow and pressure at each head
- System type (wet, dry, preaction)
- Pipe material and its C-factor

### Maximum Coverage Areas

Standard spray sprinklers have maximum coverage areas per head that depend on the hazard classification:

- **Light Hazard**: up to 225 sq ft per head (some configurations allow more)
- **Ordinary Hazard**: up to 130 sq ft per head
- **Extra Hazard**: up to 100-130 sq ft per head depending on group

Maximum spacing between heads on a branch line and between branch lines is typically 15 feet for ordinary hazard, though this varies by head type and listing.

### Clearances

A critical rule: the minimum clearance between the top of storage and the sprinkler deflector is important for proper spray pattern development. NFPA 13 generally requires:

- **18 inches** minimum clearance below sprinkler deflectors in sprinklered areas
- **24 inches** minimum clearance below ceilings in non-sprinklered areas
- **1.5 to 4.5 feet** above storage height is the optimal range for sprinkler placement based on fire test data

---

## Water Supply Evaluation

Every sprinkler system design starts with understanding the available water supply. Designers need to obtain a current water flow test, which provides three key data points:

1. **Static pressure** -- the pressure with no water flowing
2. **Residual pressure** -- the pressure while a known flow rate is being discharged
3. **Flow rate** -- the measured discharge during the residual reading

From these values, the designer plots a water supply curve and compares it against the system demand curve. The system demand includes:

- Sprinkler demand (flow and pressure at the most remote area)
- Hose stream allowance (additional flow required by code for fire department use)
- Friction losses through all piping, fittings, and valves
- Elevation differences
- Any device losses (alarm valves, backflow preventers, etc.)

If the water supply cannot meet the system demand, the designer must either reduce demand (larger pipe, different layout) or augment supply (fire pump, storage tank, or both).

---

## Key Terminology

| Term | Definition |
|------|-----------|
| **AHJ** | Authority Having Jurisdiction -- the entity responsible for approving the system |
| **Design Area** | The floor area used for hydraulic calculations, representing the assumed area of sprinkler operation |
| **Density** | The required water application rate, expressed in gpm per square foot |
| **K-Factor** | A constant that relates flow through a sprinkler to the square root of pressure (Q = K x square root of P) |
| **Remote Area** | The hydraulically most demanding area of the system, usually the highest and farthest point from the water supply |
| **Hose Stream Allowance** | Additional water flow added to the sprinkler demand for fire department use |
| **System Demand** | Total flow and pressure the water supply must deliver |
| **C-Factor** | The Hazen-Williams roughness coefficient for a given pipe material |
| **BOR** | Base of Riser -- the reference point for pressure calculations |

---

## Common Mistakes for New Designers

1. **Ignoring elevation changes** -- Every foot of elevation gain costs approximately 0.433 psi. In multi-story buildings, this adds up quickly.
2. **Using stale flow test data** -- Water supply conditions change. Most AHJs require flow tests less than 12 months old.
3. **Forgetting fitting equivalent lengths** -- Every elbow, tee, and valve adds friction loss. These must be included in calculations.
4. **Not accounting for future changes** -- Storage heights change, occupancies shift. Good designers build in reasonable safety margins.
5. **Misidentifying the remote area** -- The most remote area is not always the farthest point. The most hydraulically demanding area considers elevation, distance, and demand together.
6. **Overlooking backflow preventer losses** -- These devices can impose significant pressure losses that must be included in calculations.
