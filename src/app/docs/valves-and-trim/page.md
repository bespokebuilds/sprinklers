---
title: Valves and Trim
nextjs:
  metadata:
    title: Valves and Trim
    description: Guide to fire sprinkler system valves, trim components, riser assemblies, drains, test connections, and FDC requirements.
---

Valves and trim are the control, monitoring, and testing components that make a sprinkler system functional, testable, and maintainable. A system without proper trim is like a car without gauges -- it might work, but you cannot verify its condition or isolate problems.

---

## Control Valves

Control valves start and stop the flow of water to portions of the sprinkler system. Every control valve must be **supervised** (monitored for position) because a closed valve is the leading cause of sprinkler system failure.

### OS&Y Gate Valves (Outside Screw and Yoke)

The standard control valve for fire sprinkler systems. The valve stem extends outside the valve body, making valve position **visually verifiable** -- if the stem is extended, the valve is open.

**Where used:**
- At the base of every sprinkler riser
- At floor control assemblies in multi-story buildings
- At sectional valves that isolate portions of the system
- Anywhere the AHJ or NFPA 13 requires a supervised control valve

**Key requirements:**
- Must be **listed** for fire protection service
- Must be **electrically supervised** (tamper switch connected to fire alarm)
- Must be **accessible** for operation and maintenance
- Must be **identified** with signage indicating which system or zone is controlled

### Butterfly Valves

Listed butterfly valves are an alternative to OS&Y gate valves for fire protection:

- More compact than gate valves (especially in larger sizes)
- Available with integral supervisory switches
- Position indicated by the handle or gear position
- Commonly used in sizes 3 inches and larger
- Must be **listed for fire service** (not all butterfly valves are)

### Ball Valves

Used in smaller pipe sizes (typically 2 inches and under):
- Quarter-turn operation
- Commonly used for drain valves and inspector's test valves
- Must be listed for fire service when used as control valves

---

## Riser Assemblies

The riser assembly is the heart of each sprinkler system or zone. It contains the control, alarm, and testing components that govern system operation.

### Wet System Riser Components

A typical wet system riser includes (from bottom to top):

1. **Main control valve** (OS&Y gate valve) -- isolates the entire system
2. **Alarm check valve** -- allows water flow in one direction, activates alarm devices when water flows
3. **System pressure gauge** (above the alarm check valve)
4. **Supply pressure gauge** (below the alarm check valve)
5. **Alarm test valve** -- allows testing of the water motor gong and electric alarm without flowing water through the system
6. **Retard chamber** -- delays alarm activation to prevent false alarms from pressure surges (30-90 seconds)
7. **Water motor gong connection** -- pipe to the exterior alarm bell
8. **Electric alarm pressure switch** -- sends alarm signal to the fire alarm panel
9. **Main drain valve and connection** -- allows draining the system for maintenance
10. **Inspector's test connection** -- simulates a single sprinkler activation to test waterflow alarm

### Dry System Riser Components

Dry system risers include everything above plus:

1. **Dry pipe valve** -- holds back water using air pressure differential
2. **Air pressure gauge** -- monitors air pressure in the system piping
3. **Accelerator or exhauster** -- speeds up valve trip for systems over 500 gallons
4. **Air supply connection** -- connection for the air compressor or nitrogen
5. **Priming chamber** -- small volume of water above the dry pipe valve clapper
6. **Quick-opening device** (if required by system volume)
7. **Low air pressure alarm** -- supervisory signal when air pressure drops below setpoint

### Preaction System Riser Components

Preaction risers add:

1. **Preaction valve** -- solenoid or pneumatically operated valve
2. **Detection system release panel** -- controls the preaction valve based on fire detection input
3. **Manual release** -- allows manual opening of the preaction valve
4. **Air supervisory switch** -- monitors system piping air pressure for leak detection

---

## Drain Connections

### Main Drain

Every sprinkler system requires a main drain:

- Located on the system side of the riser control valve
- Minimum size: **2 inches** for risers 4 inches and smaller; otherwise sized per the riser
- Must discharge to a visible drain point (outside the building or to a floor drain) where the flow can be observed
- Used for:
  - Draining the system for maintenance
  - Performing quarterly main drain tests (NFPA 25)
  - Verifying the control valve is open and the water supply is available

### Auxiliary Drains (Low-Point Drains)

Required at every low point in dry and preaction systems where water (condensation) can accumulate:

- **Small auxiliary drains** (less than 5 gallons): valve and nipple arrangement
- **Large auxiliary drains** (5 gallons or more): drum drip or larger drain arrangement
- Must be operated:
  - Before freezing weather
  - After each system operation
  - Periodically during cold weather (frequency depends on condensation levels)

### Inspector's Test Connection

The inspector's test simulates the activation of a single sprinkler:

- Located at the **hydraulically most remote point** of the system
- Must include an **orifice matching the smallest sprinkler orifice** on the system (typically K-5.6, which is a 1/2-inch orifice)
- When opened, water flows through the orifice, activating the waterflow alarm
- Discharges to a **visible, accessible drain point** (outside the building or to a suitable drain)
- NFPA 13 requires the inspector's test to be **accessible** without a ladder (some designers locate it in a stairwell on the top floor)

**Dry systems:** Each dry system requires its own inspector's test. Some jurisdictions require an inspector's test at each dry system zone's most remote area.

---

## Alarm Devices

### Water Motor Gong

A mechanical alarm bell on the building exterior:

- Activated by water flow from the alarm check valve
- No electricity required -- operates on water pressure alone
- Provides local alarm that is audible from the street
- Pipe from the alarm port to the gong must have a retard chamber to prevent false alarms
- Strainer required in the alarm line

### Electric Alarm Pressure Switch

- Connected to the fire alarm system initiating circuit
- Activates on water pressure from the alarm check valve
- Sends **alarm signal** (not supervisory) to the fire alarm panel
- Must activate within **90 seconds** of waterflow per NFPA 72

### Waterflow Switches (Vane-Type)

- Installed directly in the system piping
- A paddle (vane) extends into the pipe bore
- Water movement deflects the vane, triggering an electrical contact
- Commonly installed at each **floor control assembly** for zone identification
- Retard timing adjustable (typically 30-60 seconds)
- Must activate within **90 seconds** of waterflow

---

## Fire Department Connection (FDC)

The FDC allows the fire department to pump water into the sprinkler system from their apparatus, supplementing the building's water supply.

### Requirements

- **Location:** Street side of the building, visible and accessible to fire apparatus
- **Connection type:** Per local fire department preference (typically two 2-1/2 inch NST inlets or one 4-inch Storz fitting)
- **Check valve:** Required to prevent backflow from the system
- **Automatic drain:** Between the check valve and the FDC inlets (prevents freezing of trapped water)
- **Signage:** Must be clearly labeled with the system(s) served (e.g., "AUTO SPRINKLER," "STANDPIPE," or "AUTO SPRINKLER AND STANDPIPE")
- **Clapper/caps:** Threaded caps or clapper assemblies to protect the inlets from debris

### FDC Pipe Sizing

- The FDC supply pipe must be at least as large as the system riser it connects to
- Minimum **4 inches** for most sprinkler-only systems
- Minimum **6 inches** for standpipe and combined systems

### Common FDC Issues

1. **Blocked or obstructed access** -- landscaping, fencing, or parked vehicles blocking the FDC
2. **Missing caps** -- open inlets allow debris to enter the system
3. **Incorrect thread type** -- must match local fire department coupling standards
4. **Check valve installed backward** -- prevents the fire department from pumping into the system
5. **No signage or incorrect signage** -- fire department must know which system the FDC serves

---

## Gauges

Pressure gauges are required at specific points:

| Location | Purpose |
|----------|---------|
| Above the system control valve (system side) | Monitor system pressure |
| Below the system control valve (supply side) | Monitor supply pressure |
| At the fire pump suction | Monitor suction pressure |
| At the fire pump discharge | Monitor discharge pressure |
| At air supply on dry/preaction systems | Monitor supervisory air pressure |
| At the top of each standpipe riser | Monitor riser pressure |

**Gauge requirements:**
- UL listed or FM approved
- Maximum dial diameter and range appropriate for the expected pressure
- Easily readable from the floor (located at accessible height)
- NFPA 25 requires gauges to be tested or replaced every **5 years**
