---
title: Pipe Weight Calculator
nextjs:
  metadata:
    title: Pipe Weight Calculator
    description: Calculate water-filled pipe weight and seismic brace load — pipe size, zone of influence, seismic design category, and importance factor.
---

Calculate the water-filled weight of Schedule 40 steel pipe and the resulting seismic brace load for a given zone of influence. Used for sizing lateral and longitudinal sway braces per NFPA 13 Chapter 18.

{% pipe-weight-calc /%}

---

## How it works

The calculator uses the NFPA 13 seismic brace load formula:

**Fpw = Cp x Ip x Wp x 1.15**

Where Fpw is the horizontal design force (lbs), Cp is the seismic coefficient, Ip is the importance factor, Wp is the water-filled pipe weight in the zone (lbs), and 1.15 accounts for fittings and valves.

- Pipe weights are for Schedule 40 steel per ANSI/ASME B36.10M
- Cp values are from NFPA 13 Table 18.5.3.2 / ASCE 7 Table 13.6-1
- The 1.15 multiplier covers typical inline fittings — add additional weight for large valves, FDCs, or heavy devices

## When to use

- Sizing sway braces during seismic design
- Verifying manufacturer brace assembly ratings against calculated loads
- Checking hanger point loads on structure
- Quick estimates for seismic brace material take-off

{% callout type="warning" title="Branch line exemptions" %}
Branch lines smaller than 2-1/2" are exempt from sway bracing (lateral and longitudinal) per NFPA 13. This calculator is primarily for mains and cross mains. See [Seismic Bracing](/docs/seismic-bracing) for complete exemption rules and fastener requirements.
{% /callout %}

## Related references

- [Seismic Bracing](/docs/seismic-bracing) — brace spacing, exemptions, clearances, fastener capacity
- [Hangers, Bracing, and Restraints](/docs/hangers-bracing-restraints) — hanger types and support requirements
