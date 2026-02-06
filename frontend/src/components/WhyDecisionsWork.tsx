import type { POIInsight } from '../types'

interface WhyDecisionsWorkProps {
  insight: POIInsight
}

export function WhyDecisionsWork({ insight }: WhyDecisionsWorkProps) {
  const why = insight.growth_decisions?.why_decisions_work
  if (!why) return null

  return (
    <section className="section why-section">
      <h2 className="section-title">Why These Decisions Work</h2>
      <div className="why-grid">
        <div className="why-block">
          <h4>Demand frictions addressed</h4>
          <ul>
            {(why.demand_frictions_addressed || []).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="why-block">
          <h4>Supply constraints avoided</h4>
          <ul>
            {(why.supply_constraints_avoided || []).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="why-block">
          <h4>Bundles operationally sound</h4>
          <p>{why.bundles_operationally_sound}</p>
        </div>
        <div className="why-block">
          <h4>Time, proximity, availability</h4>
          <p>{why.time_proximity_availability}</p>
        </div>
      </div>
    </section>
  )
}
