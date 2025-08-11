import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


type Project = {
  id: number
  title: string
  description: string
  image: string
  github: string
  live_demo: string
}

function extractItems<T = unknown>(payload: any): T[] {
  if (Array.isArray(payload)) return payload as T[]
  if (payload && Array.isArray(payload.results)) return payload.results as T[]
  if (payload && Array.isArray(payload.data)) return payload.data as T[]
  return []
}

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(extractItems<Project>(data)))
      .catch(err => console.error('Project API Error:', err))
  }, [])

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
              />
              <p className="text-sm text-foreground/80">{project.description}</p>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild variant="secondary" size="sm">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              </Button>
              <Button asChild size="sm">
                <a href={project.live_demo} target="_blank" rel="noreferrer">Live Demo</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
