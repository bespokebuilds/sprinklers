---
title: Underground Piping
nextjs:
  metadata:
    title: Underground Piping
    description: Underground fire service main design and installation — pipe materials, NFPA 24 requirements, thrust restraint, testing, and flushing.
---

Underground piping connects the water source to the building's fire sprinkler system. Governed by NFPA 24 (Standard for the Installation of Private Fire Service Mains and Their Appurtenances), underground work is the foundation of every sprinkler system and one of the first activities on a construction site. {% .lead %}

---

## Pipe materials

### Ductile iron (DI)

The most common material for underground fire mains. Ductile iron offers excellent strength, long service life, and resistance to external loads.

- Joints: mechanical joint, push-on (Tyton), flanged, or restrained joint
- Lining: cement-lined interior to prevent tuberculation and maintain C-factor (C=140)
- Coating: bituminous coating standard; polyethylene encasement in corrosive soils
- Standard: AWWA C151/ANSI A21.51

### PVC (C900/C905)

PVC pipe rated for fire protection use per AWWA C900 (4-12 inch) or C905 (14-48 inch). Lighter than ductile iron and resistant to internal and external corrosion.

- Joints: bell-and-spigot with rubber gasket
- C-factor: C=150 (very smooth interior)
- Limitations: some AHJs prohibit PVC under buildings; susceptible to damage from solvents and petroleum products in soil; limited temperature range
- Must be listed for fire protection use

### HDPE (High-Density Polyethylene)

Increasingly used for fire mains. HDPE is fused together, creating a monolithic leak-free pipeline.

- Joints: butt-fused or electrofusion — no mechanical joints
- Flexibility: can deflect around obstacles without fittings
- Corrosion resistance: excellent, no lining or coating needed
- Limitations: requires trained fusion technicians, must be listed

{% figure src="/placeholder-diagram.svg" alt="Underground pipe material comparison" caption="Common underground fire main pipe materials — ductile iron, PVC C900, and HDPE with typical joint details" /%}

---

## NFPA 24 requirements

NFPA 24 covers the design, installation, and testing of underground fire service mains from the water supply to the building connection. Key requirements include:

### Cover depth

- Minimum cover: 12 inches below frost line or local code requirement, whichever is deeper
- Under roads and parking: additional depth to protect from vehicle loads (typically 36-48 inches minimum)
- Coordinate with local utility requirements and frost depth maps

### Pipe sizing

Underground mains must be sized to deliver the system demand flow with acceptable friction loss. Common practice:

- 6-inch minimum for most fire service mains
- 8-inch or larger for combined sprinkler/hydrant systems or high-demand facilities
- Size based on hydraulic calculation — the underground friction loss must be included in the system demand

### Valves

- Post indicator valves (PIVs) or OS&Y gate valves at the building connection
- Section valves in looped systems to allow isolation without shutting down the entire system
- All valves supervised (tamper switches or locked open)

---

## Thrust restraint

At every change in direction, tee, dead end, or reducer, the water pressure creates a thrust force that can push joints apart. Two primary methods prevent this:

### Thrust blocks

Concrete blocks poured against undisturbed soil at fittings. The block transfers the thrust force into the bearing soil. Sizing depends on:

- Line pressure (working pressure + surge)
- Pipe size
- Soil bearing capacity
- Fitting type (bend angle, tee, dead end)

### Restrained joints

Mechanical restraint built into the pipe joint (set screws, locking rings, grip rings). Restrained joints distribute thrust along a length of pipe rather than relying on soil bearing. Required when:

- Soil conditions cannot support thrust blocks (high water table, unstable soil)
- The pipe is installed in a casing or tunnel
- The fitting is adjacent to a wall penetration

{% callout type="note" title="Thrust restraint is not optional" %}
Unrestrained fittings under pressure will separate. Thrust restraint must be designed and inspected before the trench is backfilled — you cannot fix this after the fact.
{% /callout %}

---

## Hydrostatic testing

Before placing any underground fire main in service, it must pass a hydrostatic pressure test per NFPA 24 and NFPA 13.

### Test procedure

1. Fill the pipe slowly, bleeding air at high points
2. Pressurize to **200 psi** (or 50 psi above the maximum working pressure, whichever is greater)
3. Hold for **2 hours**
4. Measure pressure drop — allowable leakage is calculated based on pipe diameter and number of joints (AWWA C600 formula)

### Common test failures

- Joint leaks from improper assembly or debris in the gasket
- Valve leaks from seats not fully seated
- Air trapped in the system causing false readings — must be completely bled before testing
- Fitting separation from inadequate thrust restraint

{% callout type="warning" title="Test before backfill when possible" %}
Ideally, perform the hydrostatic test before backfilling the trench. Exposed pipe makes it easy to find and fix leaks. Once buried, locating a leak requires excavation.
{% /callout %}

---

## Flushing

After the hydrostatic test passes, the underground main must be flushed to remove construction debris, dirt, stones, and other foreign material that could obstruct sprinkler heads or clog alarm valves.

### Flow requirements

NFPA 24 requires flushing at a flow rate that produces a velocity of at least 10 feet per second in the pipe. Target flows by pipe size:

- 4-inch: 390 gpm
- 6-inch: 880 gpm
- 8-inch: 1,560 gpm
- 10-inch: 2,440 gpm

### Flushing procedure

1. Open the flush connection (typically a hydrant or flush valve at the end of the main)
2. Flow water until it runs clear — inspect visually
3. Measure flow with a pitot gauge and diffuser at the outlet to confirm adequate velocity
4. Document the results: flow rate, duration, water clarity

{% figure src="/placeholder-diagram.svg" alt="Underground flushing arrangement" caption="Typical flushing arrangement showing flush connection, flow measurement with pitot gauge, and discharge to approved location" /%}

---

## Building connections

The transition from underground to above-ground piping at the building is a critical detail.

### Wall penetration

- Pipe must pass through the foundation wall with a listed wall sleeve or mechanical seal
- Allow for differential settlement between the building and the underground pipe — flexible couplings or swing joints at the wall prevent pipe stress and cracking
- Waterproof the penetration to prevent groundwater infiltration

### Above-ground transition

Inside the building, the underground pipe transitions to the sprinkler riser. This connection typically includes:

- PIV or OS&Y valve for system isolation
- Backflow preventer (if required by the water utility)
- Check valve
- Fire department connection (FDC) tied in downstream of the check valve
- Test and drain connections

{% callout type="note" title="Coordinate early" %}
Underground work is one of the first construction activities. The building entry point, pipe routing, and valve locations must be coordinated with the general contractor, civil engineer, and plumber well before the foundation is poured.
{% /callout %}
