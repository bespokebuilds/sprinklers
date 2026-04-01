---
title: System Types
nextjs:
  metadata:
    title: System Types
    description: Detailed guide to water-based fire sprinkler system types including wet pipe, dry pipe, preaction, deluge, ESFR, and CMSA systems with design considerations for each.
---

NFPA 13 defines several distinct types of water-based fire sprinkler systems. Each is suited to specific environments, hazards, and operational requirements. Understanding when to specify each type is one of the most fundamental skills a fire sprinkler designer must develop.

---

## Wet Pipe Systems

Wet pipe systems are the most common, most reliable, and simplest fire sprinkler systems. Pipes are filled with pressurized water at all times, connected to a reliable water supply. When a sprinkler head activates (its heat-sensitive element breaks at the rated temperature), water discharges immediately.

### When to Use

- Spaces maintained at or above 40 degrees F (4 degrees C)
- Most commercial, institutional, and residential applications
- Anywhere immediate water delivery is desired

### Key Characteristics

- **Fastest response time** of any system type -- water is already at the head
- **Lowest maintenance** requirements and cost
- **Simplest design** with fewest components
- **Most reliable** due to mechanical simplicity
- Standard Hazen-Williams C-factor: **120** for black steel pipe

### Design Considerations

- Must ensure all piping remains above freezing at all times
- Accidental discharge from mechanical damage will release water immediately
- Alarm check valves are used on the system riser
- System can be drained for modifications, then refilled and returned to service quickly

---

## Dry Pipe Systems

Dry pipe systems use pressurized air or nitrogen (instead of water) in the piping downstream of a dry pipe valve. When a sprinkler head activates, the air pressure drops, the dry pipe valve opens, and water fills the piping and discharges from the open head.

### When to Use

- Unheated spaces where temperatures may drop below 40 degrees F
- Parking garages, loading docks, unheated warehouses
- Exterior canopies and covered walkways
- Freezer/cooler spaces (though these may also use preaction)

### Key Characteristics

- **Delayed water delivery** -- typically 45 to 60 seconds for water to reach the most remote head
- **Higher maintenance** due to air compressor, accelerator, and dry pipe valve
- Standard Hazen-Williams C-factor: **100** for black steel pipe (lower than wet because of corrosion concerns)
- NFPA 13 limits dry pipe systems to **750 gallons** maximum system volume unless equipped with a quick-opening device (accelerator or exhauster)

### Design Considerations

- Pipe must be pitched to drain points so condensation does not accumulate and freeze
- Low-point drains (auxiliary drains) must be installed and regularly drained, especially before and during cold weather
- The dry pipe valve enclosure must be maintained at a minimum of 40 degrees F
- Nitrogen is increasingly preferred over compressed air to reduce internal corrosion
- System demand is typically 30% higher than an equivalent wet system due to the lower C-factor and delayed operation

### Maintenance Requirements

Auxiliary drains must be operated:

- After each system operation
- Before the onset of freezing weather
- Periodically throughout the cold season depending on condensation levels (daily, weekly, or monthly based on conditions)

---

## Preaction Systems

Preaction systems combine elements of both dry pipe and deluge systems. The piping is dry (pressurized with air or nitrogen), but the preaction valve requires a separate detection event before it will open to admit water into the piping. This provides a dual-activation safeguard.

### Types of Preaction Systems

**Single Interlock**: The preaction valve opens when the fire detection system (smoke detectors, heat detectors) activates. Water fills the piping, but does not discharge until a sprinkler head also activates from heat. This is the most common preaction configuration.

**Double Interlock**: Both the detection system AND a sprinkler head must activate before the valve opens. This provides the highest level of protection against accidental discharge. Double interlock is common in cold storage and freezer facilities.

**Non-Interlock**: The valve opens upon either detection system activation OR sprinkler head operation. This provides the fastest response of the preaction variants.

### When to Use

- **Data centers** and server rooms where accidental water discharge would cause catastrophic damage
- **Museums** and archives with irreplaceable collections
- **Telecommunications facilities**
- **Cold storage** and freezer warehouses (double interlock)
- Any environment where the consequences of accidental discharge are severe

### Design Considerations

- Requires a compatible fire detection system in addition to the sprinkler system
- More complex and expensive to install and maintain than wet or dry systems
- Detection system must be designed and installed per NFPA 72
- Regular testing of both the detection system and the preaction valve is required
- Air supervisory pressure is monitored to detect leaks in the piping

---

## Deluge Systems

Deluge systems use open sprinkler heads (no heat-sensitive element) with empty piping. When the fire detection system activates, a deluge valve opens and water discharges simultaneously from all heads in the protected area.

### When to Use

- **Aircraft hangars** (particularly Group I and II hangars per NFPA 409)
- **Chemical processing** areas with rapidly spreading fire hazards
- **Power generation** facilities (transformers, turbines)
- **Ammunition storage** and explosive handling areas
- Any area where rapid fire spread requires immediate, total coverage

### Key Characteristics

- All heads discharge simultaneously, requiring very large water supplies
- Water application is immediate across the entire protected area
- Relies entirely on the detection system for activation
- Often uses foam-water sprinklers or nozzles for flammable liquid hazards

### Design Considerations

- Water supply must be sized for ALL heads flowing simultaneously
- Detection system design is critical -- false activation floods the entire area
- Drainage must be adequate to handle the total water volume
- Often combined with foam concentrate systems for flammable liquid protection
- Higher system cost due to detection, large water supply, and drainage requirements

---

## ESFR (Early Suppression Fast Response)

ESFR sprinklers represent a fundamentally different design philosophy. Rather than controlling a fire (limiting its size), ESFR heads are designed to **suppress** fires -- to actually put them out or dramatically reduce them before the fire department arrives.

### Key Characteristics

- **Fast-response thermal element** with an RTI (Response Time Index) of 50 (meter-seconds)^1/2 or less
- **Large K-factors** -- commonly K-14.0, K-16.8, K-22.4, and K-25.2
- **High-momentum water droplets** -- specially designed deflectors produce large droplets that penetrate the fire plume rather than evaporating
- **Ceiling-only protection** -- a primary advantage is eliminating the need for in-rack sprinklers in storage occupancies
- Maximum coverage area of 100 sq ft per head

### When to Use

- **Warehouse and storage** occupancies where eliminating in-rack sprinklers is desired
- Storage heights up to approximately 40 feet
- Where the water supply can deliver the required high pressures and flows

### Design Considerations

- Requires strong water supplies, typically 50 to 100+ psi at the most remote head
- Strict limitations on ceiling height, storage configuration, and commodity class
- Design is based on **number of sprinklers and end head pressure** from tables, not density/area curves
- Obstructions between sprinklers and storage must be carefully managed
- Cannot be used in all storage configurations -- check NFPA 13 tables for specific limitations
- Building must meet draft curtain and ceiling height requirements

### Cost Tradeoff

The ESFR approach trades higher water supply costs (larger mains, possibly a fire pump) for lower installation costs (no in-rack sprinklers, simpler piping in rack aisles). In many warehouse applications, the net cost favors ESFR.

---

## CMSA (Control Mode Specific Application)

CMSA sprinklers are designed to **control** a fire rather than suppress it. They use larger K-factors (minimum K-11.2) and are listed for specific storage applications with defined parameters.

### How CMSA Differs from ESFR

| Feature | ESFR | CMSA |
|---------|------|------|
| **Goal** | Suppress the fire | Control the fire |
| **K-factors** | K-14.0 and higher | K-11.2 minimum |
| **Design method** | Number of heads + end head pressure tables | Number of heads + end head pressure tables |
| **Response type** | Fast response required | Standard or fast response |
| **Pressure requirements** | Higher | Lower (one advantage of CMSA) |
| **Storage limitations** | Check NFPA 13 tables | Different but also limited |

### When to Use

- Storage applications where ESFR water supply requirements are too demanding
- Solid-piled and palletized storage of Class I through IV commodities
- Situations requiring ceiling-only protection but with lower available water pressure

### Design Considerations

- CMSA sprinklers cannot be used for bin-box, back-to-back shelf, or shelf storage of Class I through IV commodities
- Can only protect solid-piled and palletized storage or in-rack storage without solid shelves
- Design uses tabular data, not density/area curves
- Like ESFR, obstruction rules are critical

---

## CMDA (Control Mode Density Area)

CMDA represents the traditional approach to storage sprinkler design. These are standard spray sprinklers designed to control fires using density/area design criteria.

### Key Characteristics

- Uses the traditional density/area approach (though the 2025 NFPA 13 edition has shifted to tables)
- Commonly K-5.6 and K-8.0 heads
- May require in-rack sprinklers depending on storage height and commodity
- More flexible in terms of storage arrangement changes

### When to Use

- When storage configurations change frequently
- Lower storage heights where ESFR/CMSA advantages are less significant
- Where in-rack sprinklers are already planned or acceptable

---

## Antifreeze Systems

Antifreeze systems use a listed antifreeze solution in a portion of wet pipe system piping that extends into areas subject to freezing. The antifreeze section is isolated by a check valve from the rest of the wet system.

### Current Requirements

- Antifreeze solutions must be UL listed
- Solutions must be tested annually before freezing weather
- Concentrations must be verified to protect to the anticipated minimum temperature
- Improper mixtures can freeze or create safety hazards
- NFPA 13 and NFPA 25 have specific requirements for antifreeze concentration and testing

### Practical Considerations

- Antifreeze systems are limited in size (typically small sections serving unheated entries, canopies, or vestibules)
- The industry has moved significantly toward dry pipe or preaction systems instead of antifreeze, particularly after fire incidents involving improperly mixed antifreeze solutions
- New installations should carefully evaluate whether a dry system is preferable to antifreeze

---

## System Selection Decision Guide

When selecting a system type, consider these factors in order:

1. **Temperature** -- Can the space be maintained above 40 degrees F? If not, wet pipe is eliminated.
2. **Accidental discharge risk** -- How severe are the consequences? High-value environments may warrant preaction.
3. **Fire spread rate** -- Rapidly spreading hazards (flammable liquids, aircraft hangars) may require deluge.
4. **Storage protection** -- Evaluate ESFR vs. CMSA vs. CMDA based on commodity, height, water supply, and cost.
5. **Water supply** -- Can the available supply meet ESFR or deluge demands? If not, consider alternatives.
6. **Cost** -- Factor in installation, water supply augmentation, and ongoing maintenance.
7. **Maintenance capability** -- More complex systems (preaction, deluge) require more diligent maintenance programs.
