---
title: Coordination with Other Trades
nextjs:
  metadata:
    title: Coordination with Other Trades
    description: MEP coordination reference — routing priority, clearance requirements, BIM standards, and conflict resolution procedures.
---

## Routing priority

When systems compete for ceiling space, the system that is hardest to reroute gets priority. This table reflects standard MEP coordination practice.

| Priority | System | Reason |
| --- | --- | --- |
| 1 | Gravity drainage (plumbing waste, storm) | Cannot be rerouted — requires continuous slope |
| 2 | Large ductwork (trunk ducts) | Expensive and difficult to reroute; large cross-section |
| 3 | Sprinkler mains and cross mains | Code clearances required; structural attachment constraints |
| 4 | Plumbing pressure pipe | Flexible routing, but limited by fixture connections |
| 5 | Electrical conduit and cable tray | Most flexible routing among large systems |
| 6 | Small branch piping (all trades) | Easily adjusted in the field |

{% callout %}
Sprinkler branch lines are Priority 6 (small branch piping). Mains and cross mains are Priority 3. Do not confuse the two during coordination — branch lines should yield to ductwork, not the other way around.
{% /callout %}

---

## Typical ceiling space allocation

From the deck down, systems should be layered in this order. Deviations require coordination sign-off.

| Layer | System | Typical Depth |
| --- | --- | --- |
| 1 | Structure (bar joists, beams, deck) | Varies |
| 2 | Sprinkler mains and cross mains | 4"-8" below bottom of structure |
| 3 | Large ductwork (trunk and branch) | 12"-24" depending on tonnage |
| 4 | Electrical conduit and cable tray | 4"-6" |
| 5 | Sprinkler branch lines | Between or below ductwork |
| 6 | Sprinkler heads | At or below finished ceiling plane |

{% callout type="warning" %}
Maintain minimum 1" clearance between sprinkler pipe and any other system. Where pipe crosses above ductwork, verify the deflector-to-ceiling distance is still met at the head location.
{% /callout %}

**Critical sprinkler clearance requirements:**

| Clearance | Requirement | Reference |
| --- | --- | --- |
| Deflector to ceiling | 1" to 12" (standard spray) | NFPA 13 Section 8.6.2 |
| Head to obstruction | Three-times rule or Section 8.5.5 tables | NFPA 13 Section 8.5 |
| Pipe to structure | Per hanger attachment — no direct contact with dissimilar metals | NFPA 13 Section 9.2 |
| Branch line to duct | Min 1" clearance | Good practice |
| Head to diffuser | 24" minimum to avoid cold air affecting activation | NFPA 13 Section 8.6.5 |

---

## BIM LOD requirements for fire protection

| LOD | Phase | What Is Modeled | Accuracy |
| --- | --- | --- | --- |
| 200 | Schematic design | Approximate pipe routing, riser locations | +/- 24" |
| 300 | Design development | Accurate pipe sizes, head locations, main routing | +/- 6" |
| 350 | Coordination | Hangers, braces, clearances, fittings | +/- 1" |
| 400 | Fabrication | Cut lengths, piece marks, thread engagement | Exact |

**LOD 350 is the coordination standard.** Most clash detection happens at this level. Sprinkler models at LOD 300 will not catch hanger and brace conflicts.

**Minimum BIM content at LOD 350:**

- All pipe (mains, cross mains, branch lines) with correct OD
- All fittings (tees, elbows, reducers, couplings)
- All heads with correct deflector position
- All hangers with rod length and attachment point
- All seismic braces with correct angle and attachment
- Valve assemblies with operator clearance envelopes

{% figure src="/placeholder-diagram.svg" alt="BIM coordination model showing sprinkler pipe routing through ductwork and structural elements" caption="LOD 350 coordination model — sprinkler mains above ductwork, branch lines threaded between mechanical and electrical systems." /%}

---

## Clash detection and resolution

| Clash Type | Definition | Typical Owner | Resolution |
| --- | --- | --- | --- |
| Hard clash | Physical intersection of two systems | Lower-priority system moves | Adjust routing in BIM, rerun calcs if pipe lengths change |
| Soft clash | Systems within minimum clearance tolerance | Both trades review | Adjust one or both systems to meet clearance |
| Workflow clash | Two systems need to be installed in the same sequence | GC / project manager | Adjust installation schedule or access plan |
| Code clash | Clearance or coverage requirement violated | System with the code requirement | Redesign to meet code; cannot be waived |

**Resolution workflow:**

1. Automated clash detection (Navisworks, BIM 360, Revizto, etc.)
2. Filter and categorize — remove duplicates, group by area
3. Assign to responsible trade
4. Resolve in BIM model within coordination cycle (typically weekly)
5. Re-run clash detection to verify resolution
6. Document in clash report — include resolution description

{% callout %}
Sprinkler clashes that affect head coverage or deflector distance are code clashes, not negotiable soft clashes. The sprinkler head location and clearance take precedence over aesthetics or other trade preferences.
{% /callout %}

---

## Field coordination

BIM coordination catches most conflicts, but field conditions always introduce new ones.

**Common field conflicts and responses:**

| Conflict | Response |
| --- | --- |
| Steel differs from structural model | Re-measure, update model, adjust hangers and braces |
| Duct installed in sprinkler main path | Evaluate reroute vs. duct modification — escalate per priority table |
| Ceiling height changed | Verify deflector distance; may require different head type or arm-over |
| Penetration not cored/sleeved | Coordinate with GC for coring schedule before pipe installation |
| Hanger point conflicts with deck fluting | Use beam clamps or alternative attachment per NFPA 13 Section 9.2 |
| Light fixture blocks spray pattern | Relocate head or fixture; re-verify coverage |

**RFI triggers for sprinkler contractors:**

- Any structural condition that differs from the coordination model
- Ceiling height changes exceeding 2 inches from design
- New obstructions not in the BIM model
- Changes to hazard classification or occupancy use
- Duct or equipment additions after coordination sign-off

---

## Coordination meeting checklist

Standard agenda for weekly MEP coordination:

- [ ] Review unresolved clashes from previous cycle
- [ ] Walk through new model areas (by building section or floor)
- [ ] Identify upcoming areas for installation — confirm BIM is complete
- [ ] Review RFIs affecting coordination
- [ ] Confirm ceiling heights and soffit locations with architect
- [ ] Document all resolutions with responsible party and deadline
- [ ] Set next meeting date and areas to review
