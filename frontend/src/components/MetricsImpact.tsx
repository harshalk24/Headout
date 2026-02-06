import type { POIInsight } from '../types'
import { Expandable } from './Expandable'

interface MetricsImpactProps {
  insight: POIInsight
}

export function MetricsImpact({ insight }: MetricsImpactProps) {
  const m = insight.growth_metrics
  const primary = m?.primary_metrics || []
  const secondary = m?.secondary_metrics || []
  const guardrails = m?.guardrails || []

  return (
    <section className="section metrics-section">
      <h2 className="section-title">Metrics Impact</h2>
      <div className="metrics-grid">
        <div className="metrics-block primary">
          <h3>Primary</h3>
          <ul>
            {primary.map((pm, i) => (
              <li key={i}>
                <Expandable title={pm.metric} defaultExpanded={i === 0}>
                  <div>
                    <p><strong>Hurt by:</strong> {pm.hurt_by.join(', ')}</p>
                    <p><strong>Improved by:</strong> {pm.improved_by.join(', ')}</p>
                  </div>
                </Expandable>
              </li>
            ))}
          </ul>
        </div>
        <div className="metrics-block secondary">
          <h3>Secondary</h3>
          <ul>
            {secondary.map((sm, i) => (
              <li key={i}>
                <Expandable title={`${sm.metric} — ${sm.lever}`} defaultExpanded={false}>
                  <p>Lever: {sm.lever}</p>
                </Expandable>
              </li>
            ))}
          </ul>
        </div>
        <div className="metrics-block guardrails">
          <h3>Guardrails</h3>
          <ul>
            {guardrails.map((g, i) => (
              <li key={i}>
                <Expandable title={`${g.metric} — risk from ${g.risk_from}`} defaultExpanded={false}>
                  <p>Risk from: {g.risk_from}</p>
                </Expandable>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
