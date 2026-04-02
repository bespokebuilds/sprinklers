---
title: Friction Loss Calculator
nextjs:
  metadata:
    title: Friction Loss Calculator
    description: Hazen-Williams friction loss calculator for fire sprinkler pipe — select pipe material, size, flow, and length to calculate pressure loss per foot and total loss.
---

Calculate friction loss in fire sprinkler piping using the Hazen-Williams formula. Select your pipe material, size, enter the flow rate and pipe length, and the calculator returns the loss per foot, total loss, and pipe velocity.

{% friction-loss-calc /%}

---

## How it works

This calculator uses the Hazen-Williams formula:

**p = (4.52 x Q^1.85) / (C^1.85 x d^4.87)**

- Pipe internal diameters are from ANSI/ASME B36.10M (steel), ASTM F442 (CPVC), and ASTM B88 (copper)
- C-factors default to NFPA 13 values: 120 for steel, 150 for CPVC and copper
- Override the C-factor field for aged pipe or special conditions (e.g., C=100 for corroded steel)

## When to use

- Quick-checking a single pipe segment during design
- Verifying software output for a specific run
- Estimating whether a pipe size will work before running full calcs
- NICET exam preparation — practice Hazen-Williams problems

{% callout type="warning" title="Not a substitute for full hydraulic calculations" %}
This tool calculates friction loss for a single pipe segment. A complete NFPA 13 hydraulic calculation requires node-by-node analysis of the entire system, including fittings (equivalent pipe lengths), elevation changes, and device losses. See [Hydraulic Calculations](/docs/hydraulic-calculations) for the full methodology.
{% /callout %}

## Related references

- [Hydraulic Calculations](/docs/hydraulic-calculations) — equivalent pipe length tables, K-factors, worked examples
- [Pipe and Fittings](/docs/pipe-and-fittings) — pipe material properties and joining methods
