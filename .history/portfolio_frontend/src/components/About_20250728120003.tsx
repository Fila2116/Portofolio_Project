import React from 'react'

const About = () => {
    return (
        <section className="about-section px-6 py-10 bg-white text-gray-800 max-w-6xl mx-auto">
            <h2 className='text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2' >About Me</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center' >
                <img 
                  src="/me.jpg" 
                  alt="Filimon Tesfaye"
                  className="space-y-4 text-lg leading-relaxed"
                  />
            </div>

        </section>
    )
}