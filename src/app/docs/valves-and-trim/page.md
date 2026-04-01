---
title: Valves and Trim
nextjs:
  metadata:
    title: Valves and Trim
    description: Guide to fire sprinkler system valves, alarm valves, check valves, trim components, and supervision requirements per NFPA 13 and NFPA 25.
---

Valves and trim are the control and monitoring components that make a fire sprinkler system manageable, testable, and code-compliant. Every valve in a sprinkler system has a specific function -- controlling water flow, preventing backflow, initiating alarms, or enabling testing. Understanding the purpose, operation, and maintenance requirements of each component is essential for designers, installers, and inspection professionals.

---

## Control Valves

Control valves are used to shut off water supply to all or part of a sprinkler system for maintenance, modification, or emergency purposes. NFPA 13 Section 8.16.1 requires that all control valves on sprinkler systems be listed indicating devices or be supervised to ensure they remain in the open position.

### OS&Y Gate Valves (Outside Screw and Yoke)

The OS&Y gate valve is the most recognizable control valve in fire protection. Its distinguishing feature is the externally visible threaded stem -- when the valve is open, the stem protrudes visibly above the yoke. When closed, the stem retracts. This provides a clear visual indication of valve position from a distance.

OS&Y valves are the standard control valve for indoor sprinkler risers, sectional valves, and anywhere a visually indicating valve is required. They are available in sizes from 2 inches through 12 inches and larger.

### Butterfly Valves

Butterfly valves use a disc that rotates 90 degrees within the valve body to open or close the flow path. Fire protection butterfly valves include a visual position indicator and are designed for full-port flow in the open position. They are more compact and lighter than gate valves of the same size, making them the preferred choice for larger pipe sizes (4 inches and above) where space and weight are considerations.

All fire protection butterfly valves must be UL listed or FM approved and must include a locking mechanism to secure the valve in the open position.

### Post Indicator Valve (PIV)

A PIV is an OS&Y-type gate valve enclosed in a post assembly that extends above grade. The post includes a window displaying either OPEN or SHUT. PIVs are used on underground supply mains where the control valve must be located outdoors, typically between the water supply connection and the building entry point. NFPA 24 (Standard for the Installation of Private Fire Service Mains) governs PIV installation.

{% callout type="warning" title="Valve Supervision Is Mandatory" %}
An impaired sprinkler system due to a closed control valve is one of the leading causes of fire sprinkler system failure. NFPA 13, Section 8.16.1 requires that all sprinkler system control valves be supervised in the open position by one of the following methods: central station monitoring with electronic tamper switches, proprietary or remote station signaling, locking valves open with chains and locks, or sealing valves open. Electronic tamper switch supervision with central station monitoring is the most reliable method and is required in many jurisdictions.
{% /callout %}

---

## Check Valves

Check valves permit water flow in one direction only and prevent backflow.

### Swing Check Valves

Swing check valves use a hinged disc (clapper) that swings open under forward flow pressure and closes under reverse flow or gravity. They are used at system connections to prevent backflow from one zone into another and at fire department connections to prevent system water from flowing out.

### Wafer Check Valves

Wafer check valves are thin, compact check valves that fit between two flanges. They occupy much less space than swing check valves and are used where installation space is limited.

### Backflow Preventers

Backflow preventers protect the potable water supply from contamination by fire sprinkler system water. The two primary types used in fire protection are:

- **DCDA (Double Check Detector Assembly)** -- Contains two independently operating check valves in series with a metered bypass to detect leakage. Used where the degree of hazard is low to moderate. Suitable for most fire sprinkler connections to public water systems where the AHJ accepts a double check.
- **RPDA (Reduced Pressure Detector Assembly)** -- Contains two independently operating check valves with a pressure-monitored relief valve between them. If either check valve leaks, the relief valve discharges to atmosphere rather than allowing contaminated water to enter the potable supply. Required where the sprinkler system poses a higher contamination risk, such as systems with antifreeze, chemical additives, or connections to non-potable water sources.

{% callout type="note" title="Detector Assemblies" %}
The "D" in DCDA and RPDA stands for "Detector." The metered bypass line allows the water purveyor to detect any flow through the backflow preventer, including small leaks or unauthorized use. This bypass is equipped with a small water meter and its own check valve or double check assembly.
{% /callout %}

---

## Alarm Valves

Alarm valves are system-specific valves that serve as the interface between the water supply and the sprinkler system. They control water flow into the system and initiate alarms when water flows due to sprinkler activation.

### Wet Alarm Valve (Wet Pipe Valve)

A wet alarm valve is a check valve with an integral alarm port. Under normal conditions, the clapper is held closed by equal pressure on both sides. When a sprinkler head activates, pressure drops on the system side, the clapper opens, water flows into the system, and a portion of the flow is diverted through the alarm port to a water motor gong (mechanical alarm) or a pressure switch (electrical alarm). NFPA 13, Section 7.2 governs wet pipe system valve installation.

### Dry Pipe Valve

A dry pipe valve holds back the water supply using a differential air/nitrogen pressure on the system side. The valve is designed so that a relatively low air pressure (typically 15 to 50 PSI) on the system side can hold back a much higher water pressure on the supply side, using a differential area clapper. When a sprinkler head activates and air pressure drops to the trip point, the clapper opens, water enters the piping, and the alarm circuit activates. NFPA 13, Section 7.2 and Section 8.2 govern dry pipe valve installation.

### Deluge Valve

A deluge valve is a normally closed valve that is opened by an external detection system (heat detectors, smoke detectors, or other fire detection devices). When the detection system activates, it releases the clapper mechanically, pneumatically, or electrically, flooding the entire system with water. All heads on a deluge system are open (no thermal element), so every head discharges simultaneously. NFPA 13, Section 8.4 covers deluge system requirements.

### Preaction Valve

A preaction valve combines elements of dry pipe and deluge valve operation. The valve is normally closed and is opened by a supplemental detection system, similar to a deluge valve. However, the sprinkler heads on a preaction system have thermal elements (they are closed heads), so water only discharges from heads that have individually activated. This provides a double interlock -- both the detection system and a sprinkler head must activate before water is discharged.

NFPA 13 recognizes three types of preaction systems:

- **Single interlock** -- The valve opens on detection system activation alone. Water fills the piping and is ready at the heads.
- **Double interlock** -- The valve requires both detection system activation and a drop in supervisory air pressure (indicating a head has opened) before it opens. This provides the highest level of protection against inadvertent discharge.
- **Non-interlock** -- The valve opens on either detection system activation or loss of supervisory pressure.

---

## Trim and Accessories

Trim refers to the collection of valves, gauges, drains, and connections installed at or near the system riser. These components enable testing, monitoring, and operation of the system.

### Inspector's Test Connection

The inspector's test connection simulates the flow from a single sprinkler head at the hydraulically most remote point of the system. It consists of a valve connected to piping with an orifice that matches the smallest sprinkler orifice on the system, terminating at a point where the discharge can be observed. Opening the inspector's test verifies that the water flow alarm activates within the required time (NFPA 72 requires alarm initiation within 90 seconds for wet systems). NFPA 13, Section 8.17.2 requires an inspector's test on every system.

### Main Drain Connection

The main drain is a valved connection at the system riser that allows the system to be drained and provides a means to test the condition of the water supply. A main drain test is performed by fully opening the main drain valve and recording the static pressure (before opening) and residual pressure (while flowing). A significant drop in residual pressure compared to previous tests can indicate a partially closed valve, obstructed supply pipe, or degraded water supply. NFPA 25, Section 13.2.5 requires quarterly main drain testing.

### Fire Department Connection (FDC)

The fire department connection is an external fitting (typically a siamese with two 2-1/2 inch female connections or a single Storz connection) that allows the fire department to pump supplemental water into the sprinkler system. The FDC bypasses the normal water supply and check valves, connecting directly to the system side. FDCs must be visible, accessible, and located per NFPA 13, Section 8.17.1. Check valves (clappers) inside the FDC body or at the system connection prevent system water from flowing back out.

{% figure src="/placeholder-diagram.svg" alt="Diagram of a typical wet system riser showing alarm valve, main drain, inspector's test connection, pressure gauges, FDC, and flow switch arrangement" caption="Figure 1: Typical wet pipe riser trim arrangement showing key valve and accessory locations." /%}

### Flow Switches (Water Flow Alarms)

Water flow switches detect the movement of water in the piping and send an electrical signal to the fire alarm control panel. Vane-type flow switches insert a paddle into the pipe that deflects when water flows. Pressure-type flow switches detect the pressure surge associated with water flow. NFPA 13, Section 8.16.2 requires water flow alarm devices on all sprinkler systems. Flow switches must include a retard mechanism to prevent false alarms from pressure surges -- typically an adjustable time delay of 30 to 90 seconds.

### Tamper Switches

Tamper switches are electrical monitoring devices installed on control valves. They detect any movement of the valve handle or stem away from the fully open position and send a supervisory signal to the fire alarm panel. Tamper switches are the primary means of electronically supervising control valves per NFPA 13, Section 8.16.1 and NFPA 72.

### Pressure Gauges

NFPA 13, Section 8.17.4 requires pressure gauges at specific locations:

- Above and below each alarm valve, dry pipe valve, preaction valve, and deluge valve
- At each fire pump (suction and discharge)
- On the air supply side of dry pipe and preaction systems
- At the top of each standpipe

Gauges must be listed, have a maximum range of not less than twice the normal working pressure, and be replaceable without shutting down the system.

---

## Valve Supervision

Valve supervision ensures that all control valves remain in the open position at all times except during authorized maintenance. NFPA 13, Section 8.16.1 and NFPA 25, Section 13.1 establish the supervision requirements.

### Electronic Tamper Switches

The most reliable supervision method. A tamper switch on each control valve sends a supervisory signal to a monitored fire alarm panel within two revolutions of the valve handwheel or when the valve has moved one-fifth of the distance from fully open. The monitoring company dispatches a response to investigate any supervisory signal.

### Locked or Sealed Open

Where electronic supervision is not provided, NFPA 13 permits control valves to be locked or sealed in the open position. Locks require weekly inspection to verify the valve is open and the lock is intact. Seals (breakable wire and tag) also require weekly inspection. This method is less reliable than electronic supervision because it depends on consistent manual inspection.

### Central Station Monitoring

Central station monitoring per NFPA 72 provides 24/7 monitoring of tamper switch signals, water flow alarm signals, and other supervisory conditions. The central station operator dispatches the fire department for alarm signals and the building owner or sprinkler contractor for supervisory signals. Most jurisdictions and insurance carriers require central station monitoring for commercial sprinkler systems.

---

## NFPA 13 and NFPA 25 Requirements

### Valve Identification and Tagging

NFPA 13, Section 8.16.1.1.4 requires that all control valves be identified with a sign indicating the system or portion of the system they control. NFPA 25, Section 13.1.1.2 requires that valve identification include a unique number or designation that corresponds to the as-built drawings and the valve inspection records.

### Testing Frequency

NFPA 25 establishes the testing frequencies for all valves and trim:

| Component | Test Frequency |
|---|---|
| Control valves (full stroke) | Annually |
| OS&Y valve position verification | Weekly (if sealed/locked), quarterly (if electronically supervised) |
| Water flow alarms | Quarterly |
| Main drain test | Quarterly, and after any work on the water supply |
| Inspector's test | Quarterly |
| Tamper switches | Quarterly |
| Backflow preventers | Annually (or per local water authority) |
| Dry pipe valve trip test | Annually, with full flow every 3 years |
| Deluge and preaction valve trip test | Annually |
| Pressure gauges | Replace or calibrate every 5 years |

### Accessibility

NFPA 13, Section 8.16.1.1.1 requires that all control valves be accessible. This means the valve must be reachable without ladders, keys, or special tools in an emergency. Valves located above ceilings, in locked rooms, or behind equipment are considered inaccessible and must be relocated or provided with clear, unobstructed access.

{% callout type="note" title="Impairment Procedures" %}
Whenever a control valve must be closed for maintenance, NFPA 25 Chapter 15 requires a formal impairment procedure. This includes notifying the fire alarm monitoring company, the insurance carrier, the fire department, and the building owner. A fire watch must be established in the affected area, and the valve must be reopened and the system restored as quickly as possible. The AHJ and insurance carrier should be notified when the system is back in service.
{% /callout %}

Valves and trim are the interface between the passive piping network and the active fire protection mission. Every valve must be in the correct position, every alarm device must function, and every test connection must be accessible. Proper installation, identification, supervision, and maintenance of these components is what separates a reliable fire protection system from a liability.
