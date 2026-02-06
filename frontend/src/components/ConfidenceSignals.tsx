import type { POIInsight } from '../types'
import { Expandable } from './Expandable'

interface ConfidenceSignalsProps {
  insight: POIInsight
}

export function ConfidenceSignals({ insight }: ConfidenceSignalsProps) {
  const c = insight.confidence
  if (!c) return null

  return (
    <section className="section confidence-section">
      <h2 className="section-title">Confidence</h2>
    <div className="confidence-bar">
      <span className="signal-badge">{c.signal_strength} signal</span>
      <Expandable title="Data coverage & blindspots" defaultExpanded={false}>
        <p><strong>Data coverage:</strong> {c.data_coverage}</p>
        <ul>
          {(c.known_blindspots || []).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Expandable>
    </div>
    </section>
  )
}
