import { useState } from 'react'
import './App.css'
import { fetchGrowthIntelligence } from './api'
import type { POIInsight } from './types'
import { InputSection } from './components/InputSection'
import { DecisionBrief } from './components/DecisionBrief'
import { WhyDecisionsWork } from './components/WhyDecisionsWork'
import { PersonaLens } from './components/PersonaLens'
import { FrictionMap } from './components/FrictionMap'
import { PainPointsSources } from './components/PainPointsSources'
import { MetricsImpact } from './components/MetricsImpact'
import { ConfidenceSignals } from './components/ConfidenceSignals'

function App() {
  const [insight, setInsight] = useState<POIInsight | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDiscover = async (params: {
    poi: string
    city: string
    group_type: string
    travel_date: string
    time_available: string
  }) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetchGrowthIntelligence(params)
      setInsight(res.poi_insight)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch intelligence')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Growth Intelligence</h1>
        <span className="app-subtitle">Headout Internal Dashboard</span>
      </header>

      <InputSection onDiscover={handleDiscover} loading={loading} />

      {error && (
        <div className="error-banner">
          {error}
        </div>
      )}

      {insight && (
        <main className="dashboard">
          <ConfidenceSignals insight={insight} />
          <DecisionBrief insight={insight} />
          <WhyDecisionsWork insight={insight} />
          {insight.personas && insight.personas.length > 0 && (
            <PersonaLens insight={insight} />
          )}
          <FrictionMap insight={insight} />
          <PainPointsSources insight={insight} />
          <MetricsImpact insight={insight} />
        </main>
      )}
    </div>
  )
}

export default App
