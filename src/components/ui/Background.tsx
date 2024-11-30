// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */


import React from 'react'



const BackgroundBeamsWithCollision = () => {
  return (
<div className="bg-transparent h-[100vh] fixed inset-0 flex items-center justify-center px-16">
  <div className="relative w-full  max-w-lg">
    <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

    <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

  </div>
</div>
  )
}

export default BackgroundBeamsWithCollision