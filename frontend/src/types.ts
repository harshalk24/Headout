export interface GrowthIntelligenceRequest {
  poi: string;
  city: string;
  group_type: string;
  travel_date: string;
  time_available: string;
}

export interface DemandBlocker {
  issue: string;
  stage: string;
  user_thought: string;
  impact_level: string;
  affected_metric: string;
}

export interface SupplyIssue {
  issue: string;
  on_ground_effect: string;
  downstream_risk: string;
}

export interface PainPoint {
  issue: string;
  stage: string;
  source: string;
  confidence: string;
  friction_score: number;
  example_signal: string;
}

export interface Bundle {
  bundle_name: string;
  components: string[];
  why_it_works: {
    time_compatibility?: string;
    proximity?: string;
    availability_overlap?: string;
    cognitive_load_reduction?: string;
  };
  primary_metric_impact: string;
}

export interface WhatToSell {
  bundles: Bundle[];
  primary_metric_impact: string;
}

export interface SupportingMessage {
  message: string;
  addresses_friction: string;
}

export interface HowToPosition {
  primary_positioning: string;
  supporting_messages: SupportingMessage[];
}

export interface WhatToSellNext {
  immediate_upsells: { item: string; why_next: string }[];
  next_best_bundles: { bundle: string; why_next: string }[];
  sequencing_logic: string;
}

export interface WhyDecisionsWork {
  demand_frictions_addressed: string[];
  supply_constraints_avoided: string[];
  bundles_operationally_sound: string;
  time_proximity_availability: string;
}

export interface PrimaryMetric {
  metric: string;
  hurt_by: string[];
  improved_by: string[];
}

export interface SecondaryMetric {
  metric: string;
  lever: string;
}

export interface Guardrail {
  metric: string;
  risk_from: string;
}

export interface GrowthMetrics {
  primary_metrics: PrimaryMetric[];
  secondary_metrics: SecondaryMetric[];
  guardrails: Guardrail[];
}

export interface Persona {
  id: string;
  label: string;
  friction_focus: string;
  metric_focus: string;
}

export interface POIInsight {
  growth_decisions: {
    what_to_sell: WhatToSell;
    how_to_position: HowToPosition;
    what_to_sell_next: WhatToSellNext;
    why_decisions_work: WhyDecisionsWork;
  };
  demand: {
    blockers: DemandBlocker[];
    summary: string;
  };
  supply: {
    issues: SupplyIssue[];
    summary: string;
  };
  pain_points: PainPoint[];
  growth_metrics: GrowthMetrics;
  confidence: {
    signal_strength: string;
    data_coverage: string;
    known_blindspots: string[];
  };
  personas?: Persona[];
}

export interface APIResponse {
  poi_insight: POIInsight;
}
