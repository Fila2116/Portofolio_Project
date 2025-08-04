import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About.tsx'
import ProjectsPage from './pages/Projects.tsx'
import NavBar from './components/NavBar.tsx'
import './index.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
       <NavBar />
       <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element ={<ProjectsPage />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
