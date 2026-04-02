---
title: Fire Pumps
nextjs:
  metadata:
    title: Fire Pumps
    description: Fire pump selection, sizing, performance curves, NPSH requirements, and NFPA 20 testing criteria.
---

Pump sizing from system demand, NFPA 20 performance curve requirements, NPSH calculations, and testing criteria for acceptance and periodic inspections. {% .lead %}

## Pump sizing methodology

A fire pump must deliver the **total system demand** (sprinkler demand + hose streams) at the **required pressure** that the water supply alone cannot provide.

### Sizing steps

1. Determine total system flow demand (gpm) from hydraulic calculations per NFPA 13
2. Add hose stream allowance per NFPA 13 Table 11.2.3.1.2
3. Plot the demand point (total gpm at required psi) on the supply curve
4. If the demand point exceeds the supply curve, calculate the pressure deficit
5. Select a listed fire pump with rated capacity >= system flow at a rated pressure >= the deficit

{% callout %}
Per NFPA 20 Section 4.8, select pump rated capacity from standard sizes: 25, 50, 100, 150, 200, 250, 300, 400, 450, 500, 750, 1000, 1250, 1500, 2000, 2500, or 3000 gpm. Do not interpolate between sizes — always round up.
{% /callout %}

### Sizing example

**Given:** System demand = 700 gpm at 95 psi. Water supply provides 700 gpm at 55 psi (from flow test).

- Pressure deficit = 95 - 55 = **40 psi**
- Select pump: **750 gpm** rated capacity (next standard size above 700)
- Rated pressure: minimum **40 psi** (select available rating that meets or exceeds)

The pump adds pressure to the supply. The combined supply + pump curve must exceed the demand point with adequate safety margin.

{% figure src="/placeholder-diagram.svg" alt="Combined water supply and fire pump curve showing demand point below the combined curve" caption="The fire pump shifts the supply curve upward by the pump's added pressure at each flow rate." /%}

## Performance curve requirements (NFPA 20)

Every listed fire pump must meet these three performance points:

| Operating Point | Flow (% of rated) | Minimum Pressure (% of rated) |
|---|---|---|
| Shutoff (churn) | 0% | Not to exceed 140% |
| Rated point | 100% | 100% |
| Overload | 150% | Not less than 65% |

The pump curve must be continuously rising from 150% flow to shutoff — no dips or flat spots allowed.

{% callout type="warning" %}
A pump that produces exactly 140% at shutoff has zero margin. Verify the manufacturer's certified curve shows the actual shutoff value. Field conditions (suction pressure, altitude) can shift the curve.
{% /callout %}

## Common pump and motor combinations

| Rated Flow (gpm) | Rated Pressure (psi) | Typical HP | Driver | Typical Application |
|---|---|---|---|---|
| 250 | 100 | 15-25 | Electric | Small commercial, residential high-rise |
| 500 | 100 | 30-50 | Electric | Mid-size commercial |
| 750 | 100 | 50-75 | Electric / Diesel | Large commercial, warehouses |
| 1,000 | 100 | 75-100 | Electric / Diesel | Large warehouses, industrial |
| 1,500 | 100 | 100-150 | Diesel | Industrial, distribution centers |
| 2,000 | 100 | 150-200 | Diesel | Large industrial complexes |
| 1,000 | 175 | 125-150 | Electric / Diesel | High-rise buildings |
| 1,500 | 175 | 175-250 | Diesel | High-rise, high-piled storage |

{% callout %}
Diesel drivers are required where electric service reliability is a concern or where the AHJ mandates an independent power source. NFPA 20 permits both but has separate chapters for each driver type.
{% /callout %}

## Net Positive Suction Head (NPSH)

NPSH is the absolute pressure available at the pump suction above the vapor pressure of water. Insufficient NPSH causes cavitation, which destroys impellers and reduces pump output.

### NPSH available (NPSHA) calculation

**NPSHA = H_atm - H_vap - H_lift - H_friction**

Where:
- **H_atm** = atmospheric pressure at elevation (33.9 ft at sea level)
- **H_vap** = vapor pressure of water (0.6 ft at 60 degF, 1.2 ft at 80 degF)
- **H_lift** = static lift from water surface to pump centerline (ft, positive for suction lift)
- **H_friction** = friction loss in suction piping (ft)

### NPSH requirement

**NPSHA must exceed NPSHR (required, from manufacturer) by a safety margin** — typically 2-5 ft minimum.

| Water Temperature (degF) | Vapor Pressure (ft of head) |
|---|---|
| 50 | 0.4 |
| 60 | 0.6 |
| 70 | 0.8 |
| 80 | 1.2 |
| 100 | 2.2 |
| 120 | 3.9 |

{% callout type="warning" %}
Per NFPA 20, suction lift (negative suction) installations are limited to specific pump types and configurations. Maximum theoretical suction lift is approximately 15 ft at sea level, but practical limits are 10 ft or less after accounting for friction and vapor pressure.
{% /callout %}

## Testing criteria

### Acceptance test (NFPA 20, Chapter 14)

Record performance at all three curve points and verify compliance with the performance table above. The pump must also:
- Run continuously for a minimum of **1 hour** during the flow test
- Demonstrate proper automatic start on pressure drop
- Verify no automatic stop (manual stop only)

### Periodic testing (NFPA 25)

| Test | Frequency | Duration / Requirement |
|---|---|---|
| No-flow (churn) test | Weekly | 10 minutes minimum |
| Annual flow test | Annually | Record shutoff, rated, and 150% points |
| Performance comparison | Annually | Compare to original acceptance test data |
| Degradation threshold | — | Investigate if performance drops more than 5% from original |
| Diesel engine test | Weekly | 30 minutes minimum run time |

{% callout %}
Per NFPA 25 Section 8.3.3 — the weekly churn test confirms the pump starts automatically and runs without alarm conditions. It does not verify flow performance. The annual flow test is the true performance verification.
{% /callout %}

## Controller requirements (NFPA 20)

Fire pump controllers must be:

- **Listed for fire pump service** — standard motor starters are not acceptable
- **Automatic start** on pressure drop (adjustable set point, typically 10-15 psi below system pressure)
- **No automatic stop** — pump runs until manually stopped by qualified personnel
- **Emergency mechanical start** — manual override independent of electronics
- **Locked in the ON position** — main breaker or disconnect must be supervised
- **Separate power feed** — dedicated service ahead of the building main disconnect, or tap ahead of the main per NFPA 20 Section 9.2.2

| Controller Feature | Requirement | Reference |
|---|---|---|
| Automatic start | Pressure switch or signal | NFPA 20 Sec. 10.4.7 |
| Manual stop only | No automatic stop permitted | NFPA 20 Sec. 10.4.9 |
| Sequential starting (multiple pumps) | Stagger start by 5-10 seconds | NFPA 20 Sec. 10.4.7.1 |
| Power failure restart | Auto restart on power restoration | NFPA 20 Sec. 10.4.7 |
| Alarm contacts | Running, power failure, phase reversal | NFPA 20 Sec. 10.4.10 |
| Transfer switch (if applicable) | Listed for fire pump service | NFPA 20 Sec. 10.9 |
