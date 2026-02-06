"""
Growth Intelligence API — Headout Internal Dashboard
Single endpoint returning fully structured growth intelligence.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Literal, Optional
from app.intelligence import build_poi_insight

app = FastAPI(
    title="Growth Intelligence API",
    description="Internal decision-support for POI launch and bundling",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class GrowthIntelligenceRequest(BaseModel):
    poi: str = Field(..., min_length=1)
    city: str = Field(..., min_length=1)
    group_type: str = Field(default="Couple")
    travel_date: str = Field(default="2026-02-11")
    time_available: str = Field(default="Full day (6–8 hours)")


@app.post("/api/growth-intelligence")
def get_growth_intelligence(req: GrowthIntelligenceRequest) -> dict:
    """
    Accepts structured input, returns fully structured growth intelligence.
    Never omits required keys. Defensive against missing data.
    """
    try:
        insight = build_poi_insight(
            poi=req.poi,
            city=req.city,
            group_type=req.group_type,
            travel_date=req.travel_date,
            time_available=req.time_available,
        )
        return {"poi_insight": insight}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
def health():
    return {"status": "ok"}
