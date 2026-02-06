import { useState } from 'react'
import type { POIInsight, Persona } from '../types'

interface PersonaLensProps {
  insight: POIInsight
}

export function PersonaLens({ insight }: PersonaLensProps) {
  const personas = insight.personas || []
  const [selected, setSelected] = useState<Persona | null>(personas[0] || null)

  if (personas.length === 0) return null

  return (
    <section className="section persona-section">
      <h2 className="section-title">Persona Lens</h2>
      <div className="persona-pills">
        {personas.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`persona-pill ${selected?.id === p.id ? 'active' : ''}`}
            onClick={() => setSelected(p)}
          >
            {p.label}
          </button>
        ))}
      </div>
      {selected && (
        <div className="persona-detail">
          <p><strong>Most relevant friction:</strong> {selected.friction_focus}</p>
          <p><strong>Primary metric impact:</strong> {selected.metric_focus}</p>
        </div>
      )}
    </section>
  )
}
