
import './App.css'
import ProfileSection from './components/ProfileSection'
import ProjectSection from './components/ProjectSection'


function App() {
  

  return (
    <>
      <div className = "min-h-screen bg-gray-100 flex items-center justify-center" >
        <div className="max-w-2xl w-full" >
           <ProfileSection />
           <ProjectSection />
      
        </div>
      </div>
    </>
  )
}

export default App
