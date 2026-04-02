'use client'

import { useState } from 'react'

export function WaterSupplyCalc() {
  const [staticP, setStaticP] = useState('')
  const [residualP, setResidualP] = useState('')
  const [flowMeasured, setFlowMeasured] = useState('')
  const [desiredP, setDesiredP] = useState('')
  const [elevation, setElevation] = useState('0')
  const [result, setResult] = useState(null)

  function calculate() {
    const ps = parseFloat(staticP)
    const pr = parseFloat(residualP)
    const qm = parseFloat(flowMeasured)
    const pd = parseFloat(desiredP)
    const elev = parseFloat(elevation) || 0

    if (!ps || !pr || !qm || !pd || ps <= pr || ps <= pd) {
      setResult(null)
      return
    }

    const elevAdj = elev * 0.433
    const adjStatic = ps - elevAdj
    const adjResidual = pr - elevAdj

    const ratio = (adjStatic - pd) / (ps - pr)
    const qAvailable = qm * Math.pow(ratio, 0.54)

    // Generate curve points
    const points = []
    for (let p = Math.max(10, Math.floor(pd)); p <= adjStatic; p += 5) {
      const r = (adjStatic - p) / (ps - pr)
      if (r > 0) {
        points.push({ pressure: p, flow: Math.round(qm * Math.pow(r, 0.54)) })
      }
    }

    setResult({
      qAvailable: Math.round(qAvailable),
      adjStatic: adjStatic.toFixed(1),
      adjResidual: adjResidual.toFixed(1),
      elevAdj: elevAdj.toFixed(1),
      points,
    })
  }

  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 dark:border-red-800 dark:bg-red-950/30">
      <h3 className="mt-0 text-lg font-semibold text-orange-900 dark:text-orange-100">Water Supply Curve Calculator</h3>
      <p className="text-sm text-orange-700 dark:text-orange-300">Q_available = Q_measured x [(P_static - P_desired) / (P_static - P_residual)]^0.54</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Static Pressure (psi)</label>
          <input type="number" value={staticP} onChange={(e) => { setStaticP(e.target.value); setResult(null) }} placeholder="e.g. 85" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Residual Pressure (psi)</label>
          <input type="number" value={residualP} onChange={(e) => { setResidualP(e.target.value); setResult(null) }} placeholder="e.g. 72" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Measured Flow (gpm)</label>
          <input type="number" value={flowMeasured} onChange={(e) => { setFlowMeasured(e.target.value); setResult(null) }} placeholder="e.g. 1100" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Desired Residual (psi)</label>
          <input type="number" value={desiredP} onChange={(e) => { setDesiredP(e.target.value); setResult(null) }} placeholder="e.g. 20" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-orange-800 dark:text-orange-200">Elevation Above Test (ft)</label>
          <input type="number" value={elevation} onChange={(e) => { setElevation(e.target.value); setResult(null) }} placeholder="0" className="mt-1 w-full rounded border border-orange-300 bg-white px-2 py-1.5 text-sm dark:border-red-700 dark:bg-red-950 dark:text-orange-100" />
        </div>
        <div className="flex items-end">
          <button onClick={calculate} className="w-full rounded bg-red-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600">Calculate</button>
        </div>
      </div>
      {result && (
        <div className="mt-4 rounded border border-orange-300 bg-white p-3 dark:border-red-700 dark:bg-red-950">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="text-orange-600 dark:text-orange-400">Available flow:</span> <strong>{result.qAvailable} gpm</strong> at {desiredP} psi</div>
            <div><span className="text-orange-600 dark:text-orange-400">Elevation adj:</span> <strong>-{result.elevAdj} psi</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Adjusted static:</span> <strong>{result.adjStatic} psi</strong></div>
            <div><span className="text-orange-600 dark:text-orange-400">Adjusted residual:</span> <strong>{result.adjResidual} psi</strong></div>
          </div>
          {result.points.length > 0 && (
            <div className="mt-3">
              <p className="text-xs font-medium text-orange-600 dark:text-orange-400">Supply curve points:</p>
              <div className="mt-1 max-h-32 overflow-y-auto text-xs">
                <table className="w-full">
                  <thead><tr className="text-orange-500"><th className="text-left">Pressure (psi)</th><th className="text-left">Flow (gpm)</th></tr></thead>
                  <tbody>
                    {result.points.map((p, i) => <tr key={i} className="text-orange-800 dark:text-orange-200"><td>{p.pressure}</td><td>{p.flow}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
