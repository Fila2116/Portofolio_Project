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
    return (
        <section className="about-section px-6 py-10 bg-white text-gray-800 max-w-6xl mx-auto">
            <h2 className='text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2' >About Me</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center' >
                <img 
                  src="/Fila.jpg" 
                  alt="Filimon Tesfaye"
                  className="space-y-4 text-lg leading-relaxed"
                  />

                <div className='space-y-4 text-lg leading-relaxed'>
                    <p>
                    Hello! I'm Filimon Tesfaye,a junior fullstack developer based in Ethiopia.
                    I enjoy building modern,clean, and responsive applications using React and Django.    
                    </p>

                    <p>
                    My focus is on crafting practical, user-friendly software - from portofolio sites
                    to workflow engines. I love combining strong backend logic with polished frontend UI.    
                    </p> 
                </div>
            </div>
        </section>
    );
};

export default About;