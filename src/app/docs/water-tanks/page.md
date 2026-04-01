---
title: Water Storage Tanks
nextjs:
  metadata:
    title: Water Storage Tanks
    description: Guide to fire protection water storage tanks per NFPA 22, including tank types, sizing, installation, and maintenance requirements.
---

When the municipal water supply cannot meet fire protection demands -- either in flow, pressure, duration, or reliability -- water storage tanks provide a dedicated, on-site water reserve. Tank design and installation are governed by **NFPA 22: Standard for Water Tanks for Private Fire Protection**.

---

## Tank Types

### Ground-Level Steel Tanks

The most common type for fire protection storage. These are flat-bottom, cylindrical steel tanks sitting at grade level.

**Characteristics:**
- Capacities from 10,000 to several million gallons
- Steel shell with corrosion protection (interior lining, cathodic protection)
- Typically require a **fire pump** because the tank provides storage but not pressure
- Foundation design per geotechnical requirements
- Heated or insulated in cold climates to prevent freezing

### Elevated Steel Tanks (Standpipe Tanks)

Elevated tanks provide both storage and pressure head through gravity.

**Characteristics:**
- Tank mounted on a steel tower at sufficient height to deliver the required pressure
- Eliminates or reduces the need for a fire pump
- Each foot of elevation provides 0.433 psi of pressure
- Higher first cost than ground-level tanks
- Common in rural or campus settings where pumps are less practical

### Pressure Tanks

Sealed tanks containing both water and compressed air. The air pressure forces water out of the tank when a sprinkler activates.

**Characteristics:**
- Typically small (up to a few thousand gallons)
- Used for small systems where a dedicated water supply is needed but a pump is not practical
- The tank must be sized to deliver the required flow for the required duration while maintaining adequate pressure
- Less common in modern construction

### Concrete Tanks

Reinforced concrete tanks used for large-volume storage:

- Typically ground-level or partially below grade
- Excellent longevity
- Can serve dual purposes (fire protection + domestic/process water)
- Common in large industrial and municipal installations

### Suction Tanks (Underground)

Below-grade tanks used as a suction supply for vertical turbine fire pumps:

- Fiberglass, concrete, or steel construction
- Require vertical turbine pumps (cannot use horizontal split-case)
- Reduce visual impact
- Must include venting, access hatches, and level monitoring

---

## Tank Sizing

### Determining Required Storage Volume

The required tank volume depends on:

1. **System demand flow rate** (sprinkler demand + hose stream allowance)
2. **Required duration** (from NFPA 13 or insurance requirements)
3. **Any other fire protection demands** served by the same tank (standpipe, foam system, etc.)

**Basic formula:**

**Volume (gallons) = Flow (gpm) x Duration (minutes)**

### Duration Requirements

| Occupancy / System | NFPA 13 Duration | FM Global Duration |
|--------------------|-----------------|-------------------|
| Light Hazard | 30 minutes | 60 minutes |
| Ordinary Hazard Group 1 | 60 minutes | 60-90 minutes |
| Ordinary Hazard Group 2 | 60-90 minutes | 90-120 minutes |
| Extra Hazard | 90-120 minutes | 120 minutes |
| High-piled storage | 60-120 minutes | 120 minutes |

**Example:** A warehouse sprinkler system requires 800 gpm (sprinkler) + 250 gpm (hose stream) = 1,050 gpm for 90 minutes.

Tank volume needed: 1,050 x 90 = **94,500 gallons** (minimum usable volume)

### Dead Storage

Not all water in the tank is usable. The tank must account for:

- **Dead storage** -- water below the suction connection that cannot be pumped
- **Freeboard** -- space above the maximum water level for thermal expansion
- The total tank volume must exceed the calculated fire demand by the dead storage and freeboard amounts

---

## Tank Components

### Inlet and Outlet Piping

- **Fill connection** -- allows the tank to be filled from the water supply
- **Suction connection** -- delivers water to the fire pump or gravity-fed system
- Anti-vortex plate on the suction connection to prevent air entrainment
- Overflow pipe sized to handle the maximum fill rate

### Heating Systems

In cold climates, tanks must be heated to prevent freezing:

- **Immersion heaters** -- electric or steam-heated elements inside the tank
- **Circulation heaters** -- water circulated through an external heater
- Thermostatic control to maintain water above 40 degrees F
- Tank insulation reduces heating energy requirements
- Heating system failure monitoring with supervisory signals

### Level Monitoring

- **High-level alarm** -- tank is full or overfilling (supervisory signal)
- **Low-level alarm** -- water level has dropped below the required minimum (supervisory signal)
- **Refill control** -- automatic fill valve opens when level drops below setpoint
- Level signals transmitted to the fire alarm panel and/or central station

### Venting

- All tanks require venting to allow air to enter and exit as water level changes
- Vent screens to prevent contamination and animal entry
- Heated vents in cold climates to prevent ice blockage

---

## Fire Pump Integration

Ground-level tanks almost always require fire pumps:

### Vertical Turbine Pumps

- Pump bowls submerged in the tank
- Most common configuration for ground-level and below-grade tanks
- Can handle suction lift conditions
- Require a pump can or barrel extending into the tank

### Horizontal Split-Case Pumps

- Require positive suction head (tank water level must be above the pump)
- Used when the tank is elevated or when the pump is located below the tank water level
- Simpler piping than vertical turbine installations

### Suction Piping

- Suction pipe must be sized per NFPA 20 to prevent cavitation
- **Eccentric reducers** (flat on top) required on horizontal suction piping to prevent air pockets
- Anti-vortex plate at the tank suction connection
- Minimum submergence above the suction inlet per NFPA 22

---

## Inspection, Testing, and Maintenance

### NFPA 25 Requirements

| Frequency | Activity |
|-----------|----------|
| Weekly | Check water level and temperature (cold weather) |
| Monthly | Inspect exterior for damage, leaks, corrosion |
| Quarterly | Exercise valves, verify heating system (seasonal) |
| Annually | Interior inspection (underwater video or dive inspection for large tanks), check structural integrity |
| 5 years | Full interior inspection including cleaning, coating evaluation, structural assessment |

### Common Maintenance Issues

1. **Corrosion** -- interior steel corrosion reduces wall thickness and contaminates water. Interior coatings must be maintained.
2. **Sediment buildup** -- debris accumulates at the bottom of the tank and can obstruct the suction connection.
3. **Heating system failure** -- ice formation can damage the tank and block piping.
4. **Level control failure** -- if the fill valve fails closed, the tank may not refill after a fire or after testing.
5. **Biological growth** -- stagnant water can develop algae and bacteria. Some jurisdictions require water treatment.

---

## Design Considerations

### Site Selection

- Locate tanks to minimize suction pipe length to the fire pump
- Consider access for fill trucks (if not connected to a municipal supply)
- Foundation design per geotechnical conditions (settlement, bearing capacity)
- Setbacks from buildings per fire code and zoning
- Consider visual impact -- screening or architectural treatment may be required

### Seismic Requirements

In seismic zones, tanks must be designed for earthquake loads:

- Sloshing loads (water movement during an earthquake) -- freeboard must accommodate wave height
- Base shear and overturning forces
- Flexible connections between the tank and piping
- NFPA 22 references ASCE 7 for seismic design parameters

### Dual-Purpose Tanks

Some facilities use tanks for both fire protection and domestic/process water:

- The fire protection reserve must be **dedicated** and not available for other uses
- A dedicated fire suction connection at the correct elevation ensures the fire reserve is always available
- Tank refill rate must restore fire protection capacity within the required time after a fire event
