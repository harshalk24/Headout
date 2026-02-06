import type { POIInsight } from '../types'

interface FrictionMapProps {
  insight: POIInsight
}

export function FrictionMap({ insight }: FrictionMapProps) {
  const demand = insight.demand?.blockers || []
  const supply = insight.supply?.issues || []

  return (
    <section className="section friction-section">
      <h2 className="section-title">Friction Map</h2>
      <div className="friction-grid">
        <div className="friction-column demand">
          <h3>Demand</h3>
          <ul className="friction-list">
            {demand.map((b, i) => (
              <li key={i} className="friction-item">
                <div className="friction-meta">
                  <span className="impact-badge">{b.impact_level}</span>
                  <span className="metric-tag">{b.affected_metric}</span>
                </div>
                <p className="user-thought">"{b.user_thought}"</p>
                <p className="blocker">{b.issue}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="friction-column supply">
          <h3>Supply</h3>
          <ul className="friction-list">
            {supply.map((s, i) => (
              <li key={i} className="friction-item">
                <div className="friction-meta">
                  <span className="risk-badge">{s.downstream_risk}</span>
                </div>
                <p className="issue">{s.issue}</p>
                <p className="on-ground">{s.on_ground_effect}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
