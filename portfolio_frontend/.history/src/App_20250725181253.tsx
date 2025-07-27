import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileSection from './components/ProfileSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "min-h-screen bg-gray-100 flex items-center justify-center" >
        <div className="max-w-2xl w-full" >
           <ProfileSection />
        </div>
      </div>
    </>
  )
}

export default App
