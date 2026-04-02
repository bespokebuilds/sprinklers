'use client'

import { useState } from 'react'

const PIPE_WEIGHTS = {
  '1': { empty: 1.68, water: 0.37, label: '1"' },
  '1.25': { empty: 2.27, water: 0.65, label: '1-1/4"' },
  '1.5': { empty: 2.72, water: 0.88, label: '1-1/2"' },
  '2': { empty: 3.65, water: 1.45, label: '2"' },
  '2.5': { empty: 5.79, water: 2.07, label: '2-1/2"' },
  '3': { empty: 7.58, water: 3.20, label: '3"' },
  '4': { empty: 10.79, water: 5.51, label: '4"' },
  '6': { empty: 18.97, water: 12.51, label: '6"' },
  '8': { empty: 28.55, water: 21.65, label: '8"' },
  '10': { empty: 40.48, water: 34.00, label: '10"' },
  '12': { empty: 49.56, water: 49.00, label: '12"' },
}

const CP_VALUES = {
  'C': 0.35,
  'D': 0.50,
  'E': 0.50,
  'F': 0.50,
}

export function PipeWeightCalc() {
  const [pipeSize, setPipeSize] = useState('4')
  const [zoneLength, setZoneLength] = useState('')
  const [sdc, setSdc] = useState('D')
  const [importance, setImportance] = useState('1.0')
  const [result, setResult] = useState(null)

  function calculate() {
    const pipe = PIPE_WEIGHTS[pipeSize]
    const len = parseFloat(zoneLength)
    const cp = CP_VALUES[sdc]
    const ip = parseFloat(importance)

    if (!pipe || !len || !cp || !ip || len <= 0) {
      setResult(null)
      return
    }

    const fullWeight = pipe.empty + pipe.water
    const totalWeight = fullWeight * len
    const fpw = cp * ip * totalWeight * 1.15

    setResult({
      weightPerFoot: fullWeight.toFixed(2),
      totalWeight: totalWeight.toFixed(0),
      braceLoad: fpw.toFixed(0),
      cp,
      ip,
    })
  }

  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 dark:border-red-800 dark:bg-red-950/30">
      <h3 className="mt-0 text-lg font-semibold text-orange-900 dark:text-orange-100">Pipe Weight and Seismic Brace Load Calculator</h3>
      <p className="text-sm text-orange-700 dark:text-orange-300">Fpw = Cp x Ip x Wp x 1.15 — horizontal seismic load on brace</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Pipe Size (Schedule 40)</label>
          <select value={pipeSize} onChange={(e) => { setPipeSize(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            {Object.entries(PIPE_WEIGHTS).map(([k, v]) => <option key={k} value={k}>{v.label} ({(v.empty + v.water).toFixed(2)} lb/ft full)</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Zone of Influence (ft)</label>
          <input type="number" value={zoneLength} onChange={(e) => { setZoneLength(e.target.value); setResult(null) }} placeholder="e.g. 35" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Seismic Design Category</label>
          <select value={sdc} onChange={(e) => { setSdc(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            <option value="C">SDC C (Cp = 0.35)</option>
            <option value="D">SDC D (Cp = 0.50)</option>
            <option value="E">SDC E (Cp = 0.50)</option>
            <option value="F">SDC F (Cp = 0.50)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Importance Factor (Ip)</label>
          <select value={importance} onChange={(e) => { setImportance(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            <option value="1.0">1.0 (Standard)</option>
            <option value="1.5">1.5 (High Importance)</option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <button onClick={calculate} className="rounded bg-red-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-600">Calculate</button>
      </div>
      {result && (
        <div className="mt-4 rounded border border-orange-300 bg-white p-3 dark:border-red-700 dark:bg-red-950">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="text-orange-600 dark:text-orange-400">Weight/ft (full):</span> <strong>{result.weightPerFoot} lb/ft</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Total Wp:</span> <strong>{result.totalWeight} lbs</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Brace load (Fpw):</span> <strong>{result.braceLoad} lbs</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Cp x Ip:</span> <strong>{(result.cp * result.ip).toFixed(2)}</strong></div>
          </div>
          <p className="mt-2 text-xs text-orange-500">Select a listed brace assembly rated for at least {result.braceLoad} lbs horizontal load.</p>
        </div>
      )}
    </div>
  )
}
