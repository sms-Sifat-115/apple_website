import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="w-full h-full flex justify-between items-center">
        <div className="rounded-full text-white">
          Loading 
        </div>
        <div className='pl-5'>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    </Html>
  )
}

export default Loader