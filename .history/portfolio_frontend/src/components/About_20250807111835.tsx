import React from 'react'
import {useEffect,useState} from 'react';

type  Profile = {
    id:number;
    full_name:string;
    bio:string;
    profile_pic:string;
}

const About = () => {
    const [profile,setProfile] = useState <Profile | null>(null)
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URL}/api/profiles`)
           .then((res) => res.json() )
           .then((data) => setProfile(data[0]))
           .catch((err) => console.error("Profile fetch error:", err )); 
    },[] );
    if(!profile) return <div className='p-6' >Loading profile.....</div>;
    return (
        <section className="about-section px-6 py-10 bg-white text-gray-800 max-w-6xl mx-auto">
            <h2 className='text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2'>About Me</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                <img 
                    src={profile.profile_pic} 
                    alt={profile.full_name}
                    className="w-full rounded shadow"
                />

                <div className='space-y-4 text-lg leading-relaxed'>
                   <p>{profile.bio}</p>
                </div>
            </div>
        </section>
    );
};

export default About;