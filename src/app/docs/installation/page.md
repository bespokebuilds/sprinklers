---
title: Field Installation
nextjs:
  metadata:
    title: Field Installation
    description: Sprinkler system installation sequence, rough-in and trim-out procedures, pipe joining techniques, hanger installation, hydrostatic testing, and closeout requirements.
---

Field installation is where the design and fabrication work comes together. A well-planned installation follows a logical sequence, uses proper joining techniques, and is tested rigorously before being placed in service. This page covers the full installation process from underground to closeout. {% .lead %}

---

## Installation sequence

Sprinkler installation follows a bottom-up, large-to-small sequence that parallels building construction. Working out of sequence creates conflicts, rework, and delays.

### General order of work

1. **Underground piping** -- installed before the slab is poured, including supply mains, lateral connections, and riser stubs brought through the slab
2. **Risers** -- vertical pipe connecting the underground to the above-ground system, typically installed as soon as the structure reaches the served floor
3. **Cross mains and feed mains** -- large-diameter horizontal pipe installed from the riser to serve the branch line areas
4. **Branch lines** -- smaller pipe running from the cross mains to individual sprinkler head locations
5. **Drops and sprigs** -- vertical pipe connecting branch lines to the sprinkler heads at ceiling level
6. **Sprinkler heads** -- installed last to avoid damage from other trades working overhead

### Coordination with other trades

- Sprinkler rough-in typically follows structural steel or concrete framing and runs concurrently with mechanical ductwork and electrical conduit
- Communicate hanger and pipe locations to the mechanical and electrical contractors early; first trade to install generally holds their position
- Attend coordination meetings and update BIM models as conditions change in the field

---

## Rough-in

Rough-in is the installation of all piping above ceilings and in concealed spaces before the ceiling grid and drywall are installed.

### Above-ceiling installation

- Install hangers first, then set mains, then branch lines
- Maintain proper clearance from structural members, ductwork, and other utilities per the coordination drawings
- Keep pipe elevations consistent and within the tolerance required for proper head deflector-to-ceiling distance
- Leave arm-overs and drops capped or plugged until trim-out to prevent debris entry
- Install all valves, drains, inspector test connections, and alarm devices during rough-in

### Sleeving and firestopping

- Install pipe sleeves through all rated walls and floors before the pipe is run through
- Sleeves must be properly sized with adequate annular space for the listed firestop system
- Firestopping is installed after the pipe is in place and tested, using a system listed for the specific penetration type (metallic pipe, CPVC, or mixed)

{% callout type="note" title="Document everything" %}
Photograph rough-in conditions before ceilings are closed. Concealed work is extremely expensive to revisit, and photographs resolve disputes about what was installed and where.
{% /callout %}

---

## Trim-out

Trim-out occurs after ceiling grids, drywall, and finish materials are in place.

### Installing sprinkler heads

- Remove caps or plugs from drops and arm-overs
- Install heads using the proper wrench (never pipe wrenches or pliers, which damage the deflector and frame)
- Verify the correct head type, temperature rating, and finish for each location against the approved plans
- Upright, pendent, sidewall, and concealed heads each have specific orientation and installation requirements
- Concealed heads require a cover plate that releases at a rated temperature below the head activation temperature

### Escutcheons and cover plates

- Every head penetrating a finished ceiling or wall requires an escutcheon or cover plate
- Escutcheons must be the same manufacturer as the sprinkler head to maintain the listing
- Verify that the escutcheon properly covers the hole without binding or cocking the head

---

## Pipe joining techniques

The method of joining pipe depends on pipe material, size, and system type. Every joint in a fire sprinkler system must be made with listed materials using the correct procedure.

### Grooved mechanical joints

Grooved couplings are the dominant joining method for pipe 2 inches and larger.

- Clean the groove and gasket seating area on both pipe ends
- Lubricate the gasket with the coupling manufacturer recommended lubricant (not petroleum-based products unless approved)
- Seat the gasket over the pipe ends, position the coupling housings, and tighten bolts evenly to the specified torque
- Inspect the assembled joint: the coupling must be seated in the groove with no gasket visible and even bolt gaps
- Common mistakes include uneven bolt tightening (which cocks the coupling), debris in the groove, and using damaged gaskets

### Threaded joints

- Thread engagement must comply with NFPA 13 minimums and the fitting manufacturer requirements
- Apply listed thread sealant to male threads only
- Assemble hand-tight, then wrench-tight to the proper engagement depth; do not over-tighten
- Back-weld threaded joints where required by the design or specification
- Common mistakes include under-engagement, cross-threading, and using non-listed sealant

### CPVC solvent cementing

CPVC joints require strict adherence to the cement manufacturer instructions.

- Cut pipe square, deburr, and chamfer the outside edge
- Dry-fit the joint to verify depth of insertion; mark the insertion depth on the pipe
- Apply primer if required by the cement system (one-step cements include primer)
- Apply cement to both the pipe outside and fitting inside socket, using a dauber sized for the joint
- Insert pipe into fitting with a quarter-turn twist and hold for 30 seconds
- Do not disturb the joint during the cure period

**Cure times before pressure testing:**

| Temperature range | 1/2" to 1-1/4" | 1-1/2" to 2" | 2-1/2" to 3" |
|---|---|---|---|
| 60 F to 120 F | 1 hour | 2 hours | 4 hours |
| 40 F to 59 F | 2 hours | 4 hours | 8 hours |
| Below 40 F | Do not cement | Do not cement | Do not cement |

{% callout type="warning" title="Temperature matters for CPVC" %}
CPVC solvent cement will not properly cure below 40 degrees Fahrenheit. Joints made in cold conditions will fail under pressure. If temperatures are below the minimum, provide temporary heating to the work area and maintain it through the full cure period.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Comparison of grooved, threaded, and CPVC pipe joining techniques" caption="The three primary pipe joining methods in fire sprinkler work: grooved mechanical coupling, threaded connection, and CPVC solvent-cemented joint." /%}

---

## Hanger installation

Hangers support the piping system from the building structure and resist all loads including the weight of pipe, water, and seismic forces. Hanger installation is governed by NFPA 13 Chapter 9.

### Hanger types

- **Beam clamps** attach to structural steel flanges without drilling or welding
- **Concrete inserts** are cast into concrete before the pour; post-installed anchors are used when inserts are missed
- **Powder-actuated fasteners** are driven into concrete or steel for lighter loads; verify load ratings for the specific fastener and base material
- **Trapeze assemblies** use channel (Unistrut or equivalent) supported by threaded rod to carry multiple pipes or large-diameter pipe
- **Clevis hangers** and **ring hangers** are the standard pipe support attached to threaded rod from above

### NFPA 13 spacing requirements

- Branch lines: maximum 12 feet between hangers (15 feet for steel pipe 1 inch and smaller under specific conditions)
- Mains and cross mains: maximum 12 feet, with hangers within 24 inches of each change of direction
- The last hanger on a branch line must be within 36 inches of the end head
- Trapeze hangers supporting multiple pipes must be engineered for the combined load
- Seismic bracing has separate requirements per NFPA 13 Chapter 18

### Common hanger mistakes

- Attaching hangers to items not part of the building structure (light-gauge metal decking, suspended ceilings, ductwork)
- Exceeding the load rating of beam clamps or powder-actuated fasteners
- Using undersized threaded rod (minimum 3/8 inch for most applications)
- Failing to brace the last section of branch line piping

{% callout type="warning" title="Never support other trades from sprinkler pipe" %}
Sprinkler pipe must not be used to support conduit, ductwork, cable tray, or any equipment belonging to other trades. Similarly, other trades must not attach to sprinkler pipe or hangers. This overloads the hangers, stresses pipe joints, and can impair system performance. Remove unauthorized attachments immediately and notify the general contractor.
{% /callout %}

---

## Testing

Every sprinkler system must be tested before it is placed in service. Testing requirements are defined in NFPA 13 Chapter 28.

### Hydrostatic test (wet systems)

- Fill the system slowly with water, venting air at high points
- Pressurize to 200 psi or 50 psi above the maximum system working pressure, whichever is greater
- Maintain the test pressure for 2 hours
- The system passes if there is no visible leakage and pressure drop does not exceed the test gauge tolerance
- All joints, fittings, and device connections must be visually accessible during the test
- The authority having jurisdiction (AHJ) typically witnesses the hydrostatic test

### Air test (dry and preaction systems)

- Pressurize the system with air or nitrogen to 40 psi
- Allow a stabilization period to account for temperature equalization (typically 24 hours)
- The system passes if the pressure loss does not exceed 1.5 psi over 2 hours
- Air tests detect leaks that would cause nuisance trips in dry and preaction systems

### Flushing

- All underground and above-ground piping must be flushed before heads are installed to remove construction debris, cutting oil, and pipe scale
- Flushing flow rates must meet NFPA 13 Section 28.2.3 minimums
- Flush water must be directed to an approved disposal point; never flush through sprinkler heads

{% figure src="/placeholder-diagram.svg" alt="Hydrostatic test setup showing pump, gauge, and test connection" caption="Hydrostatic test setup: a test pump pressurizes the system to 200 psi through the test connection while gauges at the high and low points are monitored for 2 hours." /%}

---

## Punch list and closeout

The final phase of installation involves verifying that every detail is correct and delivering the required documentation.

### Final walkthrough

Walk the entire system with the installing foreman, checking:

- All heads are the correct type, temperature, and finish for their location
- Escutcheons are tight and properly seated
- No visible leaks at any joint
- All valves are in the correct position (open or closed) and properly supervised
- Signage is installed at all control valves, FDC connections, and system risers
- Spare head cabinet is installed in an accessible location with the required number of spare heads and a wrench

### Common deficiencies

- Missing or wrong escutcheons
- Heads painted by other trades during construction
- Heads obstructed by items installed after the sprinkler system (shelving, signs, light fixtures)
- Missing valve supervision (tamper switches)
- Drain piping not routed to a visible, accessible point
- Missing identification signs

### Closeout deliverables

- **As-built drawings** reflecting all field changes to the approved design
- **Operation and maintenance (O&M) manuals** for all major components (valves, alarm devices, fire pump if applicable)
- **Test certificates** for hydrostatic, air, and underground tests
- **Contractor's Material and Test Certificate** (NFPA 13 form)
- **Spare head cabinet** stocked per NFPA 13 Section 6.2.9
- **Training** for building maintenance staff on system basics, valve operation, and impairment procedures

{% callout type="note" title="Spare head requirements" %}
NFPA 13 requires a minimum of 6 spare heads for systems with under 300 heads, 12 for 300-1000 heads, and 24 for systems over 1000 heads. The spare cabinet must contain at least two heads of each type and temperature rating installed in the building, along with a listed head wrench.
{% /callout %}
