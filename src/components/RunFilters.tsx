type Props = {
  search: string
  onSearchChange: (value: string) => void
  status: string
  onStatusChange: (value: string) => void
  onReset: () => void
}

export function RunFilters({ search, onSearchChange, status, onStatusChange, onReset }: Props) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <input
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        aria-label="Search runs"
        placeholder="Search by name or repository"
        className="border border-(--line) rounded px-2 py-1 text-sm w-52"
      />
      <select
        value={status}
        onChange={e => onStatusChange(e.target.value)}
        className="border border-(--line) rounded px-2 py-1 text-sm w-32"
      >
        <option value="">All Statuses</option>
        <option value="running">Running</option>
        <option value="succeeded">Succeeded</option>
        <option value="queued">Queued</option>
        <option value="failed">Failed</option>
      </select>
      <span title={search.trim() === '' && status === '' ? 'Select a search term or status filter first' : 'Reset selected filters'}>
        <button
          onClick={onReset}
          disabled={search.trim() === '' && status === ''}
          aria-label="Reset filters"
          className="text-(--accent) border border-(--line) rounded px-2 py-1 text-sm hover:bg-(--accent2) hover:text-white disabled:text-(--muted) disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-(--muted)"
        >
          Reset
        </button>
      </span>
    </div>
  )
}