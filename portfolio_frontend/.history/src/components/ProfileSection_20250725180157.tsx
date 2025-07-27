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
}