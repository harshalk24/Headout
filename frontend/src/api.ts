import type { GrowthIntelligenceRequest, APIResponse } from './types'

export async function fetchGrowthIntelligence(
  _params: GrowthIntelligenceRequest
): Promise<APIResponse> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800))

  return {
    poi_insight: {
      confidence_score: 0.82,
      decision_brief:
        'Eiffel Tower demand remains strong for couples with full-day availability, making premium experiences viable.',
      why_decisions_work: [
        'Couples prefer skip-the-line experiences',
        'Full-day travelers show higher AOV',
      ],
      personas: [
        {
          name: 'Experience Seeker Couple',
          motivation: 'Maximize iconic experiences in limited time',
          objections: ['Long queues', 'Overcrowding'],
        },
      ],
      frictions: ['Peak-hour congestion', 'Ticket availability'],
      pain_points: ['Waiting time', 'Unclear entry process'],
      metrics_impact: {
        conversion_lift: '+8%',
        aov_increase: '+12%',
      },
    },
  }
}
