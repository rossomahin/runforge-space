import type { RunStatus } from '../types'

const statusStyles: Record<RunStatus, string> = {
  running: 'bg-(--blue) text-white',
  succeeded: 'bg-(--green) text-white',
  failed: 'bg-(--red) text-white',
  queued: 'bg-(--surface3) text-(--muted)',
}

const statusLabels: Record<RunStatus, string> = {
  running: 'Running',
  succeeded: 'Succeeded',
  failed: 'Failed',
  queued: 'Queued',
}

type Props = { status: RunStatus }

export function StatusBadge({ status }: Props) {
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  )
}