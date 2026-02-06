"""
Pydantic models for Growth Intelligence API.
Strict contract — all fields typed for validation.
"""

from pydantic import BaseModel, Field
from typing import Literal


class DemandBlocker(BaseModel):
    issue: str
    stage: Literal["pre-purchase"]
    user_thought: str
    impact_level: Literal["High", "Medium", "Low"]
    affected_metric: str = "Conversion Rate"


class SupplyIssue(BaseModel):
    issue: str
    on_ground_effect: str
    downstream_risk: Literal["Reviews", "Refunds", "Ops Load"]


class PainPoint(BaseModel):
    issue: str
    stage: Literal["pre-purchase", "on-site"]
    source: Literal["Google Reviews", "Reddit", "TripAdvisor", "YouTube"]
    confidence: Literal["High", "Medium"]
    friction_score: int = Field(ge=1, le=10)
    example_signal: str


class WhatToSell(BaseModel):
    bundle_name: str
    components: list[str]
    why_it_works: dict
    primary_metric_impact: Literal["Conversion Rate", "AOV"]


class HowToPosition(BaseModel):
    primary_positioning: str
    supporting_messages: list[dict]


class WhatToSellNext(BaseModel):
    immediate_upsells: list[dict]
    next_best_bundles: list[dict]
    sequencing_logic: str


class PrimaryMetric(BaseModel):
    metric: str
    hurt_by: list[str]
    improved_by: list[str]


class SecondaryMetric(BaseModel):
    metric: str
    lever: str


class Guardrail(BaseModel):
    metric: str
    risk_from: str


class Confidence(BaseModel):
    signal_strength: Literal["High", "Medium"]
    data_coverage: str
    known_blindspots: list[str]


class POIInsight(BaseModel):
    growth_decisions: dict
    demand: dict
    supply: dict
    pain_points: list
    growth_metrics: dict
    confidence: dict
