---
title: Thrust Block Calculator
nextjs:
  metadata:
    title: Thrust Block Calculator
    description: Calculate thrust block bearing area for underground fire service mains — pipe size, fitting type, soil type, and safety factor.
---

Calculate the required thrust block bearing area for underground fire service main fittings. Select the pipe size, fitting type, soil conditions, and safety factor to determine the block dimensions.

{% thrust-block-calc /%}

---

## How it works

The calculator uses the formula:

**A = (T x SF) / S**

Where A is the required bearing area (sq ft), T is the thrust force at the fitting (lbs), SF is the safety factor, and S is the soil bearing capacity (psf).

- Thrust forces are based on standard values at 200 psi test pressure and scale proportionally for other pressures
- Soil bearing capacities are conservative estimates — verify with a geotechnical report for critical installations
- The safety factor of 1.5 is standard practice; some engineers use 2.0 for poor soils

## When to use

- Sizing thrust blocks during underground design
- Verifying field conditions match design assumptions
- Comparing thrust block vs. restrained joint options
- Quick estimates for bid preparation

{% callout type="warning" title="Thrust blocks must bear against undisturbed soil" %}
Backfill material provides virtually no lateral resistance. The bearing face of the thrust block must be poured directly against the trench wall. If soil conditions are questionable, consider restrained joints instead. See [Underground Piping](/docs/underground) for full design guidance.
{% /callout %}

## Related references

- [Underground Piping](/docs/underground) — thrust restraint design, soil bearing tables, hydrostatic testing
- [Water Supply Sources](/docs/water-supply) — water main connections and supply analysis
