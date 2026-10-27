import { RunList } from './components/RunList'

function App() {
  return (
    <div className="min-h-screen bg-(--bg)">
      <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-(--accent) mb-6">Runs</h1>
       <RunList />
    </div>
  </div>
  )
}

export default App