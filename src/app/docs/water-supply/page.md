---
title: Water Supply Sources
nextjs:
  metadata:
    title: Water Supply Sources
    description: Water supply analysis for fire sprinkler systems — flow test calculations, supply curve plotting, pressure loss data, and adequacy determination.
---

Flow test data, supply curve math, and device losses — everything needed to determine whether a water supply can meet sprinkler system demand. {% .lead %}

## Flow test calculation

A fire flow test produces three values: **static pressure** (no flow), **residual pressure** (at measured flow), and **measured flow** (gpm). From these, calculate available flow at any residual pressure using the N^1.85 relationship.

### The supply curve formula

The pressure drop from static follows the power-law relationship:

**Q_available = Q_measured x [(P_static - P_desired) / (P_static - P_residual)]^0.54**

Where:
- **Q_available** = available flow at desired residual pressure (gpm)
- **Q_measured** = flow measured during test (gpm)
- **P_static** = static pressure (psi)
- **P_desired** = desired residual pressure (psi)
- **P_residual** = residual pressure measured during test (psi)
- **0.54** = exponent derived from 1/1.85

{% callout %}
The exponent 0.54 comes from the Hazen-Williams relationship. Some references use 0.5 as a conservative simplification — this underestimates available flow slightly.
{% /callout %}

### Worked example

**Given:** Static = 85 psi, Residual = 72 psi at 1,100 gpm. Find available flow at 20 psi residual.

**Step 1** — Identify known values:
- P_static = 85 psi
- P_residual = 72 psi
- Q_measured = 1,100 gpm
- P_desired = 20 psi

**Step 2** — Calculate pressure drop ratio:
**(85 - 20) / (85 - 72) = 65 / 13 = 5.0**

**Step 3** — Apply the exponent:
**5.0^0.54 = 2.38**

**Step 4** — Calculate available flow:
**Q_available = 1,100 x 2.38 = 2,618 gpm**

**Result:** Approximately **2,618 gpm** is available at 20 psi residual.

{% callout type="warning" %}
Always plot the full supply curve — do not rely on a single calculated point. The curve is nonlinear and real-world conditions may differ from the mathematical model at extreme flows.
{% /callout %}

### Plotting the supply curve

To plot, calculate Q_available at multiple desired residual pressures (e.g., 20, 30, 40, 50, 60, 70 psi) and plot flow (x-axis) vs. pressure (y-axis) on N^1.85 paper or equivalent software.

| Desired Residual (psi) | Pressure Drop Ratio | Ratio^0.54 | Available Flow (gpm) |
|---|---|---|---|
| 70 | 1.15 | 1.08 | 1,188 |
| 60 | 1.92 | 1.45 | 1,595 |
| 50 | 2.69 | 1.75 | 1,925 |
| 40 | 3.46 | 2.01 | 2,211 |
| 30 | 4.23 | 2.21 | 2,431 |
| 20 | 5.00 | 2.38 | 2,618 |

{% figure src="/placeholder-diagram.svg" alt="Water supply curve plotted on N^1.85 graph paper showing static pressure, test point, and calculated curve" caption="Supply curve plotted from flow test data. The system demand point must fall below and to the left of this curve." /%}

## Elevation correction

Water pressure changes at **0.433 psi per foot** of elevation difference. Pressure decreases when the sprinkler system is above the test point and increases when below.

| Elevation Change (ft) | Pressure Adjustment (psi) | Direction |
|---|---|---|
| 5 | 2.17 | Subtract if above source |
| 10 | 4.33 | Subtract if above source |
| 15 | 6.50 | Subtract if above source |
| 20 | 8.66 | Subtract if above source |
| 30 | 12.99 | Subtract if above source |
| 40 | 17.32 | Subtract if above source |
| 50 | 21.65 | Subtract if above source |

{% callout %}
Measure elevation from the flow test gauge location to the highest sprinkler in the system, not to the roof or ground floor. Per NFPA 13, adjust both the static and residual pressures at the source.
{% /callout %}

## Device pressure losses

Account for every device between the water source and the sprinkler system when determining available pressure.

| Device | Typical Pressure Loss (psi) | Notes |
|---|---|---|
| DCDA backflow preventer | 8-12 | Double check detector assembly |
| RPDA backflow preventer | 12-15 | Reduced pressure detector assembly |
| DCVA backflow preventer | 5-8 | Double check valve assembly |
| Alarm check valve | 5-10 | Wet system riser |
| Dry pipe valve | 5-15 | Varies significantly by model |
| Deluge valve | 5-10 | Open when activated |
| Butterfly valve (open) | 1-3 | Fully open position |
| OS&Y gate valve (open) | 0.5-1 | Fully open, minimal loss |
| Compound meter | Varies | Use manufacturer loss curves for flow rate |
| Turbine meter | Varies | Use manufacturer loss curves for flow rate |

{% callout type="warning" %}
Always use the manufacturer's published loss data for the specific device model and flow rate. The values above are planning-level estimates only. Backflow preventer losses increase significantly with age and fouling — test annually per NFPA 25.
{% /callout %}

## Safety margin guidelines

The system demand curve must fall below and to the left of the adjusted supply curve with adequate margin.

| Authority / Standard | Minimum Safety Margin | Notes |
|---|---|---|
| Typical industry practice | 10 psi | Between supply curve and demand point |
| FM Global (Data Sheet 3-0) | 10 psi or 10% of demand | Whichever is greater |
| Municipal AHJ | Varies | Some require 20% margin |
| Insurance carrier | Varies | May exceed code minimums |

Key considerations:
- Flow test data reflects conditions at the time of the test — municipal pressures fluctuate seasonally and with time of day
- NFPA 291 recommends testing during peak demand periods for the water utility
- Supply degradation over time (tuberculation, new development) can reduce available flow
- Consider future building additions that may increase system demand

{% callout %}
Per NFPA 13, Section 27.2 — flow test data more than 12 months old should be verified with the water utility or retested before final design submission.
{% /callout %}

## Water supply adequacy determination

After plotting the supply curve and the system demand point, confirm:

1. **Demand point is below the supply curve** at the required flow rate
2. **Safety margin** meets the AHJ and insurance requirements
3. **Elevation corrections** are applied from the test point to the highest sprinkler
4. **All device losses** are subtracted from the supply side
5. **Hose stream demand** is added per NFPA 13 Table 11.2.3.1.2

If the supply is inadequate, options include: fire pump (see [Fire Pumps](/docs/pumps)), dedicated water storage tank (see [Water Storage Tanks](/docs/water-tanks)), or connecting to a second water main.
