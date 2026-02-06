import type { POIInsight } from '../types'

interface PainPointsSourcesProps {
  insight: POIInsight
}

export function PainPointsSources({ insight }: PainPointsSourcesProps) {
  const points = insight.pain_points || []

  return (
    <section className="section pain-section">
      <h2 className="section-title">Pain Points & Sources</h2>
      <p className="section-desc">Evidence provenance explicit. Source and confidence shown for each.</p>
      <div className="pain-table-wrap">
        <table className="pain-table">
          <thead>
            <tr>
              <th>Issue</th>
              <th>Stage</th>
              <th>Source</th>
              <th>Confidence</th>
              <th>Friction score</th>
              <th>Example signal</th>
            </tr>
          </thead>
          <tbody>
            {points.map((p, i) => (
              <tr key={i}>
                <td>{p.issue}</td>
                <td><span className="stage-badge">{p.stage}</span></td>
                <td>{p.source}</td>
                <td><span className={`confidence-badge ${(p.confidence || '').toLowerCase()}`}>{p.confidence}</span></td>
                <td>
                  <span className="friction-score" data-score={p.friction_score}>
                    {p.friction_score}/10
                  </span>
                </td>
                <td className="example-signal">{p.example_signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
