import { useRuns } from '../hooks/useRuns'
import { useState } from 'react'
import type { Run } from '../types'
import { RunDetails } from './RunDetails'
import { RunFilters } from './RunFilters'
import { StatusBadge } from './StatusBadge'

export function RunList() {
  const { data, loading, error, retry } = useRuns()
  const [selectedRun, setSelectedRun] = useState<Run | null>(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  
  if (selectedRun) return <RunDetails run={selectedRun} onClose={() => setSelectedRun(null)} />
  if (loading) return <div>Loading...</div>
  if (error) return (
    <div className="content-enter">
      <p>error: {error}</p>
      <button onClick={retry}>Retry</button>
    </div>
  )

  const filtered = data.filter(run => {
    const matchesSearch = run.name.toLowerCase().includes(search.toLowerCase()) || run.repository.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === '' || run.status === statusFilter
    return matchesSearch && matchesStatus
  })
  const filtersBlock = (
    <RunFilters 
      search={search} 
      onSearchChange={setSearch} 
      status={statusFilter} 
      onStatusChange={setStatusFilter} 
      onReset={() => { setSearch(''); setStatusFilter('') }}
    />
  )

  if (filtered.length === 0) return (
    <div className="content-enter">
      {filtersBlock}
      <p>No runs found.</p>
    </div>
  )


  return (
    <div className="content-enter">
      {filtersBlock}
      {filtered.map(run => (
        <div key={run.id} onClick={() => setSelectedRun(run)} className="bg-(--surface) border border-(--line) rounded-lg p-4 mb-2 cursor-pointer hover:border-(--line2) hover:bg-(--surface2)">
          <h3 className="font-semibold text-(--accent) m-0">{run.name}</h3>
          <p className="text-(--muted) text-sm">{run.repository} · {run.branch}</p>
          <p className="text-(--muted) text-sm">Status: <StatusBadge status={run.status} /></p>
          <p>Created At: {new Date(run.createdAt).toLocaleString()}</p>
          {run.durationSeconds !== undefined && (
            <p>Duration: {run.durationSeconds} seconds</p>
          )}
          
        </div>
      ))}
    </div>
  )
}