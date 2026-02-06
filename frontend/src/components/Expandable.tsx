import { useState } from 'react'

interface ExpandableProps {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
}

export function Expandable({ title, children, defaultExpanded = false }: ExpandableProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  return (
    <div className="expandable">
      <button
        type="button"
        className="expandable-trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{title}</span>
        <span className="expandable-icon">{expanded ? '−' : '+'}</span>
      </button>
      {expanded && <div className="expandable-content">{children}</div>}
    </div>
  )
}
