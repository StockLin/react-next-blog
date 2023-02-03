import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';


const Header = () => {
  const menuRef = useRef();
  const [menuItems, setMenuItems] = useState([]);
  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuToggled(false);
      }
    }

    document.body.addEventListener('click', closeMenu);

    const menus = ['Home', 'Categories', 'Politcs', 'Business', 'Health', 'Design', 'Sport', 'Contact'].map(item => item?.toUpperCase());
    setMenuItems(menus);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <header ref={menuRef} className=' bg-white shadow-sm'>
      <div className=' mx-auto container'>

        <div className=' flex p-4 px-8 sm:p-4 justify-between items-center'>
          <Link href={'/'}>
            <h1 className=' py-4 text-2xl font-bold hover:text-black/80 duration-300'>Design</h1>
          </Link>

          <div className=' hidden sm:flex items-center gap-8'>
            <div className=' text-gray-500 sm:flex gap-8'>
              <ImFacebook className=' cursor-pointer hover:text-black/80 duration-300' />
              <ImTwitter className=' cursor-pointer hover:text-black/80 duration-300' />
              <ImYoutube className=' cursor-pointer hover:text-black/80 duration-300' />
            </div>
            <div className=''>
              <input className=' text-gray-500 text-input placeholder:text-gray-300' type="text" placeholder='search...' />
            </div>
          </div>

          <div className=' sm:hidden'>
            <AiOutlineMenu className=' cursor-pointer' onClick={() => setMenuToggled(!menuToggled)} />
          </div>
        </div>

        {/* menu */}
        <nav className=' p-4 hidden sm:block'>
          <ul className=' flex justify-start items-center gap-4 overflow-scroll'>
            {
              menuItems?.map((item, idx) => (
                <li key={idx} className=' py-1 px-4 pl-0 text-sm cursor-pointer after:content-[""] after:mt-2 after:block after:w-0 after:h-[2px] after:bg-black hover:after:w-[100%] after:duration-300'>{item}</li>
              ))
            }
          </ul>
        </nav>

        {/* mobile hidden menu */}
        <div className={` absolute top-0 ${menuToggled ? 'right-0' : 'right-[-100%]'} bg-white shadow-lg flex flex-col w-80 h-screen duration-300 z-10`}>
          <div className=' w-full h-[24px] flex justify-end pr-4 mt-4'>
            <AiOutlineClose className='text-[24px] cursor-pointer' onClick={() => setMenuToggled(!menuToggled)} />
          </div>
          <div className=' flex mt-4'>
            <ul className=' w-full'>
              {
                menuItems?.map((item, idx) => (
                  <li key={idx} className=' p-4 px-8 text-lg cursor-pointer hover:text-black/50 duration-300'>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header