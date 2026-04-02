---
title: Plan Review and Approvals
nextjs:
  metadata:
    title: Plan Review and Approvals
    description: AHJ plan review process — submittal requirements, acceptance testing procedures, hydrostatic test criteria, and as-built documentation.
---

## Acceptance testing quick reference

All tests per NFPA 13, Chapter 27. Confirm AHJ requirements before scheduling — some jurisdictions add tests or modify criteria.

| Test | Requirement | Duration | Acceptance Criteria |
| --- | --- | --- | --- |
| Hydrostatic (wet pipe) | 200 psi or 50 psi above max working pressure, whichever is greater | 2 hours | No visible leaks, no pressure drop |
| Hydrostatic (dry pipe) | 200 psi or 50 psi above max working pressure | 2 hours | No visible leaks, no pressure drop |
| Air test (dry/preaction, pre-2019) | 40 psi | 24 hours | Max 1.5 psi drop |
| Air test (dry/preaction, 2019+) | System operating pressure | 2 hours | Max 3 psi drop |
| Main drain test | Fully open main drain, record static and residual | N/A | Compare to original flow test data |
| Inspector's test | Open most remote inspector's test connection | N/A | Waterflow alarm activates within 90 seconds |
| Trip test (dry valve) | Trip the dry valve | N/A | Water to inspector's test in 60 seconds |
| Trip test (preaction) | Activate detection and trip valve | N/A | Water delivery per system design |
| Alarm test | Activate all alarm devices | N/A | All alarms received at FACP and central station |
| Antifreeze test | Verify solution concentration | N/A | Concentration within listed range (refractometer) |

{% callout type="warning" %}
Hydrostatic test pressure must be maintained for the full 2 hours. If the system cannot hold pressure, do not attempt to compensate by re-pumping during the test. Find and fix the leak.
{% /callout %}

**Test preparation checklist:**

- [ ] All piping complete and supported
- [ ] All heads installed (or test plugs in place with AHJ approval)
- [ ] FDC connections capped
- [ ] Gauges installed at riser and at test location
- [ ] Drain path established for inspector's test
- [ ] FACP and monitoring in place for alarm tests
- [ ] AHJ and/or third-party inspector scheduled

---

## FM Global vs. NFPA 13 — key differences

Projects with FM Global insurance often have requirements that exceed NFPA 13. Identify FM involvement early.

| Requirement | NFPA 13 | FM Global |
| --- | --- | --- |
| Governing documents | NFPA 13 standard | FM Data Sheets (DS 2-0, 3-26, 8-9, etc.) |
| Design density | Per standard tables/curves | Often higher than NFPA 13, especially for storage |
| Storage protection | Chapters 20-26 | DS 8-9 — frequently more conservative |
| Water supply safety margin | 10 psi typical practice | May require 15-25 psi margin depending on data sheet |
| Component approval | UL Listed | FM Approved (separate listing) |
| Sprinkler heads | Any UL listed head meeting design | FM Approved heads required — not all UL heads are FM Approved |
| Rack storage | In-rack per NFPA 13 tables | DS 8-9 may require additional in-rack levels |
| Hydraulic calculations | NFPA 13 methodology | Same methodology, but higher demand points |
| Inspection frequency | NFPA 25 | FM may require more frequent inspections |
| Plan review | AHJ review | FM engineering review in addition to AHJ |

{% callout %}
FM Approved is not the same as UL Listed. A head can be UL Listed but not FM Approved. Always verify component approval status when FM Global is the insurer.
{% /callout %}

---

## Common plan review rejection reasons

| Rejection Item | Resolution |
| --- | --- |
| Flow test data expired (> 12 months) | Obtain new flow test per NFPA 291 |
| Hydraulic calc summary missing or incomplete | Include demand point, supply curve, safety margin, and node-by-node results |
| Head spacing exceeds listing | Verify against cut sheet; add or relocate heads |
| Obstruction rules not addressed | Apply Section 8.5.5; show obstruction analysis on plans |
| Seismic bracing missing in required zone | Add bracing per Section 18.5; show on plans with calculations |
| Hanger spacing exceeds table | Add hangers per Table 9.2.1 |
| Inadequate water supply | Increase pipe sizes, reduce friction loss, or request fire pump |
| Wrong hazard classification | Provide occupancy documentation; re-classify per Chapter 5 |
| Missing alarm device details | Show all waterflow switches, tamper switches, and FACP connections |
| Plans not signed/sealed | Obtain required professional signature per state licensing requirements |
| No commodity classification for storage | Classify per NFPA 13 Section 5.6; document on plans |
| Design area not shown on plans | Outline the hydraulically most remote area with dimensions |

---

## AHJ submittal requirements

Minimum submittal per NFPA 13 Chapter 29:

| Item | Required Content |
| --- | --- |
| Floor plans | All piping with sizes, head locations, hanger locations, brace locations, valve locations |
| Riser diagram | Valve arrangement, trim, component identification, connection to water supply |
| Hydraulic calculations | Complete node-by-node, with summary and supply/demand graph |
| Water supply data | Flow test with static, residual, and flow; date and location |
| Cut sheets | Every head, valve, and device used in the system |
| Material list | Pipe type, fitting type, hanger type, and quantities |
| System description | Hazard classification, design criteria, occupancy type, building construction |
| Seismic data | Seismic design category, bracing calculations, brace locations (if applicable) |

**Supplemental items that reduce review time:**

- Cover sheet with project info, contractor license, and point of contact
- Code edition and any local amendments referenced
- Previous review comments with responses (for re-submittals)
- Color-coded revisions for re-submittals

---

## Acceptance testing procedures

### Hydrostatic test — step by step

1. Close the main control valve
2. Connect test pump to the system (through FDC or test connection)
3. Fill system completely — all air must be vented from high points
4. Pump to test pressure (200 psi or 50 psi above max WP)
5. Close pump valve and record gauge reading
6. Wait 2 hours
7. Record final gauge reading
8. Walk all piping looking for visible leaks
9. Pass: no visible leaks and no pressure drop on gauge
10. Document results on test certificate

{% callout type="warning" %}
Temperature changes during testing affect pressure readings. A 10F temperature increase can raise pressure by approximately 10 psi in a closed system. Account for ambient conditions when evaluating results.
{% /callout %}

### Main drain test

1. Record static pressure at the system gauge
2. Fully open the main drain valve
3. Wait for pressure to stabilize (minimum 30 seconds)
4. Record residual pressure
5. Close drain valve
6. Compare static and residual to the original flow test data
7. A significant drop from original values indicates a water supply problem

### Inspector's test (wet systems)

1. Open the inspector's test connection at the hydraulically most remote point
2. Start a timer when the valve opens
3. Waterflow alarm must activate within 90 seconds
4. Verify alarm signal is received at the FACP
5. Verify alarm signal is transmitted to the central monitoring station
6. Close the test connection
7. Verify the system resets properly

---

## As-built documentation requirements

Per NFPA 13, as-built drawings must reflect actual installed conditions. This is a code requirement, not optional.

**As-built drawings must show:**

- [ ] All installed piping with actual sizes (including any field changes)
- [ ] All sprinkler head locations as installed
- [ ] All valve locations with identification numbers
- [ ] All hanger and brace locations as installed
- [ ] Any deviations from the approved plans — clearly marked
- [ ] Actual pipe lengths if they differ from approved plans
- [ ] Any field-routed piping not shown on original plans

**As-built documentation package:**

| Document | Recipient |
| --- | --- |
| As-built drawings | Building owner and AHJ |
| Hydraulic calculations (updated if design changed) | Building owner and AHJ |
| Test certificates (hydrostatic, alarm, drain) | Building owner and AHJ |
| Contractor's material and test certificate (NFPA 13 form) | Building owner and AHJ |
| Sprinkler head and device cut sheets | Building owner |
| Spare head cabinet inventory | Building owner |
| Operating instructions for valves and devices | Building owner |

{% callout %}
The spare head cabinet must contain a minimum of 6 spare heads for systems with under 300 heads, 12 for 300-1000, and 24 for over 1000 heads. Include a sprinkler wrench for each head type. This is an NFPA 13 requirement, not a suggestion.
{% /callout %}

---

## Inspection, testing, and maintenance handoff

At project closeout, the installing contractor should provide the building owner with:

| Item | Purpose |
| --- | --- |
| NFPA 25 summary | Inspection, testing, and maintenance schedule for all system components |
| Valve location chart | Quick reference for emergency shutdowns |
| Spare head cabinet location | So maintenance staff can find it |
| Fire pump operation manual | If applicable — includes test procedures |
| Monitoring company contact info | Central station and local alarm company |
| Contractor contact info | For service, repairs, and warranty issues |

{% callout type="warning" %}
Many building owners do not understand their NFPA 25 obligations. A brief handoff meeting explaining the inspection schedule prevents system neglect and potential liability for the installing contractor.
{% /callout %}
