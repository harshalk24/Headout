import type { GrowthIntelligenceRequest, APIResponse } from './types'

const API_BASE = '/api'

export async function fetchGrowthIntelligence(
  params: GrowthIntelligenceRequest
): Promise<APIResponse> {
  const res = await fetch(`${API_BASE}/growth-intelligence`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  return res.json()
}
