import {useEffect,useState} from 'react'

type Profile ={
    id:number
    full_name : string
    bio:string
    profile_pic: string
} 

export default function ProfileSection() {
    const [profiles,setProfiles] = useState<Profile[]>([])

    useEffect(() =>{
        fetch('http://localhost:8000/api/profiles')
           .then((res) => res.json())
           .then((data) => setProfiles(data))
           .catch((err) => console.error('API error:',err))
    },[])

    return (
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          {profiles.map((profile) => (
            <div key={profile.id} className="mb-4 p-4 border border-gray-200 rounded">
              <div className="flex items-center gap-4">
                <img
                    src={profile.profile_pic}
                    alt={profile.full_name}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-xl font-semibold text-blue-600">{profile.full_name}</h3>
                    <p className="text-gray-600">{profile.bio}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
   )
}
