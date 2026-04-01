---
title: Fire Pumps
nextjs:
  metadata:
    title: Fire Pumps
    description: Comprehensive guide to fire pumps including types, sizing per NFPA 20, jockey pumps, diesel vs electric drivers, controllers, testing, and pump room requirements.
---

When the available water supply cannot meet the sprinkler system demand at adequate pressure, a fire pump is required to boost pressure, flow, or both. Fire pumps are governed by NFPA 20: Standard for the Installation of Stationary Pumps for Fire Protection.

---

## Fire Pump Types

### Horizontal Split-Case Pumps

The horizontal split-case (also called double-suction) pump is the most common fire pump in commercial and industrial applications. Water enters from both sides of the impeller, which balances axial thrust and reduces bearing loads.

**Key characteristics:**
- Available ratings: typically 250 to 5,000 gpm
- Requires **positive suction pressure** (the water supply must be above the pump suction flange or pressurized)
- Suction and discharge flanges are at the same elevation, simplifying piping
- Can be driven by electric motor or diesel engine
- Requires a dedicated pump room with adequate clearance for maintenance
- Single-stage or multistage configurations available

**When to use:** Most commercial and industrial applications where a municipal water supply or elevated tank provides positive suction pressure.

### Vertical Turbine Pumps

Vertical turbine pumps draw water from below the pump through a series of impeller bowls submerged in the water source. They are designed to operate under suction lift conditions.

**Key characteristics:**
- Used when water is below the pump suction flange (ground-level tanks, wells, reservoirs)
- Available in wide flow and head ranges
- Can be driven by electric motor or diesel engine (with right-angle gear drive for diesel)
- Require a pit or can for the pump bowls if used with a ground-level tank
- More complex installation than horizontal split-case

**When to use:** Ground-level water storage tanks, well water supplies, or any situation where the water source is below the pump.

### End Suction Pumps

End suction pumps are smaller centrifugal pumps with the suction connection on one end and discharge perpendicular to the shaft.

**Key characteristics:**
- Typically limited to smaller capacities (up to approximately 750 gpm)
- Compact footprint
- Lower cost than split-case pumps
- Require positive suction pressure
- Limited to electric motor drive

**When to use:** Smaller systems, limited space applications, and lower-flow-demand scenarios.

### In-Line Pumps

In-line pumps mount directly in the piping with suction and discharge on the same centerline.

**Key characteristics:**
- Very compact -- no separate foundation required
- Limited capacity range
- Electric motor only
- Simplest installation of all pump types

**When to use:** Very small systems with modest pressure boost needs.

---

## Pump Sizing

### Determining Required Flow and Pressure

The fire pump must be sized to bridge the gap between the water supply and the system demand:

1. Calculate the total system demand (sprinkler demand + hose stream allowance) at the base of riser
2. Plot the demand against the water supply curve
3. The pump must make up the difference in pressure at the required flow

### NFPA 20 Sizing Guidelines

NFPA 20 recommends that the fire pump be sized so the system demand falls between **90% and 150% of the pump's rated capacity**. Operating a pump at its rated capacity (100%) provides the best balance of efficiency and performance.

### Available Pump Ratings

Fire pumps come in standard ratings. Common sizes include:

| Flow (gpm) | Typical Applications |
|------------|---------------------|
| 250 | Small commercial buildings |
| 500 | Mid-size commercial, small warehouses |
| 750 | Large commercial, mid-size warehouses |
| 1,000 | Large warehouses, high-rise buildings |
| 1,250 | Large industrial, distribution centers |
| 1,500 | Large distribution, ESFR storage |
| 2,000 | Major industrial facilities |
| 2,500-5,000 | Very large industrial and storage |

### Pump Performance Curves

Every listed fire pump has a performance curve showing flow vs. pressure. Key points on the curve:

- **Churn (shutoff)** -- Zero flow, maximum pressure. Must not exceed 140% of rated pressure.
- **Rated point** -- 100% of rated flow at rated pressure (the nameplate values)
- **150% point** -- At 150% of rated flow, pressure must not fall below 65% of rated pressure

---

## Jockey Pumps (Pressure Maintenance Pumps)

A jockey pump is a small pump that maintains system pressure to prevent nuisance starts of the main fire pump. It compensates for small leaks, thermal expansion/contraction, and minor pressure fluctuations.

### Sizing Rules

- Flow capacity should be **approximately 1% of the main fire pump rated capacity** (a common rule of thumb)
- Flow should be **less than a single sprinkler head's discharge** so the main pump starts if any sprinkler operates
- Typical flows: 3 to 10 gpm depending on system size
- Must be sized to replenish the system for allowable leakage and normal pressure drops

### Pressure Settings

- Jockey pump **start pressure** should be set approximately 10 psi above the main fire pump start pressure
- Jockey pump **stop pressure** should be set approximately 5 psi above the start pressure
- This ensures the jockey pump handles small pressure drops while the main fire pump activates for actual fire conditions

### Controller

The jockey pump controller must be listed but is not required to be listed specifically for fire pump service. It operates on pressure-switch control to cycle the pump on and off as needed.

---

## Diesel vs. Electric Drivers

### Electric Motors

**Advantages:**
- More compact
- Fewer mechanical parts and lower maintenance
- No fuel storage or exhaust requirements
- Quieter operation
- Faster starting (reaches full speed in seconds)
- Lower environmental impact

**Disadvantages:**
- Dependent on utility power -- requires a reliable electrical supply
- NFPA 20 has specific requirements for the electrical supply, including a dedicated service or connection ahead of the main building disconnect
- In some jurisdictions, a second power source (generator or separate utility feed) is required

### Diesel Engines

**Advantages:**
- Independent of utility power -- operates during power outages
- Self-contained power source
- Often preferred for critical facilities

**Disadvantages:**
- Fuel storage requirement: minimum **8 hours** of fuel at full load per NFPA 20
- Requires engine cooling (heat exchanger, radiator, or municipal water)
- Exhaust piping must be routed outside
- Requires battery starting system with battery chargers
- Weekly engine run tests required
- Higher maintenance costs
- Louder operation
- Environmental considerations (fuel storage, emissions)
- Gasoline, natural gas, and other spark-ignited fuels are **not permitted** by NFPA 20

### Selection Factors

| Factor | Electric | Diesel |
|--------|----------|--------|
| Power reliability | Depends on grid | Independent |
| Maintenance | Low | Higher |
| Space requirements | Smaller | Larger (fuel tank, exhaust) |
| First cost | Lower | Higher |
| Operating cost | Lower | Higher |
| Environmental | Better | Fuel/exhaust concerns |
| Code requirements | Dedicated electrical supply | Fuel storage, ventilation |

Many critical facilities install **both** an electric-driven main pump and a diesel-driven backup pump for redundancy.

---

## Fire Pump Controllers

The fire pump controller is a critical component that starts and stops the pump based on system pressure and provides monitoring, alarm, and protection functions.

### Key Requirements (NFPA 20)

- Must be **listed** for fire pump service
- Automatic start based on pressure drop
- Cannot automatically stop -- must be manually stopped (prevents the pump from cycling during a fire)
- Provides alarm signals for: pump running, phase loss, phase reversal, controller trouble
- Transfer switch capability for dual power sources
- Sensing lines must be piped independently, located on the discharge side between the check valve and the main discharge valve
- Two drilled (1/32-inch) check valves installed on each sensing line, spaced at least 5 feet apart

### Controller Signals

The controller must provide the following signals to the fire alarm system:

- Pump running
- Power available / power failure
- Phase reversal (for electric)
- Controller trouble
- Engine trouble (for diesel: low oil, high temperature, failure to start, overspeed)

---

## Pump Room Requirements

### Physical Requirements

- Pump room must be dedicated to fire pump equipment
- Adequate access for maintenance and equipment removal
- Minimum clearance of 12 inches around the pump on all sides
- Pump room temperature maintained at minimum 40 degrees F
- Adequate drainage for pump testing and leakage
- Lighting and ventilation per local codes

### Fire Protection

- The pump room must be protected by automatic sprinklers
- Pump room construction must meet fire resistance requirements (typically 2-hour fire barrier)
- Fire pump room sprinkler supply must be independent of the pump being protected

### Suction and Discharge Piping

- Suction pipe size must meet NFPA 20 requirements based on pump gpm
- Eccentric reducers on the suction side (to prevent air pockets)
- Concentric increasers on the discharge side
- A test header must be provided for annual flow testing
- OS&Y (outside screw and yoke) gate valves or listed butterfly valves for isolation

---

## Testing Requirements

### Acceptance Testing

Before the system goes into service, the fire pump must be tested at:

- Churn (no flow)
- Rated flow (100%)
- Peak flow (150% of rated)

Results must be compared against the manufacturer's certified pump curve.

### Annual Testing

Per NFPA 25, fire pumps must be flow-tested annually. The test verifies:

- The pump still meets its rated performance
- No degradation in flow or pressure
- All alarm and supervisory functions work correctly

### Weekly Testing

- Electric pumps: run for a minimum of 10 minutes
- Diesel pumps: run for a minimum of 30 minutes
- Check for leaks, unusual noise, vibration
- Verify automatic start on pressure drop
- Record readings (suction pressure, discharge pressure, pump speed)

---

## Common Design Issues

1. **Undersized suction piping** -- Causes cavitation, reduced performance, and pump damage. Always size suction piping per NFPA 20 tables.

2. **Inadequate NPSH** -- Net Positive Suction Head must be checked, especially for vertical turbine pumps and installations with long suction runs.

3. **No test header** -- Required for annual testing. Must be sized to flow 150% of rated pump capacity.

4. **Electrical supply issues** -- The electrical supply must be reliable and meet NFPA 20's specific disconnecting and overcurrent protection requirements.

5. **Pump room ventilation** -- Diesel pumps generate significant heat. Adequate ventilation and cooling are critical for reliable operation.

6. **Forgetting the controller sensing line requirements** -- The two sensing lines with drilled check valves are a frequently missed detail.
