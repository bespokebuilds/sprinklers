'use client'

import { useState } from 'react'

const PIPE_DATA = {
  'sch40': {
    label: 'Schedule 40 Steel',
    sizes: {
      '0.75': { id: 0.824, label: '3/4"' },
      '1': { id: 1.049, label: '1"' },
      '1.25': { id: 1.380, label: '1-1/4"' },
      '1.5': { id: 1.610, label: '1-1/2"' },
      '2': { id: 2.067, label: '2"' },
      '2.5': { id: 2.469, label: '2-1/2"' },
      '3': { id: 3.068, label: '3"' },
      '4': { id: 4.026, label: '4"' },
      '6': { id: 6.065, label: '6"' },
      '8': { id: 7.981, label: '8"' },
    },
  },
  'sch10': {
    label: 'Schedule 10 Steel',
    sizes: {
      '1': { id: 1.097, label: '1"' },
      '1.25': { id: 1.442, label: '1-1/4"' },
      '1.5': { id: 1.682, label: '1-1/2"' },
      '2': { id: 2.157, label: '2"' },
      '2.5': { id: 2.635, label: '2-1/2"' },
      '3': { id: 3.260, label: '3"' },
      '4': { id: 4.260, label: '4"' },
      '6': { id: 6.357, label: '6"' },
    },
  },
  'cpvc': {
    label: 'CPVC (SDR 13.5)',
    sizes: {
      '0.75': { id: 0.894, label: '3/4"' },
      '1': { id: 1.121, label: '1"' },
      '1.25': { id: 1.414, label: '1-1/4"' },
      '1.5': { id: 1.618, label: '1-1/2"' },
      '2': { id: 2.023, label: '2"' },
      '3': { id: 2.982, label: '3"' },
    },
  },
  'copper': {
    label: 'Copper Type L',
    sizes: {
      '0.75': { id: 0.785, label: '3/4"' },
      '1': { id: 1.025, label: '1"' },
      '1.25': { id: 1.265, label: '1-1/4"' },
      '1.5': { id: 1.505, label: '1-1/2"' },
      '2': { id: 1.985, label: '2"' },
      '2.5': { id: 2.465, label: '2-1/2"' },
      '3': { id: 2.945, label: '3"' },
    },
  },
}

const C_VALUES = {
  'sch40': 120,
  'sch10': 120,
  'cpvc': 150,
  'copper': 150,
}

export function FrictionLossCalc() {
  const [material, setMaterial] = useState('sch40')
  const [size, setSize] = useState('2')
  const [flow, setFlow] = useState('')
  const [length, setLength] = useState('')
  const [cValue, setCValue] = useState(120)
  const [result, setResult] = useState(null)

  function calculate() {
    const q = parseFloat(flow)
    const l = parseFloat(length)
    const d = PIPE_DATA[material]?.sizes[size]?.id
    const c = parseFloat(cValue)

    if (!q || !l || !d || !c || q <= 0 || l <= 0) {
      setResult(null)
      return
    }

    const pPerFoot = (4.52 * Math.pow(q, 1.85)) / (Math.pow(c, 1.85) * Math.pow(d, 4.87))
    const totalLoss = pPerFoot * l
    const velocity = q / (2.448 * d * d)

    setResult({
      pPerFoot: pPerFoot.toFixed(5),
      totalLoss: totalLoss.toFixed(2),
      velocity: velocity.toFixed(1),
      diameter: d,
    })
  }

  const sizes = PIPE_DATA[material]?.sizes || {}

  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 dark:border-red-800 dark:bg-red-950/30">
      <h3 className="mt-0 text-lg font-semibold text-orange-900 dark:text-orange-100">Hazen-Williams Friction Loss Calculator</h3>
      <p className="text-sm text-orange-700 dark:text-orange-300">p = (4.52 x Q^1.85) / (C^1.85 x d^4.87)</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Pipe Material</label>
          <select value={material} onChange={(e) => { setMaterial(e.target.value); setCValue(C_VALUES[e.target.value]); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            {Object.entries(PIPE_DATA).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Pipe Size</label>
          <select value={size} onChange={(e) => { setSize(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100">
            {Object.entries(sizes).map(([k, v]) => <option key={k} value={k}>{v.label} (ID: {v.id}&quot;)</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Flow (gpm)</label>
          <input type="number" value={flow} onChange={(e) => { setFlow(e.target.value); setResult(null) }} placeholder="e.g. 150" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Pipe Length (ft)</label>
          <input type="number" value={length} onChange={(e) => { setLength(e.target.value); setResult(null) }} placeholder="e.g. 100" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">C-Factor</label>
          <input type="number" value={cValue} onChange={(e) => { setCValue(e.target.value); setResult(null) }} className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div className="flex items-end">
          <button onClick={calculate} className="w-full rounded bg-red-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600">Calculate</button>
        </div>
      </div>
      {result && (
        <div className="mt-4 rounded border border-orange-300 bg-white p-3 dark:border-red-700 dark:bg-red-950">
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div><span className="text-orange-600 dark:text-orange-400">Loss/ft:</span> <strong>{result.pPerFoot} psi/ft</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Total loss:</span> <strong>{result.totalLoss} psi</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Velocity:</span> <strong>{result.velocity} ft/s</strong></div>
          </div>
          <p className="mt-2 text-xs text-orange-500 dark:text-orange-500">Using ID = {result.diameter}&quot; | C = {cValue}</p>
        </div>
      )}
    </div>
  )
}
