---
title: Water Supply Sources
nextjs:
  metadata:
    title: Water Supply Sources
    description: Understanding municipal and private water supplies for fire sprinkler systems — flow tests, supply curves, and adequacy analysis.
---

Every fire sprinkler system is only as good as the water supply feeding it. Before a single pipe is drawn, you need to know what the water supply can deliver and whether it meets the system demand. This page covers how to evaluate, document, and work with the water sources that keep sprinkler systems functional. {% .lead %}

---

## Municipal water supply

The most common water source for fire sprinkler systems is the public water distribution system. Municipal supply is generally reliable, but its capacity varies by location, time of day, and seasonal demand.

### Flow test data

A fire flow test measures the available pressure and flow from the municipal system at or near the project site. The test produces three critical numbers:

- **Static pressure** — the pressure in the system with no water flowing, measured in psi
- **Residual pressure** — the pressure measured at the test hydrant while water is flowing from a nearby hydrant
- **Flow** — the measured flow rate in gpm at the residual pressure, taken from the flowing hydrant(s)

Flow tests are conducted per NFPA 291 and typically involve two hydrants: one for pressure measurement and one (or more) for flow. The results are only valid for the conditions at the time of the test — time of year, time of day, and local demand all affect the numbers.

{% callout type="warning" title="Flow test age matters" %}
Most AHJs and insurance carriers require flow test data less than 12 months old. Some require tests during peak demand periods. Always confirm the AHJ's requirements before relying on existing test data.
{% /callout %}

### Reading a flow test report

A flow test report should include the date, time, location of the test hydrant and flow hydrant(s), static pressure, residual pressure, and pitot readings. From these values, you calculate the available flow at any given residual pressure using the relationship between pressure and flow.

{% figure src="/placeholder-diagram.svg" alt="Sample flow test report" caption="Typical fire flow test report showing static pressure, residual pressure, and flow data" /%}

---

## Supply and demand curves

The water supply curve is a graphical representation of what the municipal system can deliver. It plots pressure (psi) on the vertical axis against flow (gpm) on the horizontal axis, following the N^1.85 curve shape.

### Plotting the supply curve

You need two points to plot the supply curve:

1. **Static point** — static pressure at zero flow
2. **Residual point** — residual pressure at the measured flow

These two points define a curve (not a straight line) that represents the supply at all flow rates. The curve follows the Hazen-Williams relationship and is plotted on N^1.85 graph paper or calculated mathematically.

### Comparing supply to demand

The system demand is plotted on the same graph. The demand point represents the total flow and pressure required at the base of the riser (BOR), including:

- Sprinkler demand (from hydraulic calculations)
- Hose stream allowance (per NFPA 13 based on hazard)
- Any friction loss from the water supply to the BOR

If the demand point falls below and to the left of the supply curve, the water supply is adequate. The vertical distance between the supply curve and the demand point at the required flow represents the safety margin.

{% figure src="/placeholder-diagram.svg" alt="Supply vs demand curve comparison" caption="Water supply curve plotted against system demand — the supply curve must be above and to the right of the demand point" /%}

{% callout type="note" title="Safety margin" %}
While NFPA 13 does not mandate a specific safety margin, most engineers target at least 10 psi between the supply curve and the demand point. Some AHJs and insurance carriers have their own minimum margin requirements.
{% /callout %}

---

## Private water supplies

When municipal supply is unavailable or insufficient, private water sources supplement or replace the public system.

### Wells

Dedicated fire wells can serve as a primary or secondary supply. They require a fire pump (typically vertical turbine) and must demonstrate sustained flow capacity through extended pump tests. Well recovery rate is critical — the well must deliver the required flow for the full system duration without running dry.

### Reservoirs and ponds

Natural or constructed reservoirs can serve as gravity or suction sources. Key considerations include minimum water level (accounting for drought, siltation, and ice), intake depth and screening, and whether a pump is needed to achieve required pressure.

### Elevated tanks

Elevated storage tanks provide pressure through gravity head. Every foot of elevation above the sprinkler system provides approximately 0.433 psi. These are common in rural or campus settings where consistent pressure is needed without a pump.

### Pressure tanks

Pressure tanks use compressed air above a stored water volume to deliver flow. They are limited in capacity and typically only suitable for small systems or supplemental supply. NFPA 22 governs their construction and sizing.

---

## Fire department connections

The fire department connection (FDC) is a critical component of every sprinkler system. It allows the fire department to supplement the water supply by pumping into the system from their apparatus.

### Purpose and function

The FDC connects to the sprinkler system downstream of the alarm valve check valve. When the fire department connects hose lines and pumps water in, it boosts both pressure and flow in the system. The FDC does not replace the primary water supply — it supplements it.

### Design requirements

Per NFPA 13:

- FDCs must be located on the street side of the building, visible and accessible to responding apparatus
- The connection type and size must match local fire department equipment (typically 2-1/2" siamese or 4" storz)
- A check valve prevents backflow from the system to the FDC
- An automatic drain valve prevents freezing in the FDC piping
- Signage must identify the system served (e.g., "AUTO SPKR" or "STANDPIPE")

{% figure src="/placeholder-diagram.svg" alt="Fire department connection detail" caption="Typical FDC installation showing check valve, drain, and signage requirements" /%}

---

## Combined and shared systems

In some buildings, the fire sprinkler system shares a water supply with domestic or process water systems. These arrangements require careful attention to backflow prevention and supply adequacy.

### Backflow prevention

Any connection between a fire sprinkler system and a potable water supply requires a backflow preventer. The type required depends on local health department regulations:

- **Double check detector assembly (DCDA)** — most common for fire sprinkler connections, includes a metered bypass to detect unauthorized use
- **Reduced pressure detector assembly (RPDA)** — required in some jurisdictions, provides higher level of backflow protection with a relief valve

### Supply adequacy

When domestic and fire systems share a supply, the hydraulic analysis must account for the simultaneous domestic demand. The water supply must satisfy both fire sprinkler demand and peak domestic demand occurring at the same time.

{% callout type="warning" title="Backflow preventer pressure loss" %}
Backflow preventers introduce significant friction loss — often 8-12 psi for a DCDA and 12-15 psi or more for an RPDA. This loss must be included in the hydraulic calculations. Confirm the specific device's loss characteristics from the manufacturer's data.
{% /callout %}

---

## Evaluating supply adequacy

The final determination of water supply adequacy compares the total system demand at the base of the riser to the available supply, accounting for all losses between the water source and the system.

### Losses to account for

- Friction loss in underground piping from the water main to the building
- Elevation changes between the water main and the highest sprinkler
- Losses through backflow preventers, meters, and other devices
- Losses through the fire pump (if applicable — the pump adds pressure, not subtracts)

### When the supply is insufficient

If the available supply does not meet the system demand with adequate margin, options include:

- Adding a fire pump to boost pressure
- Installing a water storage tank to supplement flow
- Requesting the water utility upgrade the main (long lead time)
- Redesigning the sprinkler system to reduce demand (different head type, looped mains, larger pipe)
- Negotiating with the AHJ for alternative approaches

The most cost-effective solution depends on whether the deficiency is primarily pressure, flow, or both.
