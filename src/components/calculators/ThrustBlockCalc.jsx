'use client'

import { useState } from 'react'

const THRUST_FORCES = {
  '4': { '90': 3620, '45': 1960, '22.5': 990, 'dead': 2560 },
  '6': { '90': 7990, '45': 4330, '22.5': 2190, 'dead': 5650 },
  '8': { '90': 13960, '45': 7560, '22.5': 3820, 'dead': 9870 },
  '10': { '90': 21530, '45': 11670, '22.5': 5900, 'dead': 15230 },
  '12': { '90': 30700, '45': 16630, '22.5': 8410, 'dead': 21710 },
}

const SOIL_TYPES = {
  'muck': { label: 'Muck / Saturated Organic', capacity: 750 },
  'soft_clay': { label: 'Soft Clay', capacity: 1500 },
  'sand': { label: 'Sand', capacity: 3000 },
  'sand_gravel': { label: 'Sand and Gravel', capacity: 5000 },
  'hard_clay': { label: 'Hard Clay / Shale', capacity: 6000 },
}

export function ThrustBlockCalc() {
  const [pipeSize, setPipeSize] = useState('6')
  const [fitting, setFitting] = useState('90')
  const [testPressure, setTestPressure] = useState('200')
  const [soilType, setSoilType] = useState('sand')
  const [safetyFactor, setSafetyFactor] = useState('1.5')
  const [result, setResult] = useState(null)

  function calculate() {
    const thrust = THRUST_FORCES[pipeSize]?.[fitting]
    const soil = SOIL_TYPES[soilType]?.capacity
    const sf = parseFloat(safetyFactor)
    const pressure = parseFloat(testPressure)

    if (!thrust || !soil || !sf || !pressure) {
      setResult(null)
      return
    }

    // Thrust values in table are at 200 psi — scale for different test pressures
    const scaledThrust = thrust * (pressure / 200)
    const bearingArea = (scaledThrust * sf) / soil
    const sideLength = Math.sqrt(bearingArea)

    setResult({
      thrust: Math.round(scaledThrust),
      bearingArea: bearingArea.toFixed(2),
      sideLength: sideLength.toFixed(1),
      soilCapacity: soil,
    })
  }

  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 dark:border-red-800 dark:bg-red-950/30">
      <h3 className="mt-0 text-lg font-semibold text-orange-900 dark:text-orange-100">Thrust Block Calculator</h3>
      <p className="text-sm text-orange-700 dark:text-orange-300">A = (T x SF) / S — bearing area against undisturbed soil</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Pipe Size</label>
          <select value={pipeSize} onChange={(e) => { setPipeSize(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            <option value="4">4&quot;</option>
            <option value="6">6&quot;</option>
            <option value="8">8&quot;</option>
            <option value="10">10&quot;</option>
            <option value="12">12&quot;</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Fitting Type</label>
          <select value={fitting} onChange={(e) => { setFitting(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            <option value="90">90-degree Bend</option>
            <option value="45">45-degree Bend</option>
            <option value="22.5">22.5-degree Bend</option>
            <option value="dead">Dead End / Tee</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Test Pressure (psi)</label>
          <input type="number" value={testPressure} onChange={(e) => { setTestPressure(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Soil Type</label>
          <select value={soilType} onChange={(e) => { setSoilType(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            {Object.entries(SOIL_TYPES).map(([k, v]) => <option key={k} value={k}>{v.label} ({v.capacity} psf)</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Safety Factor</label>
          <input type="number" value={safetyFactor} step="0.1" onChange={(e) => { setSafetyFactor(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div className="flex items-end">
          <button onClick={calculate} className="w-full rounded bg-red-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600">Calculate</button>
        </div>
      </div>
      {result && (
        <div className="mt-4 rounded border border-orange-300 bg-white p-3 dark:border-red-700 dark:bg-red-950">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="text-orange-600 dark:text-orange-400">Thrust force:</span> <strong>{result.thrust} lbs</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Bearing area:</span> <strong>{result.bearingArea} sq ft</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Block size:</span> <strong>{result.sideLength} ft x {result.sideLength} ft</strong> (square)</div>
            <div><span className="text-orange-600 dark:text-orange-400">Soil capacity:</span> <strong>{result.soilCapacity} psf</strong></div>
          </div>
          <p className="mt-2 text-xs text-orange-500">Block must bear against undisturbed soil. Backfill provides no lateral resistance.</p>
        </div>
      )}
    </div>
  )
}
