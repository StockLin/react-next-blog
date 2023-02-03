import React, { useEffect, useState } from 'react'
import ImageContainer from './ImageContainer'


const Card = ({
  direction = 'responsive', // vertical, horizontal, responsive
  size = 'sm', // sm, md, lg
  title = '',
  subTitle = '',
  content = '',
  createdBy = '',
  createdAt = ''
}) => {
  const [directCss, setDirectCss] = useState('flex-col lg:flex-row');

  useEffect(() => {
    if (direction === 'vertical') {
      setDirectCss('flex-col lg:flex-col');
    } else if (direction === 'horizontal') {
      setDirectCss('flex-row lg:flex-row');
    } else {
      setDirectCss('flex-col lg:flex-row');
    }
  }, [direction]);

  return (
    <div className={` flex ${directCss} bg-gray-50 max-w-[992px] mx-auto`}>
      <div className=' basis-1/2'>
        <ImageContainer imageUrl='https://preview.colorlib.com/theme/meranda/images/big_img_1.jpg.webp' />
      </div>

      {/* card body */}
      <div className=' basis-1/2 p-12 space-y-4'>
        <div>
          <span className=' text-md text-gray-400 uppercase'>Editor&lsquo;s Pick</span>
          <h2 className=' text-2xl'>
            <a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a>
          </h2>
        </div>

        <p className=' text-sm text-gray-500 tracking-wide leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eaque facilis quia voluptas animi atque perspiciatis facere adipisci quis inventore, natus odit, repudiandae fuga alias minima aliquam quam autem aliquid.</p>

        <div className=' flex flex-col space-y-2'>
          <span className=' text-sm space-x-1'>
            <a href="#!">Dave Rogers</a>
            <span className=' text-gray-500'> in </span>
            <a href="#!">Food</a>
          </span>
          <span className=' text-xs text-gray-400 space-x-1'>
            Jun14 3min read
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card