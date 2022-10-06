import React from 'react'
import logo from '../images/logo.svg'
import { navMenu } from '../constants'
import Button from './Button'
import close from "../images/icon-close.svg"
import Menu from "../images/icon-hamburger.svg"
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full px-10 py-6 bg-white relative'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <ul className='md:flex hidden flex-1 justify-center items-center list-none'>
                {navMenu.map((menu,index) => (
                    <li key={menu.id} className='font-poppins hover:text-darkGrayishBlue font-semibold cursor-pointer text-[16px] text-darkBlue mr-8'>{menu.title}</li>
                ))}
            </ul>
            <Button title='md:flex hidden cursor-pointer'/>
        </div>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : Menu} alt="menu" onClick={() => setToggle((prev) => !prev)} className='cursor-pointer -mt-6'/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white rounded-[5px] absolute z-10 top-20 justify-center right-0 mx-4 my-2 min-w-[350px] `}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navMenu.map((menu,index) => (
                    <li key={menu.id} className='font-poppins font-semibold hover:text-darkGrayishBlue cursor-pointer text-[16px] text-darkBlue mr-8'>{menu.title}</li>
                ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
