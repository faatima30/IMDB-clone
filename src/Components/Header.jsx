import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex py-7 px-10 justify-between mx-3 max-w-6xl sm:mx-auto items-center'>
        <div className="flex ">
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="flex items-center space-x-5">
          <DarkModeSwitch/>
          <Link href="/">
            <h2 className='text-2xl '>
              <span className='font-bold mr-1 bg-amber-500 py-1 px-2 rounded-lg '>IMDB</span>
              <span className='text-xl hidden sm:inline  '>Clone</span>
            </h2>
          </Link>
        </div>
    </div>
  )
}
