// import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import {Code } from 'lucide-react' ;

type Project = {
  id: number
  title: string
  description: string
  image: string
  github: string
  live_demo: string
}

export default function ProjectSection() {
  // const [projects, setProjects] = useState<Project[]>([])

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/projects')
  //     .then(res => res.json())
  //     .then(data => setProjects(data))
  //     .catch(err => console.error('Project API Error:', err))
  // }, [])

  return (
      <div className='p-6'>
        <h2 className='text-3xl font-bold mb-6'>Projects</h2>
        <div className='grid gap-6 md:grid-cols-2'>
          {projects.map(project =>(
            <div key={project.id} className='bg-white rounded-xl shadow-md p-5' >
             <div className='flex items-center gap-2 mb-3 text-indigo-600'>
               <Code className='w-5 h-5' 

             </div>
            </div>
          ))}

        </div>
      </div>
    // <div className="p-6 bg-white rounded shadow-md">
    //   <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //     {projects.map(project => (
    //       <div key={project.id} className="border rounded p-4 shadow">
    //         <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-2" />
    //         <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
    //         <p className="text-gray-600 mb-2">{project.description}</p>
    //         <div className="flex gap-4">
    //           <a href={project.github} target="_blank" className="text-sm text-gray-700 underline">GitHub</a>
    //           <a href={project.live_demo} target="_blank" className="text-sm text-gray-700 underline">Live Demo</a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}
