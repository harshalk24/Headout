import { useState } from 'react'

interface InputSectionProps {
  onDiscover: (params: {
    poi: string
    city: string
    group_type: string
    travel_date: string
    time_available: string
  }) => void
  loading: boolean
}

export function InputSection({ onDiscover, loading }: InputSectionProps) {
  const [poi, setPoi] = useState('Eiffel Tower')
  const [city, setCity] = useState('Paris')
  const [groupType, setGroupType] = useState('Couple')
  const [travelDate, setTravelDate] = useState('2026-02-11')
  const [timeAvailable, setTimeAvailable] = useState('Full day (6–8 hours)')

  return (
    <section className="input-section">
      <div className="input-grid">
        <div className="input-field">
          <label>POI</label>
          <input
            type="text"
            value={poi}
            onChange={(e) => setPoi(e.target.value)}
            placeholder="e.g. Eiffel Tower"
          />
        </div>
        <div className="input-field">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Paris"
          />
        </div>
        <div className="input-field">
          <label>Group type</label>
          <select value={groupType} onChange={(e) => setGroupType(e.target.value)}>
            <option value="Couple">Couple</option>
            <option value="Solo">Solo</option>
            <option value="Family">Family</option>
            <option value="Group">Group</option>
          </select>
        </div>
        <div className="input-field">
          <label>Travel date</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label>Time available</label>
          <select value={timeAvailable} onChange={(e) => setTimeAvailable(e.target.value)}>
            <option value="Half day (3–4 hours)">Half day (3–4 hours)</option>
            <option value="Full day (6–8 hours)">Full day (6–8 hours)</option>
            <option value="Multiple days">Multiple days</option>
          </select>
        </div>
      </div>
      <button
        className="cta-button"
        onClick={() => onDiscover({ poi, city, group_type: groupType, travel_date: travelDate, time_available: timeAvailable })}
        disabled={loading}
      >
        {loading ? 'Discovering…' : 'Discover Experiences'}
      </button>
    </section>
  )
}
