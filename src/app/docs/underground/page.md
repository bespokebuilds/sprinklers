---
title: Underground Piping
nextjs:
  metadata:
    title: Underground Piping
    description: Underground fire service main design — pipe materials, thrust restraint, testing, flushing, and NFPA 24 requirements.
---

Pipe material selection, thrust block sizing, hydrostatic testing, flushing requirements, and NFPA 24 compliance for underground fire service mains. {% .lead %}

## Pipe material comparison

| Property | Ductile Iron (DI) | PVC C900 | HDPE (DR 11) |
|---|---|---|---|
| C-factor | 140 (cement-lined) | 150 | 150 |
| Joints | MJ, push-on, flanged | Bell-and-spigot (gasketed) | Butt-fused, electrofusion |
| Corrosion resistance | Requires polyethylene wrap or coating | Excellent | Excellent |
| Weight (6" per 20 ft) | ~350 lb | ~120 lb | ~80 lb |
| Available sizes | 4"-48" | 4"-12" (common) | 4"-36" |
| Pressure class | Class 350 typical (350 psi) | DR 18 = 150 psi, DR 14 = 200 psi | DR 11 = 200 psi |
| Tracer wire required | No (metallic, detectable) | Yes | Yes |
| Thrust restraint | MJ retainer glands or thrust blocks | Thrust blocks or restrained joints | Fused joints are self-restraining |

{% callout %}
Per NFPA 24 Section 10.1, all underground piping materials must be listed and approved for fire protection service. C-factors for hydraulic calculations should reflect the expected condition at 50 years — typically C=100 for unlined DI, C=140 for cement-lined DI, and C=150 for plastic pipe.
{% /callout %}

## Thrust restraint

Unbalanced hydraulic forces at fittings (tees, bends, reducers, dead ends) must be resisted by thrust blocks or restrained joints.

### Thrust block sizing formula

**A = (P x T x SF) / S**

Where:
- **A** = required bearing area of thrust block against undisturbed soil (ft2)
- **P** = test pressure (psi)
- **T** = thrust force at fitting (lb) — from thrust table below
- **SF** = safety factor (typically 1.5)
- **S** = soil bearing capacity (psf)

{% callout type="warning" %}
Thrust blocks must bear against **undisturbed soil**. Backfill material provides virtually no lateral resistance. Blocks must be poured directly against the trench wall.
{% /callout %}

### Thrust force at fittings (at 200 psi test pressure)

| Fitting | 4" (lb) | 6" (lb) | 8" (lb) | 10" (lb) | 12" (lb) |
|---|---|---|---|---|---|
| 90-degree bend | 3,620 | 7,990 | 13,960 | 21,530 | 30,700 |
| 45-degree bend | 1,960 | 4,330 | 7,560 | 11,670 | 16,630 |
| 22.5-degree bend | 990 | 2,190 | 3,820 | 5,900 | 8,410 |
| Dead end / tee | 2,560 | 5,650 | 9,870 | 15,230 | 21,710 |

### Soil bearing capacity

| Soil Type | Bearing Capacity (psf) |
|---|---|
| Muck / saturated organic | 500-1,000 |
| Soft clay | 1,000-2,000 |
| Sand | 2,000-4,000 |
| Sand and gravel | 4,000-6,000 |
| Hard clay / shale | 6,000+ |

### Worked example

**Given:** 6" dead end, test pressure 200 psi, sand soil (3,000 psf), SF = 1.5.

- T = 5,650 lb (from table)
- A = (200 x 5,650 x 1.5) / 3,000 — but units must be consistent.

Corrected (thrust is already calculated at test pressure):
- A = (T x SF) / S
- A = (5,650 x 1.5) / 3,000
- A = 8,475 / 3,000
- **A = 2.83 sq ft**

A thrust block with roughly **1.7 ft x 1.7 ft** bearing face is required.

{% figure src="/placeholder-diagram.svg" alt="Thrust block detail showing bearing face against undisturbed soil at a 90-degree bend" caption="Thrust blocks must bear against undisturbed soil. The bearing area is perpendicular to the direction of thrust." /%}

## Hydrostatic testing (NFPA 24)

All underground mains must be hydrostatically tested before backfilling or connecting to the system.

| Parameter | Requirement |
|---|---|
| Test pressure | 200 psi **or** 50 psi above maximum working pressure, whichever is greater |
| Duration | 2 hours minimum |
| Allowable leakage | Per AWWA C600 formula (below) |
| Test medium | Potable water |
| Gauge accuracy | Calibrated, readable to 1 psi |

### AWWA C600 leakage formula

**L = (N x D x P^0.5) / 148,000**

Where:
- **L** = allowable leakage (gallons per hour)
- **N** = number of joints in the test section
- **D** = nominal pipe diameter (inches)
- **P** = test pressure (psi)

**Example:** 500 ft of 6" DI pipe (push-on joints at 20 ft lengths = 25 joints), tested at 200 psi.

- L = (25 x 6 x 14.14) / 148,000
- L = 2,121 / 148,000
- **L = 0.014 gph**

{% callout %}
If leakage exceeds the allowable amount, locate and repair the leak before proceeding. Common sources: improperly seated gaskets, cracked fittings, and thrust block failures. Retest after any repair.
{% /callout %}

## Flushing requirements

Underground mains must be flushed at **minimum 10 ft/sec velocity** to remove construction debris, dirt, and biological material. Per NFPA 24 Section 10.10.2.1, flow must be maintained until water runs clear.

### Required flushing flow rates (10 ft/sec)

| Pipe Size (in) | Required Flow (gpm) | Typical Hydrant Output |
|---|---|---|
| 4 | 390 | 1 hydrant, full open |
| 6 | 880 | 2 hydrants, full open |
| 8 | 1,560 | 3-4 hydrants |
| 10 | 2,440 | Multiple hydrants |
| 12 | 3,520 | Multiple hydrants or flush connection |

{% callout type="warning" %}
Inadequate flushing is one of the most common causes of system obstruction. If the water supply cannot deliver the required flushing flow, install a dedicated flush connection sized to achieve 10 ft/sec. Do not skip or reduce the flushing requirement — obstructions can block sprinkler discharge and cause system failure.
{% /callout %}

### Velocity formula

**V = (Q x 0.4085) / d^2**

Where:
- **V** = velocity (ft/sec)
- **Q** = flow (gpm)
- **d** = actual inside diameter (inches)

## Burial depth

| Condition | Minimum Cover |
|---|---|
| Below frost line | 12 inches below local frost depth (minimum) |
| Under roads / driveways | 36-48 inches |
| Under unpaved areas | Local frost depth + 12 inches, or 36 inches minimum |
| Where frost is not a concern | 30-36 inches minimum (per local code) |

{% callout %}
Check local jurisdiction requirements — many AHJs mandate specific cover depths that exceed NFPA 24 minimums. Pipe crossing under railroad tracks typically requires a casing pipe and minimum 60" cover.
{% /callout %}

## Tracer wire

Required for all non-metallic piping (PVC, HDPE) per NFPA 24 Section 10.8.

| Parameter | Requirement |
|---|---|
| Wire type | 12 AWG minimum, insulated copper |
| Placement | Attached to top of pipe, continuous through all fittings |
| Termination | Access point at grade (locator box or valve box) |
| Connections | Waterproof connectors rated for direct burial |
| Testing | Verify continuity before backfill |

{% callout %}
Tracer wire enables future location of the pipe with standard utility locating equipment. Without it, non-metallic pipe is undetectable after burial, making future repairs and connections extremely difficult and expensive.
{% /callout %}

## Bedding and backfill

| Pipe Material | Bedding Requirement | Backfill |
|---|---|---|
| Ductile Iron | 4" min granular bedding | Select backfill, no large rocks |
| PVC C900 | 4-6" granular bedding, full pipe support | Granular backfill to 12" above pipe crown |
| HDPE | 4-6" granular bedding | Granular backfill to 12" above pipe crown |

Compaction in lifts of 6-8 inches. Do not use mechanical compactors directly over the pipe until minimum cover is achieved (typically 24-36" depending on compactor type).
