---
title: Design Workflow
nextjs:
  metadata:
    title: Design Workflow
    description: The sprinkler system design process from gathering information through plan submission — layout methodology, CAD/BIM workflows, and common pitfalls.
---

Sprinkler system design is the process of translating a building's fire protection requirements into a set of plans and calculations that can be fabricated and installed. This page walks through the design workflow from receiving the project to submitting for plan review. {% .lead %}

---

## Gathering project information

Before touching CAD, a designer needs to assemble the project information that drives every design decision.

### Architectural and structural plans

- Floor plans with room uses, dimensions, ceiling heights, and ceiling types
- Reflected ceiling plans (RCPs) showing ceiling grid, soffits, and ceiling-mounted items
- Building sections showing floor-to-floor heights, roof construction, and attic spaces
- Structural framing plans showing beam locations, joists, deck type, and loads

### MEP plans

- Mechanical: duct layouts, equipment locations, shaft sizes
- Electrical: lighting layouts, panel locations, conduit runs
- Plumbing: domestic water entry, drain locations, gas piping

### Division 21 specifications

The project specifications (Division 21 — Fire Suppression) define:
- Which NFPA edition the AHJ has adopted
- Pipe materials allowed
- Head types and manufacturers
- Hydraulic calculation requirements
- Special requirements (FM Global, insurance carrier)
- Seismic requirements and SDC

### Water supply data

- Flow test report (static, residual, flow) — must be current (typically less than 12 months old)
- Location of the water main and point of connection
- Any known supply limitations or planned upgrades

{% callout type="note" title="Read the specs before you draw" %}
The specifications are the contract document. They override standard practice. A designer who skips reading the specs will inevitably produce plans that do not comply with the project requirements.
{% /callout %}

---

## Determining system requirements

### Hazard classification

Walk through every space on the plans and classify it per NFPA 13 Chapter 4. Common questions:
- What are the room uses? (office, storage, manufacturing, parking)
- What will be stored and how high?
- Are there any special hazards? (cooking, flammable liquids, high-piled storage)

### Code research

- Which NFPA 13 edition applies? (confirm with AHJ)
- Are there local amendments or additional requirements?
- Does the project require FM Global compliance?
- Does the building code require residential heads in dwelling units?

### Water supply analysis

Plot the supply curve from the flow test data and compare it to an initial estimate of system demand. This early analysis tells you whether:
- Municipal supply is adequate
- A fire pump will be needed
- Tank storage is required
- The design density/area selection needs to be optimized for the available supply

{% figure src="/placeholder-diagram.svg" alt="Design workflow overview" caption="Design workflow from project receipt through information gathering, code research, layout, calculations, and submission" /%}

---

## System layout

### Layout methodology

A typical sprinkler layout follows this sequence:

1. **Risers and main drains** — locate the riser(s) based on the building entry point and the water supply connection
2. **Feed mains** — route the main feed from the riser toward the areas served
3. **Cross mains** — run perpendicular to the branch lines, connecting the feed main to the branch line takeoffs
4. **Branch lines** — run parallel to each other, carrying water to the sprinkler heads
5. **Sprinkler heads** — place at the required spacing and coverage per NFPA 13

### System configurations

- **Tree system** — the most common layout. Water flows from the riser through progressively smaller pipe to the heads. Simple and economical.
- **Loop system** — feed mains form a loop around the building or floor. Provides redundant flow paths and often reduces pipe sizes for the same demand.
- **Grid system** — branch lines are connected at both ends to cross mains. Most hydraulically efficient but more complex and expensive to fabricate.

### Head placement rules

Per NFPA 13:
- Maximum coverage per head: 225 sq ft (Light Hazard), 130 sq ft (Ordinary Hazard), varies for Extra Hazard and storage
- Maximum distance between heads: 15 ft (Light Hazard standard spray), varies by head type and hazard
- Maximum distance from walls: typically half the maximum head-to-head spacing
- Minimum distance from walls: 4 inches
- Deflector-to-ceiling distance: 1-12 inches for pendent, 1-12 inches below ceiling for upright (varies by head type)

{% callout type="warning" title="Head placement is not just spacing" %}
Proper head placement also considers obstructions, beam pockets, ceiling slope, and proximity to walls. Spacing tables are necessary but not sufficient — always check the obstruction rules for every head location.
{% /callout %}

---

## CAD and BIM workflow

### Common design software

- **AutoCAD** — still the most widely used platform for 2D sprinkler design
- **Revit** — BIM platform, increasingly required for coordination on large projects
- **AutoSPRINK** — purpose-built sprinkler design software that integrates layout with hydraulic calculations
- **SprinkCAD** — another integrated sprinkler design platform
- **HydraCALC** — standalone hydraulic calculation software

### Level of development (LOD)

On BIM projects, the required level of development defines how detailed the sprinkler model must be:
- **LOD 200** — schematic layout, approximate locations
- **LOD 300** — design-level, accurate sizes and locations for coordination
- **LOD 350** — coordination-ready, includes hangers, braces, and clearances
- **LOD 400** — fabrication-level, exact dimensions for shop drawing production

### Integration with hydraulic calculations

The most efficient workflow feeds the layout directly into the hydraulic calculation software. AutoSPRINK and SprinkCAD do this natively — the drawn layout becomes the calculation model. When using standalone CAD with separate calc software, the designer must manually transfer pipe sizes, lengths, fittings, and elevations, which introduces transcription errors.

{% figure src="/placeholder-diagram.svg" alt="Typical floor plan sprinkler layout" caption="Example sprinkler layout showing riser, feed main, cross mains, branch lines, and head placement on a commercial floor plan" /%}

---

## Hydraulic calculation integration

Once the layout is complete, the hydraulic calculation verifies that the water supply meets the system demand. The design process is iterative:

1. Lay out the system with initial pipe sizes
2. Run the hydraulic calculation
3. If demand exceeds supply: increase pipe sizes, change layout configuration, or adjust the design density/area point
4. Re-run until the supply exceeds demand with adequate margin
5. Check that the pipe sizes have not become unnecessarily large (over-designed systems waste material and labor)

---

## Submitting for plan review

### Submittal package

NFPA 13 Chapter 29 defines the minimum contents of a plan submittal:

- **Plans** — floor plans showing all piping, heads, hangers, braces, valves, and devices with sizes and dimensions
- **Hydraulic calculations** — complete node-by-node calculation with summary sheet
- **Water supply data** — flow test report with date, location, and results
- **Cut sheets** — manufacturer data sheets for sprinkler heads, valves, and listed components
- **Material list** — pipe types, fitting types, hanger types
- **Seismic calculations** — if applicable
- **System description** — narrative or data sheet with hazard classification, design criteria, system type

### Common reasons for plan rejection

- Incomplete submittal (missing cut sheets, calcs, or water supply data)
- Incorrect hazard classification
- Head spacing violations
- Obstruction rule violations
- Insufficient water supply margin
- Using wrong edition of the code
- Missing seismic bracing details in seismic zones

{% callout type="note" title="A clean first submittal saves weeks" %}
A complete, well-organized first submittal that addresses every NFPA 13 Chapter 29 requirement can cut the review cycle from months to weeks. Incomplete submittals get sent back before the reviewer even looks at the design.
{% /callout %}
