import * as React from 'react';
import Navbar from '~/components/navbar'
import Hero from '~/components/hero';



export default function Index() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Navbar/>
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
           <Hero/>

            {/* 
              Konten
            */}
          </div>
        </main>
      </div>
    </div>
  )
}