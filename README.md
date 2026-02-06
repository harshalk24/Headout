# Growth Intelligence Dashboard — Headout

Internal decision-support and diagnostics tool for POI launch and bundling decisions.

## Quick Start

### Backend (Python FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend (Vite + React)

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. The frontend proxies `/api` to the backend.

## API

**POST** `/api/growth-intelligence`

Request body:
```json
{
  "poi": "Eiffel Tower",
  "city": "Paris",
  "group_type": "Couple",
  "travel_date": "2026-02-11",
  "time_available": "Full day (6–8 hours)"
}
```

Returns fully structured `poi_insight` with:
- `growth_decisions` — what to sell, how to position, what to sell next
- `demand` — pre-purchase blockers
- `supply` — on-site / ops issues
- `pain_points` — with source traceability
- `growth_metrics` — primary, secondary, guardrails
- `confidence` — signal strength, blindspots

## Design

- White background, purple accents, rounded cards
- Desktop-first, information-dense
- Expandable sections throughout
- Friction → Decision → Metric traceability
