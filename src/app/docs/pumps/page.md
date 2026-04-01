---
title: Fire Pumps
nextjs:
  metadata:
    title: Fire Pumps
    description: Fire pump types, sizing, drivers, performance curves, and NFPA 20 requirements for fire sprinkler systems.
---

When the available water supply cannot deliver sufficient pressure to meet the sprinkler system demand, a fire pump bridges the gap. Fire pumps are governed by NFPA 20 (Standard for the Installation of Stationary Pumps for Fire Protection) and represent a significant engineering, installation, and maintenance commitment. {% .lead %}

---

## When a fire pump is needed

A fire pump is required whenever the water supply pressure at the base of the riser is insufficient to meet the system demand. Common scenarios include:

- **High-rise buildings** where elevation head consumes most of the available street pressure
- **Large industrial facilities** with high-density Extra Hazard systems
- **Remote sites** with low-pressure municipal supply
- **Private water supplies** from suction tanks, reservoirs, or wells that have adequate flow but insufficient pressure

The need for a pump is determined during the hydraulic analysis: if the demand point exceeds the supply curve, you need a pump, a tank, or both.

---

## Pump types

### Horizontal split-case

The most common fire pump configuration. The pump housing splits horizontally, allowing access to the impeller without disturbing the piping. Available in a wide range of capacities (250-5,000 gpm) and suitable for most applications.

### Vertical in-line

A compact design where the pump is mounted vertically within the piping. Used where floor space is limited. Typically available in smaller capacities (up to about 1,500 gpm).

### Vertical turbine

Used when the water source is below the pump (suction lift applications) such as wells, underground tanks, or reservoirs. Multiple impeller stages (bowls) are submerged in the water source, and a vertical shaft connects to the motor above.

### End suction

A simpler, less expensive pump suitable for smaller systems. Limited to about 1,500 gpm and generally used in lower-demand applications.

{% figure src="/placeholder-diagram.svg" alt="Fire pump types comparison" caption="Common fire pump configurations — horizontal split-case, vertical in-line, vertical turbine, and end suction" /%}

---

## Pump drivers

### Electric motor

The most common driver for fire pumps. Requires a dedicated, reliable power supply per NFPA 20:

- Power must come from a utility connection ahead of the main building disconnect (or from an approved emergency generator)
- The controller must be listed for fire pump service
- Wiring must be protected from fire exposure per NFPA 20 Chapter 9

Electric motors are lower maintenance, quieter, and start faster than diesel engines, but they are dependent on utility power availability.

### Diesel engine

Required (or preferred) when reliable electric power is not available or when a redundant driver is needed. Key considerations:

- Fuel storage: minimum 8 hours of run time at full load
- Battery charging: automatic, with weekly test run
- Exhaust routing: per building code
- Ventilation: combustion air and heat dissipation
- Engine cooling: heat exchanger or radiator

{% callout type="note" title="Dual-driver arrangements" %}
Critical facilities often install both an electric and diesel-driven pump. The electric pump is the primary driver; the diesel is the backup. The diesel starts automatically if the electric pump fails to maintain pressure.
{% /callout %}

---

## Reading a pump performance curve

Every fire pump has a published performance curve that shows the relationship between flow (gpm) and pressure (psi or feet of head). Understanding this curve is essential for pump selection and system design.

### Key points on the curve

- **Shutoff (churn)** — the maximum pressure the pump produces at zero flow. NFPA 20 limits shutoff pressure to 140% of rated pressure.
- **Rated point** — the flow and pressure the pump is designed to deliver (e.g., 1,000 gpm at 100 psi). This is the "nameplate" capacity.
- **150% point** — the pump must deliver 150% of rated flow at no less than 65% of rated pressure. This ensures the pump performs adequately under high-demand conditions.

{% figure src="/placeholder-diagram.svg" alt="Fire pump performance curve" caption="Typical fire pump curve showing shutoff, rated point, and 150% performance requirements per NFPA 20" /%}

### Pump selection

Select a pump where:
1. The rated capacity meets or exceeds the system flow demand
2. The rated pressure, when added to the available supply pressure, exceeds the system pressure demand with margin
3. The 150% point still provides adequate pressure for the system

---

## Jockey pumps

A jockey pump (also called a pressure maintenance pump) is a small pump that maintains system pressure and prevents the main fire pump from starting due to minor pressure drops (small leaks, temperature changes, trapped air).

### Sizing

- Flow: typically 1-5 gpm — just enough to compensate for minor system losses
- Pressure: set to maintain normal system pressure above the fire pump start threshold
- Start/stop: controlled by pressure switches, typically starting at a few psi above the main pump start pressure

The jockey pump does not contribute to fire protection capacity. Its sole purpose is preventing nuisance starts of the main fire pump.

---

## Fire pump controllers

The fire pump controller is a specialized electrical panel that manages pump operation. Per NFPA 20:

- Must be listed for fire pump service
- Located as close to the pump as practical
- Includes automatic start on pressure drop, manual start, and emergency manual start (mechanical)
- Must **not** include automatic stop — fire pumps can only be stopped manually to prevent premature shutdown during a fire
- Includes instrumentation: pressure gauges, running indicators, and alarm contacts for remote monitoring

{% callout type="warning" title="Fire pumps do not auto-stop" %}
A fire pump controller must be arranged so the pump can only be stopped manually. Automatic shutdown could leave a building without fire protection during an active fire. Only the fire department or building engineer should stop a running fire pump.
{% /callout %}

---

## Pump rooms

NFPA 20 has specific requirements for the room housing the fire pump:

- **Separation**: 2-hour fire-rated enclosure (or 1-hour if sprinklered within)
- **Access**: direct exterior access or access from a public area
- **Heating**: maintain minimum 40°F (4.4°C) to prevent freezing
- **Drainage**: floor drains to handle packing gland leakage and testing
- **Ventilation**: adequate for diesel engines (combustion air and cooling)
- **Lighting**: normal and emergency lighting

---

## Testing and maintenance

### Weekly churn test

Run the pump at shutoff (no flow) for at least 10 minutes per NFPA 25. Record suction pressure, discharge pressure, and any unusual vibration or noise. This confirms the pump starts and runs but does not verify flow capacity.

### Annual flow test

A full performance test at multiple flow points (shutoff, rated, and 150%) per NFPA 25. Compare results to the original acceptance test and the pump's rated curve. Degradation of more than 5% in rated performance indicates a problem requiring investigation.

### Diesel engine specific

- Weekly: start and run for 30 minutes under load
- Check fuel level, battery condition, oil level, coolant
- Annual: full load test

{% figure src="/placeholder-diagram.svg" alt="Fire pump test setup" caption="Typical fire pump flow test arrangement showing suction gauge, discharge gauge, and test header with flow measurement" /%}
