import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const flows = [
  {
    label: 'Landing',
    description: 'Main landing page',
    path: '/landing',
  },
  {
    label: 'Onboarding',
    description: 'setup flow',
    path: '/onboarding',
  },
  {
    label: 'Search',
    description: 'Browse and discover content',
    path: '/search',
  },
  {
    label: 'Video Player',
    description: 'Watch a video',
    path: '/video/1',
  },
  {
    label: 'Paywall',
    description: 'Subscription & payment screen',
    path: '/paywall',
  },
  {
    label: 'Collection',
    description: 'Saved items & playlists',
    path: '/collection',
  },
]

function Home() {
  const navigate = useNavigate()
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center relative">
          <button
            onClick={() => setDark(d => !d)}
            className="absolute right-0 top-0 text-lg cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Prototype</p>
          <h1 className="text-3xl font-bold text-foreground">Learn Fast</h1>
          <p className="text-muted-foreground mt-1 text-sm">Select a flow to preview</p>
        </div>

        <div className="flex flex-col gap-3">
          {flows.map((flow) => (
            <button
              key={flow.path}
              onClick={() => navigate(flow.path)}
              className="w-full text-left rounded-xl border border-border bg-card px-5 py-4 hover:bg-accent transition-colors cursor-pointer"
            >
              <div className="font-semibold text-foreground">{flow.label}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{flow.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
