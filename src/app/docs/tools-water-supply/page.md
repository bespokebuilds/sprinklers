---
title: Water Supply Calculator
nextjs:
  metadata:
    title: Water Supply Calculator
    description: Calculate available flow from fire flow test data — plot supply curves, apply elevation corrections, and determine water supply adequacy.
---

Calculate available flow at any desired residual pressure from fire flow test data. Enter your flow test results and the calculator plots the supply curve with elevation correction.

{% water-supply-calc /%}

---

## How it works

The calculator uses the N^1.85 relationship:

**Q_available = Q_measured x [(P_static - P_desired) / (P_static - P_residual)]^0.54**

- The 0.54 exponent is derived from 1/1.85 (the inverse of the Hazen-Williams exponent)
- Elevation adjustment subtracts 0.433 psi per foot of elevation above the flow test point
- The supply curve table shows available flow at multiple residual pressures for plotting

## When to use

- Initial water supply analysis when receiving flow test data
- Comparing supply adequacy across multiple flow test locations
- Determining whether a fire pump is needed before starting full design
- Plotting supply curves for the hydraulic calculation summary

{% callout type="note" title="Flow test data age" %}
Most AHJs require flow test data less than 12 months old. Municipal supply conditions change with seasonal demand, new development, and system maintenance. See [Water Supply Sources](/docs/water-supply) for complete supply analysis methodology.
{% /callout %}

## Related references

- [Water Supply Sources](/docs/water-supply) — flow test procedures, device losses, safety margins
- [Hydraulic Calculations](/docs/hydraulic-calculations) — demand calculations and supply comparison
- [Fire Pumps](/docs/pumps) — when supply is insufficient
