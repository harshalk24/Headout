import type { POIInsight } from '../types'
import { Expandable } from './Expandable'

interface DecisionBriefProps {
  insight: POIInsight
}

export function DecisionBrief({ insight }: DecisionBriefProps) {
  const gd = insight.growth_decisions || {}
  const what_to_sell = gd.what_to_sell || { bundles: [] }
  const how_to_position = gd.how_to_position || { primary_positioning: '', supporting_messages: [] }
  const what_to_sell_next = gd.what_to_sell_next || { immediate_upsells: [], next_best_bundles: [], sequencing_logic: '' }

  return (
    <section className="section decision-brief">
      <h2 className="section-title">Decision Brief</h2>
      <div className="decision-cards">
        <div className="decision-card">
          <h3>What to Sell</h3>
          <ul className="bullet-list">
            {(what_to_sell.bundles || []).map((b, i) => (
              <li key={i}>
                <Expandable
                  title={b.bundle_name}
                  defaultExpanded={i === 0}
                >
                  <div className="why-it-works">
                    <h4>Why this works</h4>
                    <ul>
                      {b.why_it_works?.time_compatibility && (
                        <li><strong>Time:</strong> {b.why_it_works.time_compatibility}</li>
                      )}
                      {b.why_it_works?.proximity && (
                        <li><strong>Proximity:</strong> {b.why_it_works.proximity}</li>
                      )}
                      {b.why_it_works?.availability_overlap && (
                        <li><strong>Availability:</strong> {b.why_it_works.availability_overlap}</li>
                      )}
                      {b.why_it_works?.cognitive_load_reduction && (
                        <li><strong>Cognitive load:</strong> {b.why_it_works.cognitive_load_reduction}</li>
                      )}
                    </ul>
                    <p className="metric-tag">Primary metric: {b.primary_metric_impact}</p>
                  </div>
                </Expandable>
              </li>
            ))}
          </ul>
        </div>

        <div className="decision-card">
          <h3>How to Position</h3>
          <p className="primary-positioning">{how_to_position.primary_positioning}</p>
          <ul className="bullet-list">
            {(how_to_position.supporting_messages || []).map((m, i) => (
              <li key={i}>
                <Expandable title={m.message} defaultExpanded={false}>
                  <p className="addresses-friction">Addresses: <strong>{m.addresses_friction}</strong></p>
                </Expandable>
              </li>
            ))}
          </ul>
        </div>

        <div className="decision-card">
          <h3>What to Sell Next</h3>
          <h4 className="sub-head">Immediate upsells</h4>
          <ul className="bullet-list">
            {(what_to_sell_next.immediate_upsells || []).map((u, i) => (
              <li key={i}>
                <Expandable title={u.item} defaultExpanded={false}>
                  <p>{u.why_next}</p>
                </Expandable>
              </li>
            ))}
          </ul>
          <h4 className="sub-head">Next-best bundles</h4>
          <ul className="bullet-list">
            {(what_to_sell_next.next_best_bundles || []).map((b, i) => (
              <li key={i}>
                <Expandable title={b.bundle} defaultExpanded={false}>
                  <p>{b.why_next}</p>
                </Expandable>
              </li>
            ))}
          </ul>
          <Expandable title="Sequencing logic" defaultExpanded={false}>
            <p>{what_to_sell_next.sequencing_logic}</p>
          </Expandable>
        </div>
      </div>
    </section>
  )
}
