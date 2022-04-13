import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="text-5xl py-3 md:text-7xl font-bold">Cloud Management</h1>
          <p className="text-2xl">This is our Tech Brand.</p>
          <button className="py-3 px-6 sm:w-[60%]">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
