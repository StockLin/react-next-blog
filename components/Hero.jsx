import React from 'react'

const Hero = ({ children }) => {
  return (
    <div className=' border border-red-500 container mx-auto '>
      {children}
    </div>
  )
}

export default Hero