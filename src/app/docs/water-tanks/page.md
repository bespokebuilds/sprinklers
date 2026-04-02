---
title: Water Storage Tanks
nextjs:
  metadata:
    title: Water Storage Tanks
    description: Fire protection water storage tank sizing, NFPA 22 requirements, and maintenance intervals.
---

Tank sizing calculations, NFPA 22 construction requirements, inspection schedules, and freeze protection for fire protection water storage. {% .lead %}

## Tank sizing

Tank volume = (sprinkler demand + hose stream allowance) x duration. The table below shows pre-calculated minimum volumes for common hazard classifications per NFPA 13.

| Hazard Classification | Sprinkler + Hose (gpm) | Duration (min) | Minimum Volume (gal) |
|---|---|---|---|
| Light Hazard | 250 | 30 | 7,500 |
| Ordinary Hazard Group 1 | 500 | 60 | 30,000 |
| Ordinary Hazard Group 2 | 600 | 60 | 36,000 |
| Extra Hazard Group 1 | 1,000 | 90 | 90,000 |
| Extra Hazard Group 2 | 1,250 | 90 | 112,500 |
| High-Piled Storage (typical) | 1,500 | 120 | 180,000 |

{% callout %}
These are minimum planning values. Actual demand depends on hydraulic calculations, building area, and the specific commodities stored. Always verify against NFPA 13 and the applicable storage standard (NFPA 30, 32, etc.).
{% /callout %}

### Volume formula

**V = Q x t**

Where:
- **V** = required tank volume (gallons)
- **Q** = total demand — sprinkler flow + hose stream allowance (gpm)
- **t** = required duration (minutes)

Add volume for dead storage (water below the suction outlet), evaporation, and fire department connection (FDC) if the tank also serves as the FDC supply.

## Elevated tank pressure

Elevated tanks provide pressure by gravity. Pressure at the base of the riser = **0.433 psi per foot** of elevation from the tank water surface to the discharge point.

| Water Level Above Discharge (ft) | Available Pressure (psi) |
|---|---|
| 20 | 8.7 |
| 40 | 17.3 |
| 60 | 26.0 |
| 80 | 34.6 |
| 100 | 43.3 |
| 120 | 52.0 |
| 150 | 65.0 |
| 200 | 86.6 |

{% callout type="warning" %}
Use the **low water level** (not the overflow level) for pressure calculations. As the tank drains during a fire event, available pressure decreases. Design to the worst case — tank nearly empty at the end of the required duration.
{% /callout %}

### Pressure calculation example

**Given:** Elevated tank with low water level at 95 ft above the highest sprinkler. Friction loss in the riser and underground piping = 8 psi.

- Gravity pressure = 95 x 0.433 = **41.1 psi**
- Available at sprinkler = 41.1 - 8.0 = **33.1 psi**

## NFPA 22 key requirements

| Requirement | NFPA 22 Summary |
|---|---|
| Materials | Steel (welded or bolted), fiberglass, concrete, or wood — all per listed standards |
| Foundation | Engineered foundation per ACI or structural engineer; must support full water load |
| Venting | Screened free vent to prevent vacuum/pressure buildup during fill/drain |
| Overflow | Discharge to grade, sized for maximum fill rate, screened against debris |
| Access | Interior access hatch (min 24" x 24") for inspection and maintenance |
| Anti-vortex plate | Required at suction outlet to prevent air entrainment |
| Level indicator | Required; visible at grade or with remote readout |
| Seismic restraint | Required in seismic zones per ASCE 7; anchorage, flexible connections, freeboard |
| Ladder / safety climb | Required for tanks exceeding 20 ft; per OSHA fall protection standards |

{% callout %}
NFPA 22 Section 9.3 requires that the tank suction pipe be arranged so that the full required water volume is available. Dead storage below the suction outlet does not count toward the required volume.
{% /callout %}

## Inspection and maintenance (NFPA 25)

| Activity | Frequency | Key Items |
|---|---|---|
| Visual inspection (exterior) | Weekly | Water level, enclosure condition, heating system, valve positions |
| Visual inspection (exterior detail) | Quarterly | Supports, foundation, coatings, cathodic protection |
| Interior inspection | Every 5 years | Sediment, corrosion, coating condition, structural integrity |
| Interior cleaning | As needed (per 5-year inspection) | Remove sediment, biological growth, and debris |
| Coating / painting | Per inspection findings | Recoat when deterioration reaches 20-25% of surface area |
| Seismic inspection | Annually | Anchor bolts, flexible couplings, freeboard |
| Alarm / supervisory devices | Quarterly | Low water level, high/low temperature, tamper switches |

{% callout type="warning" %}
The 5-year interior inspection is critical and frequently deferred. Sediment buildup can block the suction outlet and reduce effective volume. Interior corrosion can compromise structural integrity, especially at the waterline.
{% /callout %}

## Freeze protection

Water storage tanks in cold climates require active freeze protection per NFPA 22 Chapter 10.

### Requirements

- Maintain water temperature at **minimum 40 degF** at all times
- Tank enclosure or insulation required in climates where exterior temperature drops below 40 degF
- **Heater failure alarm** connected to the fire alarm or building management system

### Heater sizing guidance

Heater capacity depends on tank volume, surface area, insulation R-value, and minimum design temperature. General planning values:

| Tank Volume (gal) | Typical Heater Capacity (kW) | Notes |
|---|---|---|
| 5,000-10,000 | 5-15 | Depends on insulation and climate |
| 10,000-30,000 | 15-30 | |
| 30,000-100,000 | 30-75 | Consider redundant heaters |
| 100,000+ | 75-150+ | Multiple heaters required |

{% callout %}
Circulation pumps are recommended with immersion heaters to prevent localized hot spots and ensure uniform temperature throughout the tank. Thermostat should be set to 42-45 degF to allow margin above the 40 degF minimum.
{% /callout %}

### Heat loss estimate

**Q = U x A x dT**

Where:
- **Q** = heat loss (BTU/hr)
- **U** = overall heat transfer coefficient (BTU/hr-ft2-degF)
- **A** = tank surface area (ft2)
- **dT** = temperature difference between tank water and outside air (degF)

Convert BTU/hr to kW: divide by 3,412.

## Sensing lines

Sensing lines (also called pressure sensing lines or signal lines) connect the water storage tank to the fire pump controller, allowing the controller to monitor system pressure and start the pump automatically when pressure drops.

### Purpose

When a fire pump takes suction from a storage tank (rather than a pressurized municipal main), the controller's pressure switch must sense the pressure at the pump discharge — not the tank itself. However, for systems with elevated tanks providing gravity pressure, the sensing line allows the controller to monitor the static head from the tank and detect a drop when sprinklers open.

### Installation requirements

| Parameter | Requirement |
|---|---|
| Pipe size | 1/2" minimum (3/4" preferred for longer runs) |
| Material | Copper, brass, or stainless steel — corrosion-resistant |
| Connection point | Tapped into the system side of the check valve, downstream of the pump discharge |
| Routing | Slope continuously toward the connection point to prevent air pockets |
| Valves | No shutoff valves permitted in the sensing line — must be open at all times |
| Protection | Heat trace and insulate in cold climates to prevent freezing |
| Length | Keep as short as practical — long runs introduce pressure lag |

### Sensing line for elevated tanks

For elevated tanks providing gravity pressure, the sensing line connects the tank's discharge piping to the fire pump controller pressure switch. When sprinklers open and flow begins, the pressure drop in the sensing line triggers the pump to start.

| Configuration | Sensing Line Connection |
|---|---|
| Elevated tank (gravity, no pump) | Sensing line from tank discharge to pressure switch at alarm panel |
| Elevated tank with booster pump | Sensing line from pump discharge side to pump controller |
| Ground-level suction tank | Sensing line from pump discharge to pump controller |
| Pressure tank | Sensing line from tank discharge to pressure switch |

### Common sensing line problems

| Issue | Cause | Resolution |
|---|---|---|
| Pump won't start | Air trapped in sensing line | Bleed air from high points; verify continuous slope |
| Pump starts erratically | Sensing line partially frozen | Heat trace and insulate the full length |
| False starts | Pressure fluctuations from domestic usage | Verify sensing line is on the fire protection side only |
| Delayed pump start | Sensing line too long or too small | Shorten run or increase to 3/4" pipe |
| Pump runs continuously | Sensing line leak or disconnected | Pressure test the sensing line; inspect all fittings |

{% callout type="warning" %}
A blocked or frozen sensing line will prevent the fire pump from starting automatically. In cold climates, heat tracing on sensing lines is not optional — it is as critical as heat tracing on the main piping. Include sensing lines on the ITM inspection checklist.
{% /callout %}

### NFPA 20 reference

NFPA 20 Section 4.18 covers pressure sensing line requirements. Key points:

- Sensing lines must not include any valve that could isolate the pressure switch
- The connection must be on the system side (downstream of the pump check valve)
- For jockey pump controllers, a separate sensing line is recommended to prevent interaction between the jockey and main pump pressure switches

{% figure src="/placeholder-diagram.svg" alt="Sensing line routing from elevated tank through check valve to fire pump controller" caption="Sensing line routing — connects system pressure to the fire pump controller pressure switch for automatic pump start on pressure drop" /%}

---

## Tank types comparison

| Feature | Ground-Level Steel | Elevated Steel | Concrete | Fiberglass |
|---|---|---|---|---|
| Volume range | 5,000-2,000,000+ gal | 5,000-500,000 gal | 10,000-5,000,000+ gal | 5,000-250,000 gal |
| Pressure delivery | Requires pump | Gravity | Requires pump (usually) | Requires pump |
| Corrosion protection | Coatings, cathodic | Coatings, cathodic | Inherently resistant | Inherently resistant |
| Seismic performance | Anchored per AWWA D100 | Requires bracing | Good inherent mass | Lightweight, needs anchoring |
| Typical lifespan | 30-50 years (with maintenance) | 30-50 years | 50+ years | 25-40 years |
| Relative cost | Moderate | High | High (large sizes) | Moderate |
