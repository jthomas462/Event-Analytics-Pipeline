import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [refreshCount, setRefreshCount] = useState(() => {
    // Initialize from localStorage or start at 0
    const saved = localStorage.getItem('pageRefreshCount')
    return saved ? parseInt(saved, 10) : 0
  })

  useEffect(() => {
    // Increment refresh count on mount (each page refresh/reload)
    setRefreshCount((prevCount) => {
      const newCount = prevCount + 1
      localStorage.setItem('pageRefreshCount', newCount.toString())
      return newCount
    })
  }, []) // Empty dependency array means this runs once on mount

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>
        Page refreshed {refreshCount} time{refreshCount !== 1 ? 's' : ''}
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
