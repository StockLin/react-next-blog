import React from 'react'

const ImageContainer = ({ imageUrl = '' }) => {
  return (
    <div className=' relative w-full content-[""] before:block before:w-full before:pt-[75%]'>
      <div
        className=' absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
    </div>
  )
}

export default ImageContainer;