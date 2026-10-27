import type { Run } from '../types'
import { StatusBadge } from './StatusBadge'

type Props = {
  run: Run
  onClose: () => void
}

export function RunDetails({ run, onClose }: Props) {
  return (
    <div className="content-enter">
      <button onClick={onClose} className="text-(--accent) border border-(--line) px-2 py-1 hover:bg-(--accent2) hover:text-white mb-2 ">
        Back
      </button>
      <h2 className="text-xl font-semibold text-(--accent) mb-2">{run.name}</h2>
      <p className="text-(--muted)">Repository: {run.repository}</p>
      <p className="text-(--muted)">Branch: {run.branch}</p>
      <p className="text-(--muted)">Status: <StatusBadge status={run.status} /></p>
      <p className="text-(--muted)">Created At: {new Date(run.createdAt).toLocaleString()}</p>
      {run.durationSeconds !== undefined && (
        <p className="text-(--muted)">Duration: {run.durationSeconds} seconds</p>
      )}
      <h3 className='text-lg font-semibold'>Logs:</h3>
      <pre>{run.logs.join('\n')}</pre>
      {run.result && (
        <>
          <h3 className='text-lg font-semibold'>Result:</h3>
          <pre>{run.result}</pre>
        </>
      )}
    </div>
  )
}