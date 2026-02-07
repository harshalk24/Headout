import type { GrowthIntelligenceRequest, APIResponse } from './types'

export async function fetchGrowthIntelligence(
  _params: GrowthIntelligenceRequest
): Promise<APIResponse> {
  await new Promise((res) => setTimeout(res, 600))

  return {
    poi_insight: {
      growth_decisions: {
        what_to_sell: {
          bundles: [
            {
              bundle_name: 'Eiffel Tower + Seine River Cruise',
              components: ['Eiffel Tower Entry', 'Seine River Cruise'],
              why_it_works: {
                time_compatibility: 'Fits within full-day availability',
                proximity: 'Same city zone, minimal transit',
                availability_overlap: 'Morning POI + afternoon cruise',
                cognitive_load_reduction:
                  'Single booking covers two must-do experiences',
              },
              primary_metric_impact: 'Conversion Rate',
            },
          ],
          primary_metric_impact: 'Conversion Rate',
        },

        how_to_position: {
          primary_positioning: 'Skip the line. See more. Plan less.',
          supporting_messages: [
            {
              message: 'Skip-the-line access — no queue anxiety',
              addresses_friction: 'Queue anxiety',
            },
            {
              message: 'Clear entry instructions sent before visit',
              addresses_friction: 'Entry confusion',
            },
            {
              message: 'Flexible time slots — choose what fits your day',
              addresses_friction: 'Time uncertainty',
            },
          ],
        },

        what_to_sell_next: {
          immediate_upsells: [
            {
              item: 'Skip-the-line upgrade',
              why_next: 'Removes biggest booking friction',
            },
            {
              item: 'Audio guide add-on',
              why_next: 'Improves on-ground experience',
            },
          ],
          next_best_bundles: [
            {
              bundle: 'Eiffel Tower + Louvre Museum',
              why_next: 'Natural cultural extension',
            },
            {
              bundle: 'Eiffel Tower + Versailles',
              why_next: 'Appeals to full-day planners',
            },
          ],
          sequencing_logic:
            'Sell Eiffel Tower first, then upsell depth experiences',
        },

        why_decisions_work: {
          demand_frictions_addressed: [
            'Queue anxiety',
            'Entry confusion',
            'Time uncertainty',
          ],
          supply_constraints_avoided: [
            'Capacity limits',
            'Time-slot rigidity',
          ],
          bundles_operationally_sound:
            'Experiences operate independently with aligned timing',
          time_proximity_availability:
            'Minimal transit and compatible availability windows',
        },
      },

      demand: {
        blockers: [
          {
            issue: 'Queue anxiety',
            stage: 'Pre-purchase',
            user_thought: 'Will I spend hours waiting?',
            impact_level: 'High',
            affected_metric: 'Conversion Rate',
          },
        ],
        summary:
          'Users hesitate primarily due to uncertainty around wait times.',
      },

      supply: {
        issues: [
          {
            issue: 'Capacity limits',
            on_ground_effect: 'Tickets sell out quickly',
            downstream_risk: 'Lost peak-hour demand',
          },
        ],
        summary:
          'Supply constraints require careful slot and bundle planning.',
      },

      pain_points: [
        {
          issue: 'Unclear entry gates',
          stage: 'Arrival',
          source: 'User reviews',
          confidence: 'High',
          friction_score: 8,
          example_signal: 'Multiple reviews mention entry confusion',
        },
      ],

      growth_metrics: {
        primary_metrics: [
          {
            metric: 'Conversion Rate',
            hurt_by: ['Queue anxiety', 'Entry confusion'],
            improved_by: ['Skip-the-line bundles'],
          },
        ],
        secondary_metrics: [
          {
            metric: 'Average Order Value',
            lever: 'Bundled experiences',
          },
        ],
        guardrails: [
          {
            metric: 'Refund Rate',
            risk_from: 'Over-promising skip-the-line benefits',
          },
        ],
      },

      confidence: {
        signal_strength: 'High',
        data_coverage: 'Strong for Paris POIs',
        known_blindspots: ['Weather variability'],
      },

      personas: [
        {
          id: 'couple_explorer',
          label: 'Experience-Seeking Couple',
          friction_focus: 'Queue anxiety',
          metric_focus: 'Conversion Rate',
        },
      ],
    },
  }
}
