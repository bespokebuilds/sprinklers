---
title: Plan Review and Approvals
nextjs:
  metadata:
    title: Plan Review and Approvals
    description: Navigating the sprinkler plan review process — AHJ submissions, common rejection reasons, acceptance testing, and as-built requirements.
---

Plan review is the process by which the Authority Having Jurisdiction (AHJ) verifies that a sprinkler system design complies with the applicable codes and standards before installation begins. A smooth plan review process depends on a complete, well-organized submittal. {% .lead %}

---

## The AHJ

The Authority Having Jurisdiction is the entity responsible for enforcing fire codes in a given jurisdiction. The AHJ may be:

- A city or county fire marshal's office
- A state fire marshal
- A third-party plan review agency contracted by the jurisdiction
- An insurance carrier (FM Global, for example, performs its own review for insured properties)

Different AHJs have different processes, turnaround times, and areas of focus. Some jurisdictions require electronic submittals; others still want paper sets. Confirm the AHJ's specific requirements before your first submission.

{% callout type="note" title="Know your reviewer" %}
If possible, establish a working relationship with the plan reviewers in your jurisdiction. Understanding their priorities and common concerns helps you produce submittals that get approved faster.
{% /callout %}

---

## The submittal package

NFPA 13 Chapter 29 specifies the minimum documentation required for plan submission. A complete package typically includes:

### Plans

- Floor plans showing all sprinkler piping with sizes, head locations, hanger locations, and devices
- Riser diagrams showing valve arrangement, test connections, drains, and flow/tamper switches
- Details: wall penetrations, seismic bracing, FDC connection, typical hanger details
- Legend and general notes including design criteria, hazard classification, and code edition

### Hydraulic calculations

- Complete node-by-node calculation from the most remote sprinkler to the water supply
- Summary sheet showing supply vs. demand comparison
- Water supply curve (graphic or tabular)
- Flow test data with date, location, and test authority

### Supporting documents

- **Cut sheets** — manufacturer data for every sprinkler head, valve, device, and listed component. Must show UL/FM listing marks.
- **Seismic calculations** — brace loads, fastener details, and layout (where applicable)
- **Material list** — pipe types, sizes, fittings, hanger types
- **Owner's certificate** — if required by the AHJ, a signed statement of the system's intended use and maintenance responsibility

{% figure src="/placeholder-diagram.svg" alt="Submittal package contents" caption="Components of a complete plan submittal — plans, calculations, water supply data, cut sheets, and supporting documents" /%}

---

## Common rejection reasons

Plan reviewers reject submittals for both completeness and compliance issues. The most frequent reasons:

### Incomplete submittals

- Missing hydraulic calculations or water supply data
- Missing cut sheets for sprinkler heads or valves
- No seismic details in a seismic zone
- Flow test data older than the allowed period (typically 12 months)
- Plans not signed or sealed by the required party

### Code compliance issues

- **Wrong hazard classification** — the most consequential error; everything downstream is wrong
- **Head spacing violations** — exceeding maximum coverage or maximum distance from walls
- **Obstruction issues** — heads too close to beams, ducts, or lights without proper clearance
- **Insufficient water supply** — demand exceeds supply, or inadequate margin
- **Missing coverage** — rooms or areas without sprinkler protection that should be covered
- **Wrong code edition** — designing to a newer or older edition than the AHJ has adopted

{% callout type="warning" title="Check the code edition" %}
One of the most avoidable rejection reasons is designing to the wrong edition of NFPA 13. Different editions have different requirements. Always confirm which edition the AHJ has adopted before starting design.
{% /callout %}

---

## Responding to review comments

When the AHJ returns comments, a professional and organized response accelerates approval:

### Best practices

- Respond to every comment — even if you disagree, explain your rationale with code references
- Use a numbered response matrix that corresponds to the reviewer's comment numbers
- Include revised plan sheets that clearly show the changes (revision clouds, delta marks)
- Highlight changes on the hydraulic calculations if the calcs were affected
- Resubmit as a complete package, not piecemeal corrections

### Disagreements with the reviewer

If you believe the reviewer's comment is incorrect:
- Cite the specific NFPA 13 section that supports your position
- Reference the NFPA 13 Handbook commentary if it clarifies the intent
- Be professional — the reviewer has the authority, but they are also open to well-supported arguments
- If the disagreement cannot be resolved, request a formal interpretation from NFPA or escalate through the AHJ's appeals process

---

## Insurance carrier review

On many commercial and industrial projects, the property insurer performs a parallel review. The most common insurer conducting fire sprinkler reviews is FM Global.

### FM Global

FM Global applies their own standards (FM Global Data Sheets) which often exceed NFPA 13 requirements:
- Stricter storage protection criteria
- Higher design densities for certain hazards
- Additional requirements for water supplies and fire pumps
- Specific equipment and component approvals (FM Approved vs. UL Listed)

Compliance with both the AHJ and the insurer's requirements is necessary. Where they conflict, the more restrictive requirement governs.

---

## Acceptance testing

After installation, the system must pass acceptance testing before the AHJ grants final approval. Per NFPA 13 Chapter 30:

### Hydrostatic test

- Pressurize the system to **200 psi** (or 50 psi above maximum working pressure, whichever is greater)
- Maintain for **2 hours**
- No visible leaks, no pressure drop beyond what can be attributed to temperature change

### Flush test

- Flush all underground and aboveground piping to remove construction debris
- Document flow rates and water clarity

### Trip test (dry, preaction, deluge systems)

- Activate the system and verify the valve opens correctly
- Measure trip time and water delivery time
- Verify alarm devices operate

### Alarm test

- Test all flow switches, tamper switches, and supervisory devices
- Verify signals reach the fire alarm control panel and/or central monitoring station
- Test the water motor gong (if installed)

### Drain test

- Open the main drain and record the pressure readings
- Compare to the expected pressure from the water supply
- This serves as a baseline for future NFPA 25 annual drain tests

{% figure src="/placeholder-diagram.svg" alt="Acceptance testing checklist" caption="Key acceptance tests required before AHJ sign-off — hydrostatic, flush, alarm, and drain tests" /%}

---

## As-built drawings

After the system is installed and accepted, the contractor must provide as-built (record) drawings that show the system as it was actually installed, including all field changes from the original design.

### Requirements

NFPA 13 requires that as-built drawings:
- Accurately reflect the installed conditions
- Include all pipe sizes, head locations, valve locations, and device locations
- Note any deviations from the approved plans
- Be provided to the building owner and, in many jurisdictions, to the AHJ

As-built drawings are essential for future maintenance, renovations, and NFPA 25 inspections. A system without accurate record drawings is difficult to inspect and dangerous to modify.

{% callout type="note" title="As-builts start on day one" %}
Do not wait until the end of the project to create as-built drawings. Mark up changes on the working drawings as they happen in the field. Trying to remember what changed weeks or months later produces inaccurate records.
{% /callout %}
