---
title: Sprinkler Heads
nextjs:
  metadata:
    title: Sprinkler Heads
    description: Comprehensive reference for fire sprinkler head types, orientations, temperature ratings, K-factors, special application heads, and listing requirements per NFPA 13.
---

The sprinkler head is the business end of any fire sprinkler system. It is the component that detects heat, activates, and distributes water over the fire area. Selecting the correct head for each application is one of the most consequential decisions in fire protection design, affecting coverage area, discharge density, response time, and aesthetic integration.

---

## Classification by Orientation

Sprinkler heads are manufactured for specific mounting orientations. Installing a head in the wrong orientation will produce an incorrect spray pattern and may void the listing.

### Upright (SSU)

Upright heads are installed above the piping with the deflector on top. Water discharges upward, strikes the deflector, and is redirected downward in a hemispherical pattern. These are common in mechanical rooms, warehouses, and areas with exposed piping where pendent heads are impractical.

### Pendent (SSP)

Pendent heads hang below the piping or below a ceiling with the deflector pointing downward. Water discharges downward and outward in a circular pattern. Pendent heads are the most widely installed orientation in commercial construction with finished ceilings.

### Sidewall (SSH / HSW)

Sidewall heads are mounted on a wall near the ceiling and project water horizontally across the room in a half-pattern or quarter-pattern. They are used in corridors, hotel rooms, small offices, and areas where overhead piping is not feasible. Horizontal sidewall (HSW) heads are common in residential and light commercial work.

### Concealed

Concealed heads are recessed pendent heads fitted with a decorative cover plate. The cover plate is held in place by a heat-sensitive solder and drops away at a rated temperature below the sprinkler activation temperature, exposing the pendent head to heat. These are used in finished spaces where aesthetics are a priority -- lobbies, conference rooms, and high-end residential.

{% callout type="note" title="Cover Plate Temperature" %}
Concealed head cover plates typically drop away at about 20 degrees F below the sprinkler activation temperature. A 155 degree F rated concealed head will have a cover plate rated to release at approximately 135 degrees F.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Comparison of upright, pendent, sidewall, and concealed sprinkler head orientations showing deflector position and spray patterns" caption="Figure 1: Sprinkler head orientations and their typical spray patterns." /%}

---

## Classification by Response Type

Response characteristics determine how quickly a sprinkler activates and how it interacts with the fire plume.

### Standard Response

Standard response heads have a thermal element with a Response Time Index (RTI) of 80 or greater. They are the traditional choice for commercial and industrial applications under NFPA 13. Standard response heads allow a larger fire to develop before activation, which can be acceptable in many occupancies but produces higher water demand calculations.

### Quick Response (QR)

Quick response heads have an RTI of 50 or less, meaning they activate significantly faster than standard response heads. NFPA 13 requires quick response heads in all light hazard occupancies and in many residential applications. Faster activation means fewer heads operate in a fire event, resulting in less water damage and lower water demand.

### Early Suppression Fast Response (ESFR)

ESFR heads are large-orifice, quick-response heads designed to suppress high-challenge storage fires rather than merely controlling them. They deliver very high water densities at high pressure to penetrate the fire plume and reach the seat of the fire. ESFR systems eliminate the need for in-rack sprinklers in many warehouse configurations. Common K-factors for ESFR heads are K14.0, K16.8, and K25.2.

{% callout type="warning" title="ESFR Limitations" %}
ESFR heads have strict installation requirements. Ceiling must be flat and smooth, maximum ceiling slope typically cannot exceed 2 in 12, obstructions must be minimized, and the specific head must be listed for the commodity classification and storage height. Always verify the specific listing limitations of the ESFR head selected.
{% /callout %}

### Extended Coverage (EC)

Extended coverage heads are listed for coverage areas larger than the standard maximum for their orientation. For example, a standard pendent in light hazard covers up to 225 square feet per head at a maximum spacing of 15 feet. An EC pendent may be listed for up to 400 square feet per head at spacings up to 20 feet. EC heads reduce head count but require higher pressures and flows per head.

### Residential

Residential sprinkler heads are listed under UL 1626 and are specifically designed to produce a wall-wetting spray pattern that improves tenability for room occupants. They are required in dwelling unit installations under NFPA 13, NFPA 13R, and NFPA 13D. Residential heads are always quick response.

---

## Temperature Ratings and Color Coding

Every sprinkler head is rated to activate at a specific temperature. NFPA 13, Section 6.2.5 and Table 6.2.5.1 define the standard temperature classifications. Sprinkler heads use either a color-coded glass bulb or a color-coded frame (for fusible link types) to identify the temperature rating.

| Classification | Temperature Range | Glass Bulb Color | Frame Color (Fusible Link) |
|---|---|---|---|
| Ordinary | 135 to 170 degrees F | Orange or Red | Uncolored or Black |
| Intermediate | 175 to 225 degrees F | Yellow or Green | White |
| High | 250 to 300 degrees F | Blue | Blue |
| Extra High | 325 to 375 degrees F | Purple | Red |
| Very Extra High | 400 to 475 degrees F | Black | Green |
| Ultra High | 500 to 575 degrees F | Black | Orange |
| 650 degrees F | 650 degrees F | Black | Black |

{% callout type="note" title="Selecting Temperature Ratings" %}
NFPA 13, Section 6.2.5.2 requires sprinkler temperature ratings to be selected based on the maximum expected ceiling temperature. Ordinary temperature heads are suitable when the maximum ceiling temperature does not exceed 100 degrees F. Near heat sources such as unit heaters, skylights, or cooking equipment, use intermediate or high temperature heads as required by Section 6.2.5.3.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Temperature rating color coding chart showing glass bulb colors and frame colors for each temperature classification" caption="Figure 2: Sprinkler head temperature rating identification by glass bulb and frame color." /%}

---

## K-Factors

The K-factor is the discharge coefficient of a sprinkler head and defines the relationship between water flow and pressure at the head. The fundamental formula is:

**Q = K x sqrt(P)**

Where Q is flow in GPM, K is the discharge coefficient, and P is pressure in PSI at the sprinkler head.

### Common K-Factor Values

| K-Factor | Nominal Orifice | Typical Application |
|---|---|---|
| K5.6 | 1/2 inch | Standard spray, most common for light and ordinary hazard |
| K8.0 | 17/32 inch | Large orifice, used to achieve higher flows at lower pressures |
| K11.2 | 3/4 inch | Extra large orifice, storage and high-challenge applications |
| K14.0 | 7/8 inch | ESFR and high-flow storage applications |
| K16.8 | 1 inch | ESFR storage applications |
| K25.2 | 1-3/16 inch | Large-drop ESFR for high-piled storage |

### Practical Implications

A higher K-factor delivers more water at a given pressure. For hydraulically calculated systems, selecting a higher K-factor head can reduce friction loss and the overall system pressure demand, potentially allowing a smaller fire pump or avoiding one entirely. Conversely, ESFR heads with K16.8 or K25.2 typically require minimum operating pressures of 25 to 75 PSI at the most remote head, driving up the total system demand.

---

## Special Application Heads

### Corrosion-Resistant Heads

Sprinkler heads with wax coatings, PTFE coatings, or special alloys are available for corrosive environments such as chemical storage, bleaching areas, coastal installations, and wastewater treatment plants. These heads carry specific listings and must be used where environmental conditions would degrade a standard head.

### Dry-Type Pendent Heads

Dry-type pendent heads (also called dry sidewall or dry upright, depending on orientation) incorporate a sealed barrel that keeps water out of the drop nipple until the head activates. They are used on dry pipe and preaction systems where a pendent head must extend below a heated ceiling into an unheated space -- for example, a pendent head in a freezer with dry system piping above. The barrel length must be selected to keep the water seal above the frost line.

### Window Sprinklers

Window sprinklers are specifically listed to wet the interior surface of exterior glass, acting as a radiant heat barrier. They are used in lieu of fire-rated glazing or as part of an exposure protection strategy per NFPA 80A. Window heads produce a flat, curtain-like spray pattern.

### Attic Sprinklers

Purpose-built attic sprinkler heads are listed for installation in combustible and noncombustible attic spaces with specific roof slopes. They simplify attic protection by eliminating the need for multiple rows of standard heads and the associated obstructions analysis. Manufacturers such as Viking, Tyco/Johnson Controls, and Reliable publish specific listing data for peak, hip, and valley installations.

---

## Listing and Compatibility

All sprinkler heads installed in fire protection systems must be listed by a recognized testing laboratory -- UL (Underwriters Laboratories) or FM (FM Approvals) are the most common in North America. The listing defines every parameter of acceptable use: orientation, K-factor, temperature rating, coverage area, deflector-to-ceiling distance, obstruction rules, and the specific system types the head is approved for.

### Manufacturer Compatibility

{% callout type="warning" title="Never Mix Manufacturers" %}
NFPA 13 and the listing agencies prohibit mixing sprinkler heads from different manufacturers on the same system. Each manufacturer's deflector design produces a unique spray pattern that was tested and listed independently. Mixing brands can produce uncovered areas, excessive overlap, or spray patterns that do not meet the density required by the design. Always use the same manufacturer for all heads on a given system.
{% /callout %}

### Replacement Heads

When replacing sprinkler heads, use the identical make, model, orifice size, temperature rating, and finish. Heads that have been painted, corroded, damaged, loaded with dust or grease, or are more than 50 years old must be replaced. NFPA 25, Section 5.2.1.1.1 requires sprinkler heads to be tested or replaced at the 50-year mark, and every 10 years thereafter.

---

## Spare Head Cabinet Requirements

NFPA 13, Section 6.2.9 requires that a supply of spare sprinkler heads be maintained on the premises so that any head that has activated or become damaged can be promptly replaced. A sprinkler wrench compatible with each head type must also be provided.

| Total Heads on System | Minimum Spare Heads Required |
|---|---|
| Fewer than 300 | 6 spare heads |
| 300 to 1000 | 12 spare heads |
| More than 1000 | 24 spare heads |

Spare heads must represent each type and temperature rating installed on the system. They must be stored in a spare head cabinet mounted in a location where the temperature will not exceed the lowest rated spare head stored inside. The cabinet must include a wrench for each head type.

---

## Critical Warnings

{% callout type="warning" title="NEVER Paint Sprinkler Heads" %}
Under no circumstances should sprinkler heads be painted, even during construction or renovation. Paint on the thermal element will insulate the heat-sensitive component, delaying or preventing activation. Paint on the deflector will alter the spray pattern and reduce the effective coverage. NFPA 13 explicitly prohibits field-applied paint on sprinkler heads. Any head that has been painted must be replaced immediately. Communicate this requirement clearly to general contractors and painters on every project.
{% /callout %}

{% callout type="note" title="Deflector-to-Ceiling Distance" %}
Maintaining the correct deflector-to-ceiling distance is critical for proper spray pattern development. For standard pendent and upright heads, NFPA 13 Section 8.6.2 generally requires the deflector to be between 1 inch and 12 inches below the ceiling for pendent heads and between 1 inch and 12 inches below the ceiling for upright heads. Always check the specific listing sheet, as concealed, flush, and recessed heads have their own distance requirements.
{% /callout %}

---

## Inspection and Maintenance

NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) governs ongoing sprinkler head inspection. Key requirements include:

- **Visual inspection** -- Quarterly inspection of heads in accessible areas for loading (dust, grease, paint), corrosion, physical damage, and correct orientation.
- **50-year replacement or testing** -- Standard response heads must be tested or replaced after 50 years from manufacture date. Quick response and residential heads must be tested or replaced after 20 years.
- **Obstruction investigation** -- If any head shows signs of foreign material accumulation, an obstruction investigation per NFPA 25 Chapter 14 may be required for the entire system.

Proper sprinkler head selection, installation, and maintenance are foundational to system performance. A system is only as reliable as its weakest head.
