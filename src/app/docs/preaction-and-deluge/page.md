---
title: Preaction and Deluge Systems
nextjs:
  metadata:
    title: Preaction and Deluge Systems
    description: Detailed guide to preaction (single interlock, double interlock, non-interlock) and deluge fire sprinkler systems, including detection integration, NFPA 13 requirements, and design considerations.
---

Preaction and deluge systems add layers of control beyond standard wet or dry pipe systems. They integrate fire detection systems with sprinkler valve actuation to provide either additional safeguards against accidental discharge or simultaneous activation of all heads. These systems are specified for environments where water damage from accidental discharge is unacceptable, where freezing is a concern, or where rapid application of water over an entire hazard area is required.

---

## Preaction Systems Overview

Preaction systems are sprinkler systems that employ automatic sprinkler heads attached to a piping network containing air (pressurized or atmospheric) with a supplemental fire detection system installed in the same area as the sprinklers. The detection system controls the operation of the preaction valve, which admits water into the piping.

The critical distinction among preaction system types lies in the interlock logic -- what combination of events must occur before water reaches the fire.

---

## Single Interlock Preaction Systems

### How They Work

In a single interlock preaction system, the fire detection system is the single interlock. When the detection system activates, the preaction valve opens and water fills the piping. However, water does not discharge until an individual sprinkler head also fuses from heat exposure.

The operational sequence is:

1. Fire produces smoke, heat, or radiant energy detected by the fire detection system.
2. The detection panel sends a signal to the releasing panel (or solenoid on the valve).
3. The preaction valve opens and water fills the piping network.
4. The system is now functionally equivalent to a wet pipe system.
5. Individual sprinkler heads must still fuse to discharge water.

### When to Use

Single interlock preaction systems are the most commonly specified preaction type. They are used where accidental water discharge from a single point of failure (a broken head or damaged pipe) would cause significant damage, but where the additional protection of a double interlock is not warranted.

Typical applications include:

- **Data centers and server rooms** -- Water damage to IT equipment is catastrophic. The detection interlock prevents water from entering the piping unless a real fire is detected.
- **Museums and archives** -- Irreplaceable collections require protection from both fire and accidental water damage.
- **Telecommunication facilities** -- Sensitive electronic equipment requires an extra safeguard.
- **Libraries with rare collections** -- Water damage to rare books and documents can be as destructive as fire.
- **Clean rooms** -- Contamination from accidental discharge disrupts manufacturing.

{% callout type="note" title="Detection Provides Early Warning" %}
A significant benefit of single interlock preaction systems is early fire detection and alarm notification. The detection system typically activates well before sprinkler heads reach their fusing temperature, providing earlier warning to occupants and the fire department.
{% /callout %}

---

## Double Interlock Preaction Systems

### How They Work

Double interlock preaction systems require two independent events before water enters the piping: the fire detection system must activate AND at least one sprinkler head must fuse. Both interlocks must be satisfied simultaneously.

The operational sequence is:

1. Fire detection system activates (first interlock).
2. A sprinkler head fuses, releasing supervisory air pressure from the piping (second interlock).
3. The releasing panel confirms both conditions are met.
4. The preaction valve opens and water fills the piping and discharges from the open head(s).

If only the detection system activates but no head fuses, the valve remains closed. If a head fuses but the detection system has not activated, the valve also remains closed. This dual requirement provides the highest level of protection against accidental discharge.

### When to Use

Double interlock systems are specified where the consequences of accidental water discharge are severe and where the protected space is subject to freezing conditions that preclude a wet pipe system.

Typical applications include:

- **Freezer warehouses and cold storage** -- Combines freeze protection with accidental discharge prevention.
- **Unheated spaces protecting high-value contents** -- Where both freeze and water damage risks must be managed.
- **Refrigerated distribution centers** -- Large cold storage facilities with valuable inventory.

{% callout type="warning" title="Delayed Water Delivery" %}
Double interlock preaction systems have the longest water delivery time of any sprinkler system type. Both the detection activation and head fusing must occur before the valve opens, and then the pipe fill time begins. NFPA 13 requires the same 60-second water delivery time as dry pipe systems, and the 30% design area increase applies.
{% /callout %}

### Design Area Considerations

Like dry pipe systems, double interlock preaction systems require a 30% increase in the design area per NFPA 13. The system volume is also limited to 750 gallons to meet the 60-second delivery requirement. These constraints result in smaller maximum system sizes and higher material costs compared to single interlock systems.

---

## Non-Interlock Preaction Systems

### How They Work

Non-interlock preaction systems open the preaction valve when either the fire detection system activates or a sprinkler head fuses -- whichever happens first. There is no interlock logic; either event alone is sufficient to admit water to the piping.

- If detection activates first, water fills the piping and waits for a head to fuse.
- If a head fuses first (releasing supervisory air), the valve opens and water fills the piping and discharges immediately from the open head.

### When to Use

Non-interlock systems are less commonly specified than single or double interlock types. They are sometimes used where the speed of water delivery is prioritized over protection against accidental discharge, but where a supplemental detection system is still desired for early alarm notification.

{% callout type="note" title="Limited Application" %}
Non-interlock preaction systems provide the least protection against accidental discharge among preaction types. They function similarly to a dry pipe system when a head fuses, with the added benefit of detection-initiated priming. Carefully evaluate whether a standard dry pipe or single interlock system would better serve the application.
{% /callout %}

---

## Deluge Systems

### How They Work

Deluge systems use open sprinkler heads (no heat-sensitive element) connected to piping that is empty until the deluge valve activates. When the fire detection system trips, the deluge valve opens and water simultaneously flows from every head on the system. There is no individual head activation -- all heads discharge at once.

The operational sequence is:

1. Fire detection system identifies a fire condition (heat, flame, or smoke).
2. The detection/releasing panel signals the deluge valve solenoid or pneumatic release.
3. The deluge valve opens fully.
4. Water flows through all open heads simultaneously, applying water over the entire protected area.

### When to Use

Deluge systems are specified for high-hazard occupancies where fire can spread so rapidly that individual head activation would be too slow to control it. These systems apply large volumes of water over broad areas simultaneously.

Typical applications include:

- **Aircraft hangars** -- Flammable fuel spills require immediate, area-wide suppression.
- **Chemical processing plants** -- Rapid fire spread in chemical storage and processing areas.
- **Power transformers** -- Outdoor oil-filled transformers require rapid cooling and fire suppression.
- **Ammunition and explosive storage** -- Requires immediate area-wide water application.
- **Conveyor tunnels and flammable liquid handling** -- Areas where fire can travel quickly along a defined path.
- **Window drencher systems** -- Exterior exposure protection using open nozzles on building facades.

{% callout type="warning" title="Water Supply Demand" %}
Deluge systems have the highest water supply demand of any sprinkler system type because all heads flow simultaneously. The water supply must be capable of meeting the full system demand at the required pressure. Undersized water supplies will result in inadequate coverage and insufficient suppression.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Deluge system layout showing open heads, detection devices, releasing panel, deluge valve, and fire department connection" caption="Typical deluge system layout with open sprinkler heads, fire detection devices, releasing panel, and deluge valve assembly." /%}

---

## Detection Systems

Preaction and deluge systems rely on fire detection systems to initiate valve operation. The detection system must be designed, installed, and maintained as an integral part of the suppression system. NFPA 72 (National Fire Alarm and Signaling Code) governs detection system design, while NFPA 13 specifies how detection integrates with the suppression system.

### Detection Types

- **Spot-type heat detectors** -- Fixed-temperature or rate-of-rise detectors installed at the ceiling. Commonly used in preaction systems protecting data centers and storage areas.
- **Linear heat detection** -- Cables that sense temperature along their entire length. Used in cable trays, conveyor tunnels, and areas requiring continuous coverage.
- **Smoke detectors** -- Photoelectric or ionization detectors that provide earliest possible detection. Common in data center preaction systems but susceptible to false alarms.
- **Flame detectors** -- UV, IR, or UV/IR combination detectors that respond to radiant energy from flames. Used in aircraft hangars, chemical plants, and outdoor transformer deluge systems.
- **Air sampling detection (VESDA)** -- Very early smoke detection apparatus that continuously samples air for trace smoke particles. Provides the earliest warning and is used in high-sensitivity environments.

### Releasing Panels

The releasing panel is the control unit that receives signals from the detection devices and commands the valve to operate. It monitors the detection zones, provides alarm notification, and controls the solenoid or pneumatic actuator on the preaction or deluge valve. Releasing panels must be listed for releasing service per UL 864 (category UOJZ).

### Cross-Zoning

NFPA 13 permits (and many AHJs require) cross-zoning of detection devices for preaction systems. Cross-zoning requires that two independent detection zones both alarm before the valve operates. This reduces the risk of false valve trips caused by a single detector malfunction or a non-fire environmental condition.

Cross-zoning configurations include:

- Two separate detection zones of the same type (e.g., two smoke zones)
- Two different detection technologies (e.g., smoke and heat)
- Detection zone plus manual pull station

{% figure src="/placeholder-diagram.svg" alt="Preaction system logic diagram showing detection zones, cross-zone configuration, releasing panel, and valve actuation" caption="Preaction system logic diagram illustrating cross-zoned detection, releasing panel logic, and valve actuation sequence." /%}

---

## NFPA 13 Requirements by System Type

### General Requirements (All Preaction and Deluge)

- The detection system must be installed in the same area as the sprinkler heads (NFPA 13, Section 7.2).
- A manual release station must be provided at an accessible location to allow manual valve operation.
- System piping supervision is required to detect loss of air pressure (preaction) or piping breaks.
- The releasing panel and detection system must be monitored by the building fire alarm system.

### Single Interlock Specific

- Supervisory air pressure is not required but is recommended. If used, a low-air alarm must be provided.
- The detection system must be designed to activate before sprinkler heads fuse under the expected fire growth scenario.
- Water delivery time is not subject to the 60-second requirement when supervisory air is not used (piping is at atmospheric pressure and fills more quickly).

### Double Interlock Specific

- Supervisory air or nitrogen pressure is required in the piping to detect head fusing (second interlock).
- Maximum system capacity of 750 gallons (same as dry pipe).
- 60-second water delivery requirement applies.
- 30% design area increase required (same as dry pipe).
- Both detection and loss of air must be confirmed by the releasing panel before valve actuation.

### Deluge Specific

- All heads are open; no thermal elements are present on the heads.
- The detection system is the sole method of system actuation (plus manual release).
- The system must be hydraulically calculated with all heads flowing simultaneously.
- Deluge valves must be trip-tested annually per NFPA 25.

---

## Design and Installation Considerations

### Valve Room Requirements

Preaction and deluge valves should be installed in heated spaces, with adequate room for maintenance access and valve resetting. The releasing panel is typically co-located with the valve for simplified wiring.

### Supervision and Monitoring

All preaction and deluge systems must be electrically supervised. This includes:

- Valve tamper switches on all control valves
- Low-air pressure alarms (where supervisory air is used)
- Detection system trouble signals
- Releasing panel trouble and supervisory signals
- Loss of power alarms

### Maintenance Complexity

Preaction and deluge systems require significantly more maintenance than wet pipe systems. The detection system must be tested per NFPA 72 schedules, the releasing panel must be inspected and tested, valve trip tests must be performed, and the integration between detection and suppression must be verified. Organizations must budget for this increased maintenance burden.

{% callout type="note" title="Integrated Testing" %}
When testing preaction and deluge systems, coordinate the trip test with detection system testing. Verify the complete sequence from detection activation through valve trip and alarm notification. A valve that trips correctly but does not generate proper alarm signals is not fully functional.
{% /callout %}
