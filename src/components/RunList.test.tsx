import { render, screen } from '@testing-library/react'
import { RunList } from './RunList'
import { fireEvent } from '@testing-library/react'
import { mockRuns } from '../data/runs'

vi.mock('../data/runsService', () => ({
  fetchRuns: () => Promise.resolve(mockRuns)
}))

describe('RunList', () => {
  it('filters by status', async () => {
    render(<RunList />)
    const select = await screen.findByRole('combobox')
    fireEvent.change(select, { target: { value: 'running' } })
    expect(screen.queryByText('Database migration')).not.toBeInTheDocument()
  })
  it('searches by name', async () => {
  render(<RunList />)
  const input = await screen.findByPlaceholderText('Search by name or repository')
  fireEvent.change(input, { target: { value: 'Database' } })
  expect(screen.getByText('Database migration')).toBeInTheDocument()
  expect(screen.queryByText('Auth refactor')).not.toBeInTheDocument()
})

it('opens run details on click', async () => {
  render(<RunList />)
  const run = await screen.findByText('Auth refactor')
  fireEvent.click(run)
  expect(screen.getByText((content) => content.includes('Starting auth refactor...'))).toBeInTheDocument()
})
})