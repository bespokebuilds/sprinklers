---
title: Hydraulic Calculations
nextjs:
  metadata:
    title: Hydraulic Calculations
    description: "NFPA 13 hydraulic calculation reference — Hazen-Williams formula, equivalent pipe lengths, K-factors, pipe dimensions, and worked examples."
---

Quick reference for NFPA 13 hydraulic calculations: friction loss formulas, equivalent pipe lengths, K-factors, pipe dimensions, and a complete worked branch line example. {% .lead %}

---

{% callout type="note" title="Interactive tool available" %}
Use the [Friction Loss Calculator](/docs/tools-friction-loss) to quickly calculate Hazen-Williams friction loss for any pipe material, size, and flow rate.
{% /callout %}

## Hazen-Williams friction loss formula

All NFPA 13 hydraulic calculations use Hazen-Williams:

**p = (4.52 x Q^1.85) / (C^1.85 x d^4.87)**

| Variable | Unit | Description |
| --- | --- | --- |
| p | psi/ft | Friction loss per foot of pipe |
| Q | gpm | Flow rate |
| C | -- | Pipe roughness coefficient |
| d | in | Actual internal diameter of pipe |

{% callout type="note" %}
The 4.52 constant applies to US customary units only. For SI (bar/m, L/min, mm), use 6.05 x 10^5.
{% /callout %}

---

## C-factor values

| Pipe Material | C-Factor |
| --- | --- |
| Black steel (dry, preaction, deluge) | 100 |
| Black steel (wet, new) | 120 |
| Galvanized steel | 120 |
| Cast iron | 100 |
| Cement-lined cast iron | 140 |
| Copper | 150 |
| CPVC | 150 |
| Stainless steel | 150 |

### C-factor adjustment multipliers

When equivalent pipe length tables are based on C=120 (the NFPA 13 default), multiply table values by these factors for other C-values:

| C-Factor | Multiplier |
| --- | --- |
| 100 | 1.51 |
| 120 | 1.00 (base) |
| 130 | 0.851 |
| 140 | 0.714 |
| 150 | 0.713 |

---

## Equivalent pipe length table — Schedule 40 steel, C=120

Per NFPA 13 Table 28.2.3.1.1. Values in feet of equivalent pipe.

| Fitting | 1" | 1-1/4" | 1-1/2" | 2" | 2-1/2" | 3" | 4" | 6" | 8" |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 90 deg Elbow | 2 | 3 | 3 | 5 | 6 | 7 | 10 | 14 | 18 |
| 45 deg Elbow | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 7 | 9 |
| Long-Turn 90 | 1 | 2 | 2 | 3 | 4 | 5 | 6 | 9 | 13 |
| Tee (flow turned) | 5 | 6 | 7 | 10 | 12 | 15 | 20 | 30 | 35 |
| Tee (flow straight) | 1 | 1 | 1 | 1 | 2 | 2 | 2 | 4 | 5 |
| Gate Valve | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 3 | 4 |
| Swing Check Valve | 5 | 7 | 9 | 11 | 14 | 16 | 22 | 32 | 45 |
| Butterfly Valve | -- | -- | -- | 6 | 7 | 10 | 12 | 10 | 12 |
| Alarm Check (grooved) | -- | -- | -- | -- | -- | -- | -- | 20 | 25 |

{% callout type="warning" %}
These values are for **Schedule 40 steel at C=120 only**. For CPVC, copper, or other materials, apply the C-factor multiplier above OR use manufacturer-specific equivalent length tables. Using steel fittings tables for plastic pipe will produce non-conservative results.
{% /callout %}

---

## K-factor reference

Q = K x sqrt(P), where Q = gpm and P = psi at the sprinkler.

| K-Factor | Nominal Orifice | Thread Size | Typical Application |
| --- | --- | --- | --- |
| K2.8 | 3/8" | 1/2" NPT | Residential, attic, concealed spaces |
| K4.2 | 7/16" | 1/2" NPT | Residential (NFPA 13D/13R) |
| K5.6 | 1/2" | 1/2" NPT | Standard spray -- most common |
| K8.0 | 17/32" | 3/4" NPT | Extended coverage, light/ordinary hazard |
| K11.2 | 5/8" | 3/4" NPT | EC, CMSA, smallest ESFR |
| K14.0 | 3/4" | 3/4" NPT | ESFR pendent, CMSA |
| K16.8 | -- | 3/4" NPT | ESFR pendent |
| K22.4 | -- | 1" NPT | ESFR pendent, CMSA |
| K25.2 | -- | 1" NPT | ESFR -- most common modern |
| K28.0 | -- | 1" NPT | ESFR (newest listings) |

### Quick flow/pressure lookup for K5.6

| Pressure (psi) | Flow (gpm) |
| --- | --- |
| 7 | 14.8 |
| 10 | 17.7 |
| 15 | 21.7 |
| 20 | 25.0 |
| 25 | 28.0 |
| 30 | 30.7 |
| 50 | 39.6 |

---

## Pipe internal diameter tables

### Schedule 40 steel

| Nominal Size | OD (in) | Wall (in) | ID (in) |
| --- | --- | --- | --- |
| 3/4" | 1.050 | 0.113 | 0.824 |
| 1" | 1.315 | 0.133 | 1.049 |
| 1-1/4" | 1.660 | 0.140 | 1.380 |
| 1-1/2" | 1.900 | 0.145 | 1.610 |
| 2" | 2.375 | 0.154 | 2.067 |
| 2-1/2" | 2.875 | 0.203 | 2.469 |
| 3" | 3.500 | 0.216 | 3.068 |
| 4" | 4.500 | 0.237 | 4.026 |
| 6" | 6.625 | 0.280 | 6.065 |
| 8" | 8.625 | 0.322 | 7.981 |

### Schedule 10 steel

| Nominal Size | OD (in) | Wall (in) | ID (in) |
| --- | --- | --- | --- |
| 3/4" | 1.050 | 0.083 | 0.884 |
| 1" | 1.315 | 0.109 | 1.097 |
| 1-1/4" | 1.660 | 0.109 | 1.442 |
| 1-1/2" | 1.900 | 0.109 | 1.682 |
| 2" | 2.375 | 0.109 | 2.157 |
| 2-1/2" | 2.875 | 0.120 | 2.635 |
| 3" | 3.500 | 0.120 | 3.260 |
| 4" | 4.500 | 0.120 | 4.260 |
| 6" | 6.625 | 0.134 | 6.357 |
| 8" | 8.625 | 0.148 | 8.329 |

### CPVC (SDR 13.5 -- BlazeMaster)

| Nominal Size | OD (in) | Wall (in) | ID (in) |
| --- | --- | --- | --- |
| 3/4" | 1.050 | 0.078 | 0.894 |
| 1" | 1.315 | 0.097 | 1.121 |
| 1-1/4" | 1.660 | 0.123 | 1.414 |
| 1-1/2" | 1.900 | 0.141 | 1.618 |
| 2" | 2.375 | 0.176 | 2.023 |
| 2-1/2" | 2.875 | 0.213 | 2.449 |
| 3" | 3.500 | 0.259 | 2.982 |

### Copper tube (Type L)

| Nominal Size | OD (in) | Wall (in) | ID (in) |
| --- | --- | --- | --- |
| 3/4" | 0.875 | 0.045 | 0.785 |
| 1" | 1.125 | 0.050 | 1.025 |
| 1-1/4" | 1.375 | 0.055 | 1.265 |
| 1-1/2" | 1.625 | 0.060 | 1.505 |
| 2" | 2.125 | 0.070 | 1.985 |
| 2-1/2" | 2.625 | 0.080 | 2.465 |
| 3" | 3.125 | 0.090 | 2.945 |

---

## Hose stream and duration requirements

Consolidated from NFPA 13, Section 19.2.3 and Table 19.2.3.1.2.

| Hazard Classification | Inside Hose (gpm) | Outside Hose (gpm) | Total Hose Stream (gpm) | Duration (min) |
| --- | --- | --- | --- | --- |
| Light Hazard | 0 or 100 | 0 or 100 | 100 | 30 |
| Ordinary Hazard Group 1 | 0 or 100 | 150 or 250 | 250 | 60 |
| Ordinary Hazard Group 2 | 0 or 100 | 150 or 250 | 250 | 60 |
| Extra Hazard Group 1 | 0 or 100 | 250 or 500 | 500 | 90 |
| Extra Hazard Group 2 | 0 or 100 | 250 or 500 | 500 | 90-120 |
| High-Piled Storage (ESFR) | -- | -- | 250 | 60 |
| High-Piled Storage (density/area) | -- | -- | 500 | 90-120 |

{% callout type="note" %}
ESFR systems use 250 gpm hose stream and 60-minute duration regardless of commodity class. This is a significant advantage over density/area storage designs.
{% /callout %}

---

## 2022 Edition: single-point design criteria

Starting with the 2022 edition of NFPA 13, the traditional density/area curves are replaced with single-point values for new system designs. The curves remain acceptable for existing systems and renovations.

### Table: single-point density and area (2022 edition)

| Hazard Classification | Density (gpm/sq ft) | Design Area (sq ft) |
| --- | --- | --- |
| Light Hazard | 0.10 | 1,500 |
| Ordinary Hazard Group 1 | 0.15 | 1,500 |
| Ordinary Hazard Group 2 | 0.20 | 1,500 |
| Extra Hazard Group 1 | 0.30 | 2,500 |
| Extra Hazard Group 2 | 0.40 | 2,500 |

{% callout type="warning" %}
Pre-2022 designs using density/area curves allowed trading density for area (higher density = smaller area). The 2022 single-point values eliminate this trade-off. If your project references an earlier edition, the curves still apply.
{% /callout %}

---

## Velocity pressure

Per NFPA 13 Section 28.2.5, velocity pressure can optionally be included:

**Pv = 0.001123 x Q^2 / d^4**

Where Pv = velocity pressure (psi), Q = flow (gpm), d = internal diameter (in).

Velocity pressure shifts pressure from static to dynamic. Most software includes it by default. It generally benefits systems with larger pipe sizes and higher flows.

**Pipe velocity**: v = Q / (2.448 x d^2). NFPA 13 recommends a maximum velocity of approximately 32 ft/s for above-ground pipe, though this is advisory, not mandatory.

---

## Worked example: 4-head branch line calculation

**Given conditions**:
- Hazard: Ordinary Hazard Group 1
- Density: 0.15 gpm/sq ft
- Coverage per sprinkler: 130 sq ft (10 ft x 13 ft spacing)
- Sprinkler: K5.6 standard spray pendent
- Pipe: Schedule 40 steel, C=120
- Branch line: 1" pipe from head 1 to head 2, 1-1/4" from head 2 to head 4
- Spacing between heads: 10 ft center-to-center
- Elevation: all heads at same level

{% figure src="/placeholder-diagram.svg" alt="Four-head branch line layout showing heads numbered 1 through 4 with pipe sizes and distances" caption="Branch line layout -- 4 heads at 10 ft spacing" /%}

### Step 1: Flow at the most remote sprinkler (Head 1)

Minimum required flow: Q = density x area = 0.15 x 130 = **19.5 gpm**

Required pressure at Head 1: P = (Q/K)^2 = (19.5/5.6)^2 = (3.482)^2 = **12.13 psi**

### Step 2: Friction loss from Head 1 to Head 2

Pipe: 1" Schedule 40 steel, ID = 1.049 in, length = 10 ft actual pipe + 2 ft equivalent (one tee, flow turned 90 from the branch through fitting) = **12 ft total equivalent length**.

{% callout type="note" %}
The fitting at Head 1 is a tee with flow turned if the branch tees off the cross main. For a standard branch line endpoint, there is typically just the sprinkler tee fitting. Use the 1" tee value of 5 ft if the branch changes direction at Head 1. For this example we use 2 ft for a coupling equivalent at the branch endpoint.
{% /callout %}

Friction loss per foot:
p = (4.52 x 19.5^1.85) / (120^1.85 x 1.049^4.87)

Calculate numerator: 19.5^1.85 = 236.9, so 4.52 x 236.9 = 1,070.8

Calculate denominator: 120^1.85 = 5,765.4 and 1.049^4.87 = 1.261, so 5,765.4 x 1.261 = 7,270.2

p = 1,070.8 / 7,270.2 = **0.1473 psi/ft**

Total friction loss, Head 1 to Head 2: 0.1473 x 12 = **1.77 psi**

### Step 3: Pressure and flow at Head 2

Available pressure at Head 2: 12.13 + 1.77 = **13.90 psi**

Flow at Head 2: Q = K x sqrt(P) = 5.6 x sqrt(13.90) = 5.6 x 3.728 = **20.9 gpm**

Cumulative flow in pipe between Head 2 and Head 3: 19.5 + 20.9 = **40.4 gpm**

### Step 4: Friction loss from Head 2 to Head 3

Pipe transitions to 1-1/4" Schedule 40, ID = 1.380 in, length = 10 ft actual + 6 ft equivalent (tee, flow turned) = **16 ft total**.

p = (4.52 x 40.4^1.85) / (120^1.85 x 1.380^4.87)

Numerator: 40.4^1.85 = 937.5, so 4.52 x 937.5 = 4,237.5

Denominator: 120^1.85 = 5,765.4 and 1.380^4.87 = 4.783, so 5,765.4 x 4.783 = 27,576.8

p = 4,237.5 / 27,576.8 = **0.1537 psi/ft**

Total friction loss, Head 2 to Head 3: 0.1537 x 16 = **2.46 psi**

### Step 5: Pressure and flow at Head 3

Available pressure at Head 3: 13.90 + 2.46 = **16.36 psi**

Flow at Head 3: Q = 5.6 x sqrt(16.36) = 5.6 x 4.045 = **22.7 gpm**

Cumulative flow: 40.4 + 22.7 = **63.1 gpm**

### Step 6: Friction loss from Head 3 to Head 4

Still 1-1/4" pipe, same equivalent length assumption = **16 ft**.

p = (4.52 x 63.1^1.85) / (120^1.85 x 1.380^4.87)

Numerator: 63.1^1.85 = 2,136.6, so 4.52 x 2,136.6 = 9,657.5

Denominator: 27,576.8 (same as above)

p = 9,657.5 / 27,576.8 = **0.3503 psi/ft**

Total friction loss, Head 3 to Head 4: 0.3503 x 16 = **5.60 psi**

### Step 7: Pressure and flow at Head 4

Available pressure at Head 4: 16.36 + 5.60 = **21.96 psi**

Flow at Head 4: Q = 5.6 x sqrt(21.96) = 5.6 x 4.686 = **26.2 gpm**

### Branch line summary

| Head | Pressure (psi) | Flow (gpm) | Cumulative Flow (gpm) |
| --- | --- | --- | --- |
| Head 1 (most remote) | 12.13 | 19.5 | 19.5 |
| Head 2 | 13.90 | 20.9 | 40.4 |
| Head 3 | 16.36 | 22.7 | 63.1 |
| Head 4 | 21.96 | 26.2 | 89.3 |

Total branch line demand at connection to cross main: **89.3 gpm at 21.96 psi** (before cross main friction losses and elevation adjustments).

{% callout type="note" %}
Notice that the most remote head operates at the minimum required pressure, but each subsequent head picks up additional pressure from the friction loss in the connecting pipe. This is why sprinklers closer to the riser always flow more water than the most remote head.
{% /callout %}

---

## Elevation adjustment

For each foot of elevation change: **0.433 psi per vertical foot**.

- Sprinklers above the water supply: **add** 0.433 psi/ft to required pressure
- Sprinklers below the water supply: **subtract** 0.433 psi/ft from required pressure

Example: system demand is 85 psi at the base of riser. Sprinklers are 25 ft above the underground main connection. Elevation adjustment = 25 x 0.433 = 10.8 psi. Total at underground: 85 + 10.8 = **95.8 psi**.

---

## Water supply adjustment

### Residual test data

When plotting a water supply from a hydrant flow test, use the N^1.85 method:

**P_available = P_static x (1 - ((Q_demand / Q_test)^1.85 x (1 - P_residual/P_static)))**

Or graphically: plot static and residual points on N^1.85 paper (semi-log) and read the available pressure at the system demand flow.

### Common pitfalls

- Forgetting to add hose stream demand **after** the system demand calculation (hose stream is added at the base of the riser, not distributed through sprinklers)
- Using the wrong C-factor for the pipe material
- Mixing Schedule 40 and Schedule 10 IDs in the same run
- Not accounting for reduced IDs at grooved couplings (typically use the smaller of the two pipe IDs)
- Overlooking alarm valve and check valve friction losses (typically 5-10 psi for alarm check, 3-5 psi for check valve, or use manufacturer data)

---

## Reference: NFPA 13 sections for hydraulic calculations

| Topic | NFPA 13 Section (2022 ed.) |
| --- | --- |
| Hydraulic calculation procedures | Chapter 28 |
| Equivalent pipe lengths | 28.2.3 / Table 28.2.3.1.1 |
| Velocity pressure | 28.2.5 |
| Water supply information | 28.2.1 |
| Hose stream and duration | 19.2.3 |
| Design area shape | 19.2.3.1.4 |
| C-factors | Table 28.2.3.2.1 |
| Density/area requirements | Chapter 19 |
| Single-point criteria (2022) | 19.3 |
