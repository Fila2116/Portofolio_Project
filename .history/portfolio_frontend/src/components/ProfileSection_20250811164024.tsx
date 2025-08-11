import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Profile = {
  id: number
  full_name: string
  bio: string
  profile_pic: string
}

function extractItems<T = unknown>(payload: any): T[] {
  if (Array.isArray(payload)) return payload as T[]
  if (payload && Array.isArray(payload.results)) return payload.results as T[]
  if (payload && Array.isArray(payload.data)) return payload.data as T[]
  return []
}

export default function ProfileSection() {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/profiles`)
      .then((res) => res.json())
      .then((data) => setProfiles(extractItems<Profile>(data)))
      .catch((err) => console.error('API error:', err))
  }, [])

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={p.profile_pic} alt={p.full_name} />
                <AvatarFallback>{p.full_name?.[0] ?? 'U'}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base md:text-lg">{p.full_name}</CardTitle>
                <CardDescription className="text-muted-foreground">Team Member</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 leading-relaxed">{p.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
