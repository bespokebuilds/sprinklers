---
title: Water Storage Tanks
nextjs:
  metadata:
    title: Water Storage Tanks
    description: Fire protection water storage tanks — types, sizing, NFPA 22 requirements, and maintenance considerations.
---

Water storage tanks provide a dedicated, reliable supply of water for fire sprinkler systems when the municipal supply is insufficient or unavailable. NFPA 22 (Standard for Water Tanks for Private Fire Protection) governs their design, construction, and maintenance. {% .lead %}

---

## When tanks are needed

A dedicated water storage tank is typically required when:

- The municipal system cannot deliver the required flow for the full system duration
- The project is in a rural area without municipal water
- The building owner or insurer requires an independent supply
- A fire pump draws from a suction source rather than a pressurized main

---

## Tank types

### Ground-level steel tanks

The most common type for fire protection. Bolted or welded steel tanks sit on a concrete foundation at grade level. They require a fire pump to deliver water at adequate pressure to the sprinkler system.

- Capacity: commonly 5,000 to 500,000+ gallons
- Construction: bolted steel panels or shop-welded steel
- Foundation: concrete ring wall or full slab, designed for the tank's full-weight load

### Elevated tanks

Elevated tanks use gravity to provide pressure without a pump. Every foot of elevation above the highest sprinkler provides approximately 0.433 psi. A 100-foot elevation provides about 43 psi at the sprinkler level.

- Advantage: no pump needed for pressure, highly reliable
- Limitation: expensive to construct, height needed may be impractical
- Common in: campus settings, rural areas, municipalities

### Pressure tanks

An enclosed vessel partially filled with water and pressurized with air. When the system operates, compressed air pushes the water out. Limited in capacity and only suitable for small systems or supplemental supply.

- Sizing: only about 2/3 of the tank volume is usable water (the rest is air)
- NFPA 22 governs construction and testing

### Underground tanks

Buried concrete or fiberglass tanks that feed a vertical turbine fire pump. Common when site constraints prevent above-ground storage.

- Construction: reinforced concrete, fiberglass, or coated steel
- Access: manways for inspection, level indicators
- Protection: corrosion protection for steel, soil load considerations

{% figure src="/placeholder-diagram.svg" alt="Water storage tank types" caption="Common fire protection water storage tank configurations — ground-level, elevated, pressure, and underground" /%}

---

## Sizing

Tank volume is determined by the total water demand over the required duration:

**Volume (gallons) = (Sprinkler demand + Hose stream allowance) x Duration (minutes)**

### Duration requirements by hazard (NFPA 13)

- Light Hazard: 30 minutes
- Ordinary Hazard Group 1: 60 minutes
- Ordinary Hazard Group 2: 60 minutes
- Extra Hazard Group 1: 90 minutes
- Extra Hazard Group 2: 90-120 minutes
- High-piled storage: 60-120 minutes depending on commodity and storage height

### Example

An Ordinary Hazard Group 1 system with 300 gpm sprinkler demand and 250 gpm hose stream:
- Total demand: 550 gpm
- Duration: 60 minutes
- Required volume: 550 x 60 = **33,000 gallons**

{% callout type="note" title="Tank capacity vs. usable volume" %}
The tank must hold the full calculated volume as usable water above the suction pipe inlet. Account for the dead storage below the inlet, sediment space, and any volume reserved for other purposes.
{% /callout %}

---

## Freeze protection

In cold climates, preventing ice formation in the tank and connecting piping is essential.

### Tank heating

- Immersion heaters or circulation heaters maintain water temperature above 40°F
- Thermostat-controlled with alarm for heater failure
- Insulated tanks reduce heat loss and energy costs

### Piping protection

- Piping between the tank and the pump room must be buried below frost line or heat-traced and insulated
- Tank connections should include anti-vortex plates at the suction inlet

---

## Supervision and monitoring

### Level indication

Tanks must have reliable water level monitoring. Low water level triggers a supervisory signal at the fire alarm control panel (FACP):

- High level alarm: indicates overfill or fill valve malfunction
- Low level alarm: indicates leak, unauthorized use, or fill system failure
- Level transmitters: continuous level monitoring for building management systems

### Temperature monitoring

In heated tanks, temperature sensors with low-temperature alarms alert building personnel before freezing becomes a risk.

---

## NFPA 22 requirements

Key provisions of NFPA 22 include:

- **Construction standards**: materials, welding, coating, cathodic protection
- **Foundation design**: soil bearing capacity, settlement considerations
- **Venting**: tanks must be vented to prevent vacuum or overpressure during filling and draining
- **Overflow**: sized to handle maximum fill rate without pressurizing the tank
- **Access**: ladders, platforms, and manways for inspection and maintenance
- **Seismic**: tanks in seismic areas must meet ASCE 7 requirements for liquid-containing structures
- **Inspection**: periodic internal and external inspection per NFPA 25

{% callout type="warning" title="Internal inspection access" %}
Every water storage tank needs periodic internal inspection to check for corrosion, sediment, and structural integrity. Ensure the tank design includes adequate access (manways) and provisions for draining and cleaning.
{% /callout %}

{% figure src="/placeholder-diagram.svg" alt="Suction tank arrangement" caption="Ground-level suction tank with fire pump, showing tank connections, venting, overflow, and pump suction piping" /%}
