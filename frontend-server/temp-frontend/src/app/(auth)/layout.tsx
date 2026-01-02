import React from 'react'
import LoginImage from '../../local-assets/login_user_icon.png';
import Image from 'next/image';


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-teal-950">
      {/* LEFT SECTION - Illustration Placeholder */}
      {/* Hidden on mobile, takes 50% width on large screens */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        {/* CSS Gradient background to emulate the room vibes */}
        <div className="absolute inset-0 bg-gradient-to-b from-lime-50 via-teal-100 to-teal-800 z-0"></div>
        {/* Text Placeholder for the 3D illustration */}
        <div className="z-10 text-center p-8">
           <h2 className="text-4xl font-bold text-teal-900/40 mb-4 select-none">
            thinking!
          </h2> 
          <p className="text-teal-800/40 text-lg select-none">
            <Image src={LoginImage} alt="Illustration" className="no-interaction" draggable="false"/>
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-teal-950 lg:bg-transparent">
        {children}
      </div>
    </div>
  );
}
