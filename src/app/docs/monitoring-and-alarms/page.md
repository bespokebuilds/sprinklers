---
title: Monitoring and Alarms
nextjs:
  metadata:
    title: Monitoring and Alarms
    description: Guide to fire sprinkler monitoring requirements including flow switches, tamper switches, alarm valves, fire alarm integration, central station monitoring, and NFPA 72 compliance.
---

A fire sprinkler system that activates but goes undetected defeats much of its purpose. Monitoring and alarm systems ensure that sprinkler activation, system impairments, and trouble conditions are detected and reported promptly. These requirements are governed by NFPA 13, NFPA 72, and the International Building Code.

---

## Monitoring Devices

### Water Flow Switches (Waterflow Detectors)

Water flow switches detect water movement in the sprinkler piping, indicating that one or more sprinkler heads have activated.

**How they work:** A paddle or vane extends into the pipe bore. When water flows past, the vane deflects and triggers an electrical contact.

**Key requirements:**
- Must initiate an **alarm signal** (not supervisory) at the fire alarm control panel
- NFPA 72 requires the alarm to be initiated within **90 seconds** of waterflow
- Retard settings prevent false alarms from water hammer or pressure surges (typically 30-90 seconds)
- One flow switch per floor or zone is typical; NFPA 13 requires a flow switch for each floor in multi-story buildings

**Installation notes:**
- Install on the system side of the alarm check valve or riser check valve
- Provide at least 6 inches of pipe on each side for proper paddle operation
- Wire to initiating device circuit on the fire alarm control panel

### Tamper Switches (Supervisory Switches)

Tamper switches monitor the position of control valves to ensure they remain open. A closed valve would prevent water from reaching sprinkler heads.

**Types:**
- **OS&Y (Outside Screw and Yoke) valve switches** -- detect the position of the valve stem
- **PIV (Post Indicator Valve) switches** -- monitor the indicator on post indicator valves
- **Butterfly valve switches** -- detect the handle or gear position
- **Wall post indicator valve switches**

**Key requirements:**
- Must initiate a **supervisory signal** (distinct from alarm) at the fire alarm panel
- Signal must be transmitted within the **first two turns** of the valve handwheel from the fully open position
- Every control valve in the sprinkler system water supply must be supervised
- NFPA 13 requires electrical supervision; lock-and-chain supervision alone is generally not acceptable for new installations in most occupancies

### Pressure Switches

Pressure switches monitor air or water pressure in the system:

- **Air pressure supervision** on dry pipe and preaction systems -- detects loss of supervisory air pressure that could indicate a leak or trip
- **Water pressure supervision** -- monitors system water pressure

### Water Level Switches

For systems supplied by water storage tanks, level switches monitor the water level and initiate supervisory signals when the level drops below the required minimum.

### Temperature Monitoring

In areas where sprinkler piping is subject to freezing:

- Temperature monitoring devices can supervise valve enclosures
- Dry pipe valve enclosures must be maintained at minimum 40 degrees F
- Temperature drops below thresholds generate supervisory signals

---

## Alarm Valves

### Wet System Alarm Check Valves

The alarm check valve sits on the wet system riser and serves two functions:

1. **Check valve** -- prevents backflow from the system into the water supply
2. **Alarm** -- when water flows through the system (a sprinkler activates), the alarm check valve directs water to an alarm device, typically:
   - A **water motor gong** (mechanical alarm bell on the building exterior)
   - An **electric pressure switch** connected to the fire alarm system

### Dry Pipe Valves

Dry pipe valves hold back the water supply using air pressure on the system side. When a sprinkler activates and air pressure drops, the valve opens (trips). Dry pipe valves include:

- Air pressure gauges on both sides
- Water motor gong or electric alarm connections
- Priming chamber
- Air supply connection
- Quick-opening devices (accelerators or exhausters) for systems over 500-750 gallons

### Preaction and Deluge Valves

These electrically or pneumatically operated valves open based on signals from a fire detection system. They require:

- Supervised detection system wiring
- Manual release capability
- Alarm and supervisory signal connections
- Regular testing of valve and detection system coordination

---

## Fire Alarm Integration

### Signal Types

The fire alarm system handles three types of signals from sprinkler monitoring devices:

| Signal Type | Meaning | Response Required |
|------------|---------|-------------------|
| **Alarm** | Fire condition (waterflow) | Immediate notification to fire department and monitoring station |
| **Supervisory** | Abnormal condition that could impair the system (valve closed, low air pressure, low tank level, high/low temperature) | Investigation required within specified timeframes |
| **Trouble** | System fault (broken wire, ground fault, communication failure) | Maintenance and repair needed |

### Wiring and Circuits

- Flow switches connect to **alarm initiating device circuits**
- Tamper switches connect to **supervisory initiating device circuits**
- Circuits must be electrically supervised for opens, grounds, and shorts
- NFPA 72 defines the specific circuit performance requirements (Class A, B, etc.)
- Class A circuits provide redundant pathways; Class B is more common and less expensive

### Panel Requirements

The fire alarm control panel (FACP) must:

- Be listed to UL 864 (UUFX)
- Provide distinct indications for alarm, supervisory, and trouble conditions
- Transmit signals to the central monitoring station
- Include battery backup for a minimum of 24 hours standby plus 5 minutes of alarm

---

## Central Station Monitoring

### NFPA 72 Requirements

The International Building Code requires most sprinkler systems to be monitored by an approved supervising station in accordance with NFPA 72. Central station service is the most comprehensive level of monitoring.

**Central station service includes:**
- Alarm system installation, monitoring, and maintenance
- Signal retransmission to the fire department
- Record keeping
- Testing and maintenance oversight
- All fire alarm signals must be **immediately retransmitted** to the fire department communications center

### Communication Path Supervision

- A single communication path must be supervised at intervals not exceeding **60 minutes**
- The protected premises must check in with the supervising station at least once per hour
- Failure to check in triggers a trouble signal at the protected premises
- Dual communication paths (e.g., IP + cellular) provide redundancy

### Response Time Requirements

| Signal Type | Runner/Technician Arrival |
|------------|--------------------------|
| Alarm or supervisory (not auto-restored) | Within **2 hours** |
| Trouble (not restored) | Within **4 hours** |
| Any signal not restored within 8 hours | Notification to the code authority (AHJ) |

---

## Supervision Requirements by Occupancy

Not all occupancies require the same level of monitoring:

### Full Electrical Supervision Required

- High-rise buildings
- Healthcare facilities (NFPA 101 requires electrical supervision; any condition that could impair satisfactory operation of the sprinkler system must generate a supervisory signal)
- Assembly occupancies over certain thresholds
- Educational occupancies
- Most commercial occupancies per IBC

### Healthcare-Specific Requirements

Healthcare facilities have the most stringent monitoring requirements:

- Full electrical supervision of all system components
- Supervisory signal for any condition that could impair sprinkler operation (not just valve position)
- System outages lasting more than **4 hours in a 24-hour period** require either building evacuation or a fire watch
- Quarterly, semi-annual, and annual inspection and testing of major components per NFPA 25

---

## System Impairment Procedures

When a sprinkler system or portion of a system is taken out of service:

1. **Notify** the fire alarm monitoring company, insurance carrier, AHJ, and building management
2. **Establish a fire watch** if required (continuous patrol of affected areas)
3. **Minimize the duration** of impairment
4. **Restore service** as quickly as possible
5. **Notify all parties** when service is restored
6. **Document** the impairment, its duration, and the protective measures taken

NFPA 25 Chapter 15 provides detailed procedures for managing impairments.

---

## Common Design Considerations

1. **Flow switch placement** -- Install on the proper side of the check valve. Flow switches installed on the wrong side may not detect waterflow.

2. **Retard timing** -- Set appropriately to prevent false alarms from water hammer while still meeting the 90-second alarm initiation requirement.

3. **Valve supervision coverage** -- Every valve that could shut off water to sprinklers must be supervised. Commonly missed valves include sectional valves, floor control valves, and PIVs.

4. **Signage** -- Control valves should be identified with signage indicating which portion of the system they control.

5. **Testing access** -- Inspectors test tamper switches and flow switches periodically. Locate them where they are accessible and where testing will not cause water damage (test connections should have drains to outside or a suitable drain).

6. **Coordination with fire alarm designer** -- The sprinkler designer must coordinate with the fire alarm designer on device quantities, locations, wiring, and signal types. This is often a source of coordination errors on projects.
