---
title: Coordination with Other Trades
nextjs:
  metadata:
    title: Coordination with Other Trades
    description: MEP coordination for fire sprinkler systems — BIM workflows, trade priority, conflict resolution, and field coordination practices.
---

Fire sprinkler piping shares ceiling space with HVAC ductwork, electrical conduit, plumbing, cable trays, and structural elements. Coordination is the process of making all of these systems fit together without conflicts. Poor coordination leads to costly field changes, project delays, and obstruction issues. {% .lead %}

---

## Why coordination matters

The ceiling space above a finished ceiling or below a roof deck is a shared resource. Every mechanical, electrical, and plumbing (MEP) system competes for the same vertical and horizontal space. Without proactive coordination:

- Pipes get installed in the path of ductwork
- Sprinkler heads end up below obstructions
- Field changes drive up labor costs and delay the schedule
- Change orders erode project margins

Good coordination catches conflicts on the screen instead of in the field, where fixes cost 5-10 times more.

{% callout type="note" title="Early coordination saves the most money" %}
The earlier coordination begins in the project timeline, the less it costs. Changes on paper are nearly free; changes during rough-in cost labor and materials; changes after ceilings are installed require demolition and rework.
{% /callout %}

---

## BIM coordination

Building Information Modeling (BIM) has become the standard coordination method on mid-to-large commercial and institutional projects.

### The coordination model

Each trade creates a 3D model of their system:
- **Structural** — steel, concrete, openings
- **Mechanical** — ductwork, equipment, piping
- **Electrical** — conduit, cable tray, panels, large junction boxes
- **Plumbing** — waste/vent piping, domestic water
- **Fire protection** — sprinkler mains, branch lines, heads, hangers, braces

These models are combined into a coordination (federated) model and checked for clashes using software like Navisworks, BIM 360 Glue, or Solibri.

### Clash detection

Clash detection software identifies every location where two or more systems occupy the same space. Clashes are categorized as:

- **Hard clash** — physical interference, two objects in the same space
- **Soft clash** — clearance violation, objects too close to maintain required access or clearance (e.g., sprinkler head within obstruction distance of a duct)
- **Workflow clash** — construction sequence issues (e.g., cannot install pipe after duct is in place)

{% figure src="/placeholder-diagram.svg" alt="BIM coordination model" caption="Combined coordination model showing structural, mechanical, electrical, plumbing, and fire protection systems in shared ceiling space" /%}

### Coordination meetings

Regular coordination meetings (typically weekly or bi-weekly) bring all trades together to resolve clashes:

1. Review new clashes from the latest model updates
2. Assign ownership — who moves their system to resolve each clash?
3. Follow routing priority rules (see below)
4. Update models to reflect resolutions
5. Verify resolutions in the next round of clash detection

---

## Routing priority

When two systems conflict, a general priority hierarchy determines which system moves:

1. **Gravity-dependent systems** — plumbing waste and storm drain piping must maintain slope and cannot easily be rerouted. These generally have highest priority.
2. **Large ductwork** — main trunk ducts are difficult and expensive to reroute. They typically hold position.
3. **Sprinkler mains and cross mains** — fire protection mains require specific clearances and routing, but have some flexibility.
4. **Electrical conduit and cable tray** — generally the most flexible and easiest to reroute.
5. **Small branch piping** — sprinkler branch lines and small plumbing can usually be adjusted with minor layout changes.

{% callout type="warning" title="Routing priority is a guideline, not a contract" %}
Routing priority is a practical convention, not an NFPA requirement. On every project, there will be exceptions. The goal is to minimize total rework cost — sometimes moving a sprinkler main is cheaper than rerouting a large duct.
{% /callout %}

---

## Key coordination issues for fire protection

### Clearance from obstructions

The primary coordination concern for sprinkler systems is maintaining required clearance between sprinkler heads and obstructions (see [Obstructions to Spray](/docs/obstructions)). During coordination:

- Flag any duct, conduit, or equipment that falls within the obstruction zone of a sprinkler head
- Verify that moving sprinkler pipe to avoid a duct clash does not create a new obstruction issue at the heads
- Check that relocated heads still meet spacing and coverage requirements

### Ceiling space allocation

On tight projects, the available ceiling depth is limited. Typical vertical layering from the deck down:

1. Structure (bar joists, beams, deck)
2. Sprinkler mains (hung immediately below structure)
3. Large ductwork
4. Electrical conduit and cable tray
5. Sprinkler branch lines (between or below ducts)
6. Sprinkler heads (projecting below the ceiling or flush with ceiling tiles)

This layering varies by project, but the general principle is that sprinkler mains route above large ducts, and branch lines weave between or below ducts to position heads correctly.

### Penetrations

Where sprinkler piping passes through rated walls, floors, or other fire barriers:
- Coordinate the penetration location with the structural and architectural teams
- Provide adequate clearance for firestopping (especially in seismic zones where 2-inch clearance is required)
- Confirm that the penetration location does not conflict with structural reinforcement

---

## Shop drawing review

Before fabrication, each trade reviews the other trades' shop drawings to catch conflicts that the BIM model may have missed or that arose from changes after the coordination model was finalized.

### What to look for

When reviewing other trades' shop drawings:
- Ductwork or pipe that routes through planned sprinkler pipe paths
- Equipment installed in locations that create sprinkler obstruction issues
- Structural changes (added beams, relocated columns) that affect hanger attachment points
- Ceiling height changes that affect head positioning

### RFIs

When a conflict cannot be resolved through trade-to-trade coordination, a Request for Information (RFI) is submitted to the general contractor or design team. RFIs should:
- Clearly describe the conflict with plan references
- Propose a resolution (or two options)
- Include a sketch or markup showing the issue and proposed fix
- Flag any cost or schedule impact

{% figure src="/placeholder-diagram.svg" alt="RFI workflow" caption="Typical RFI process from conflict identification through resolution and incorporation into revised shop drawings" /%}

---

## Field coordination

Even with excellent BIM coordination, field conditions differ from the model. Effective field coordination practices include:

### Pre-installation walkthrough

Before starting rough-in, walk the actual space and compare it to the coordination model:
- Are beams, columns, and openings where the model shows them?
- Has another trade already installed something that conflicts?
- Are there unexpected conditions (existing piping, structural modifications)?

### Real-time resolution

In the field, minor conflicts are resolved on the spot between foremen. This requires:
- Understanding what can be adjusted without affecting code compliance
- Knowing which changes require engineering review (pipe size changes, head relocations that affect coverage or calculations)
- Documenting all field changes on as-built drawings

### As-built documentation

Every field change should be marked up on the working drawings. These as-builts become the basis for the final record drawings submitted to the building owner and AHJ at project closeout. Failure to document field changes creates problems during future renovations and ITM inspections.

{% callout type="note" title="Communication prevents conflicts" %}
The most effective coordination tool is not software — it is regular, direct communication between trade foremen on the job site. A five-minute conversation at the morning coordination meeting can prevent a full day of rework.
{% /callout %}
