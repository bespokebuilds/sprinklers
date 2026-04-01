---
title: Standpipe Systems
nextjs:
  metadata:
    title: Standpipe Systems
    description: Comprehensive guide to standpipe system design per NFPA 14, including system classes, types, hydraulic requirements, hose connections, and integration with sprinkler systems.
---

Standpipe systems provide a means for the fire department (and sometimes building occupants) to connect hoses and fight fires on upper floors or in large-area buildings where running hose from an engine is impractical. Standpipe design is governed by **NFPA 14: Standard for the Installation of Standpipe and Hose Systems**.

---

## Standpipe Classes

NFPA 14 defines three classes of standpipe, each serving a different purpose.

### Class I -- Fire Department Use

Class I standpipes provide **2-1/2 inch hose connections** for fire department use only. Building occupants are not expected to use these connections.

**Where required:**
- Buildings with floors more than **30 feet** above or below fire department access
- Buildings with three or more stories
- Covered mall buildings
- Stages over 1,000 sq ft

**Hose connection requirements:**
- 2-1/2 inch hose valve with **National Standard Thread (NST)** or as required by the local fire department
- Located in every required stairwell at each floor landing
- Connection height between **3 and 5 feet** above the floor (measured to the center of the connection)
- Additional connections at horizontal standpipe outlets in malls, loading docks, and similar areas

### Class II -- Occupant Use

Class II standpipes provide **1-1/2 inch hose stations** for use by building occupants who are trained in their use.

**Where typically found:**
- Older buildings (fewer new installations due to liability concerns)
- Some industrial facilities where trained employees may respond
- Stages and performance spaces

**Hose station components:**
- 1-1/2 inch angle hose valve
- Hose rack or reel with a maximum of 100 feet of hose
- Adjustable fog nozzle rated at 100 gpm

### Class III -- Combined

Class III standpipes provide **both** 2-1/2 inch fire department connections and 1-1/2 inch hose stations at each floor.

**Important note:** In fully sprinklered buildings, NFPA 14 allows Class I standpipes in lieu of Class III. Since most modern buildings are fully sprinklered, Class I is the most commonly installed standpipe class today.

---

## Standpipe Types

### Automatic Wet

- Piping is **filled with water** under pressure at all times
- Connected to a water supply capable of meeting the full standpipe demand **automatically**
- No manual action required to supply water
- **Most common type in new construction**

### Automatic Dry

- Piping is filled with **air or nitrogen** under pressure
- A dry pipe valve or other automatic device admits water when a hose valve is opened
- Used in areas subject to freezing where a wet standpipe would freeze
- Must deliver water within **60 seconds** of opening a hose valve

### Semi-Automatic Dry

- Piping is dry but connected to a water supply
- Requires **activation of a remote control device** (typically at the hose connection) to start the pump or open a valve
- Water delivery within 60 seconds of activation
- Common in parking garages and buildings where maintaining water in the standpipe is impractical

### Manual Wet and Manual Dry

- Piping may be wet or dry, but the water supply is the **fire department only** (through the FDC)
- No permanent water supply connection
- Limited to buildings where the AHJ allows manual systems
- Not permitted in high-rise buildings

---

## Hydraulic Requirements

### Flow and Pressure

The hydraulic design must provide the following at the most remote hose connection:

**Class I and Class III:**

| Condition | Flow per Connection | Residual Pressure |
|-----------|-------------------|-------------------|
| Most remote standpipe, first connection | 250 gpm | 100 psi |
| Most remote standpipe, second connection | 250 gpm (additional) | 100 psi |
| Each additional standpipe | 250 gpm each | 100 psi |
| Maximum total demand | 1,000 gpm (sprinklered) / 1,250 gpm (unsprinklered) | -- |

**Class II:**
- 100 gpm at 65 psi at the most remote hose connection
- Only one hose stream required

**Class III:**
- Design to the most demanding of Class I or Class II requirements (Class I governs)

### Pressure Limitations

- Maximum pressure at any hose connection: **175 psi**
- If static pressure exceeds 175 psi at a hose connection, a **pressure-reducing valve** (PRV) is required
- PRVs must be field-adjustable and testable
- PRVs add maintenance complexity and are a potential failure point -- consider zone design to avoid them when possible

### Sprinklered vs. Unsprinklered Buildings

Fully sprinklered buildings receive a significant reduction in standpipe demand:

- Maximum total standpipe flow: **1,000 gpm** (vs. 1,250 gpm unsprinklered)
- Additional standpipes beyond the first: **250 gpm each** up to the 1,000 gpm maximum
- The sprinkler system and standpipe demands are **not additive** for combined systems -- the higher of the two governs

---

## Combined Sprinkler/Standpipe Systems

In most modern buildings, the standpipe risers also serve as the supply risers for the sprinkler system. This is a **combined system**.

### Design Approach

1. Calculate the sprinkler system demand (most remote area, hose stream, etc.)
2. Calculate the standpipe demand (per NFPA 14)
3. The system demand is the **greater** of the two -- not the sum
4. Size risers and mains to meet the governing demand
5. The water supply must satisfy the governing demand

### Riser Sizing

Combined risers must be sized for the governing demand:

| Riser Size | Typical Application |
|-----------|-------------------|
| 4" | Minimum for Class I/III standpipe (low-rise, low demand) |
| 6" | Most common for combined systems in mid-rise buildings |
| 8" | High-rise buildings, high-demand systems |

**Minimum riser size per NFPA 14:**
- Class I and III: **4 inches** minimum (but hydraulic calculations usually require 6 inches or larger)
- Class II: **2 inches** minimum

### Floor Control Assemblies

Each floor connection in a combined system typically includes a **floor control valve assembly**:

- OS&Y gate valve or listed butterfly valve (supervised)
- Check valve
- Flow switch (for alarm)
- Drain valve
- Test connection
- Pressure gauge
- Tamper switch on the control valve

This assembly allows individual floors to be shut down for maintenance without affecting the entire building.

---

## Fire Department Connections (FDC)

The FDC allows the fire department to supplement the building's water supply by pumping water into the standpipe/sprinkler system from their apparatus.

### FDC Requirements

- One FDC for each standpipe zone
- Located on the **street side** of the building, visible and accessible to the fire department
- Within **100 feet** of a fire hydrant (preferred; AHJ may vary)
- 2-1/2 inch inlets with NST connections (number and configuration per local fire department preference -- typically two or three 2-1/2 inch inlets or one large-diameter Storz connection)
- Check valve to prevent backflow from the system
- Automatic drain between the check valve and the FDC inlets
- Clearly marked with **signage** indicating the system served (e.g., "AUTO SPRINKLER AND STANDPIPE")

### FDC Sizing

- The FDC piping must be sized to deliver the required system demand
- FDC pipe size is typically **4 inches minimum** for sprinkler systems and **6 inches** for standpipe and combined systems
- Multiple FDC connections may be required for large or multi-zone systems

---

## Standpipe Zoning in High-Rise Buildings

### Pressure Zones

Very tall buildings may exceed the pressure capability of a single system. When the pressure at the lowest hose connection would exceed 175 psi with the system flowing, the building must be divided into **pressure zones**.

**Typical zoning approach:**
- Zone 1: Floors 1 through approximately 20 (depending on floor-to-floor height)
- Zone 2: Floors 21 through approximately 40
- Each zone has its own fire pump, FDC, and control valves

### Zone Pumps

- Each zone requires a fire pump capable of meeting the zone demand
- Upper-zone pumps may take suction from a lower-zone riser (series arrangement) or from a dedicated supply (parallel arrangement)
- Parallel arrangement is preferred for redundancy but requires more piping
- Each zone pump requires its own controller, sensing lines, and test header

---

## Testing Requirements

### Acceptance Testing

- Hydrostatic test at **200 psi** for 2 hours (or 50 psi above system working pressure, whichever is greater)
- All hose valves and connections verified for proper operation
- Flow test to verify design pressures at the most remote connection
- FDC tested for proper check valve operation

### Periodic Testing (NFPA 25)

- **Quarterly**: Main drain test, visual inspection of hose connections and FDC
- **Annually**: Flow test at the most remote hose connection
- **5 years**: Full flow test of the system
- PRV testing and recertification per manufacturer recommendations (typically every 5 years)

---

## Common Design Mistakes

1. **Undersized risers** -- Hydraulic calculations often reveal that 4-inch risers are too small for Class I service in buildings over 4-5 stories.

2. **Missing PRVs** -- In buildings over approximately 12 stories, the static pressure at the lowest hose connections exceeds 175 psi without pressure-reducing valves.

3. **Insufficient FDC capacity** -- The FDC piping must be sized to deliver the full standpipe demand, not just the sprinkler demand.

4. **Hose connection height** -- Connections must be between 3 and 5 feet above the floor, measured to the center. Too high or too low is a common installation error.

5. **Missing hose connections at required locations** -- Every required stairwell at every floor must have a connection. Horizontal standpipes in malls and large buildings need connections at required intervals (typically every 200 feet of travel distance).

6. **Not coordinating with the fire department** -- Local fire departments may have preferences for FDC location, connection type (NST vs. Storz), and pressure requirements that differ from NFPA 14 minimums.
