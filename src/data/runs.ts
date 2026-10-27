import type { Run } from '../types'

export const mockRuns: Run[] = [
  {
    id: '1',
    name: 'Auth refactor',
    repository: 'web-platform',
    branch: 'feat/auth',
    status: 'running',
    createdAt: '2026-10-26T10:00:00Z',
    durationSeconds: 45,
    logs: ['Starting auth refactor...', 'Processing tokens...'],
    result: undefined
  },
  {
    id: '2',
    name: 'UI overhaul',
    repository: 'web-platform',
    branch: 'feat/ui-overhaul',
    status: 'succeeded',
    createdAt: '2026-10-25T14:30:00Z',
    durationSeconds: 120,
    logs: ['Starting UI overhaul...', 'Applying new styles...', 'UI overhaul completed successfully.'],
    result: 'UI overhaul completed successfully.'
  },
  {
    id: '3',
    name: 'Database migration',
    repository: 'database-service',
    branch: 'feat/db-migration',
    status: 'failed',
    createdAt: '2026-10-24T09:15:00Z',
    durationSeconds: 90,
    logs: ['Starting database migration...', 'Encountered an error during migration.'],
    result: 'Database migration failed due to a connection timeout.'
  },
  {
    id: '4',
    name: 'Performance optimization',
    repository: 'performance-tools',
    branch: 'feat/performance',
    status: 'queued',
    createdAt: '2026-10-27T08:45:00Z',
    logs: [],
    result: undefined
  },
  {
    id: '5',
    name: 'Security patch',
    repository: 'security-service',
    branch: 'fix/security-patch',
    status: 'running',
    createdAt: '2026-10-27T11:20:00Z',
    durationSeconds: 30,
    logs: ['Starting security patch...', 'Applying security fixes...'],
    result: undefined
  },
  {
    id: '6',
    name: 'API version update',
    repository: 'api-service',
    branch: 'feat/api-v2',
    status: 'succeeded',
    createdAt: '2026-10-26T15:10:00Z',
    durationSeconds: 75,
    logs: ['Starting API version update...', 'Updating endpoints...', 'API version update completed successfully.'],
    result: 'API version update completed successfully.'
  }
]