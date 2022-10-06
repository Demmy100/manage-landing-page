import React from 'react'
import logo2 from '../images/logo2.svg'
import { socials, links1, links2 } from '../constants'
import { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleOnchange = (e) => {
 setEmail(e.target.value);
}
const emailValidation = () => {
 const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
 if(regEx.test(email)){
   setMessage("email is valid");
 }else if(!regEx.test(email)&& email !== ""){
   setMessage("email is not valid");
 }else {
   setMessage("");
 }
};

  return (
  
    <footer className='px-10 py-6 bg-veryDarkBlue'>
      <div className='footer'>
        <div className='flex sm:flex-col flex-col-reverse'>
          <img src={logo2} alt="" className='sm:mt-0 mt-4 w-[150px]'/>
          <div className='flex gap-4 sm:mt-10 mt-6'>
            {socials.map((social) => (
              <img src={social.img} alt='' key={social.id} className=' cursor-pointer'/>
            ))}
          </div>
        </div>
        <div className='flex sm:mt-0 mt-4 flex-col'>
          {links1.map((link1) => (
            <div key={link1.id} className='font-poppins text-[16px] hover:text-brightRed cursor-pointer text-veryLightGray mb-2'>{link1.title}</div>
          ))}
        </div>
        <div className='flex flex-col'>
          {links2.map((link2) => (
            <div key={link2.id} className='font-poppins  hover:text-brightRed cursor-pointer text-[16px] text-veryLightGray mb-2'>{link2.title}</div>
          ))}
        </div>
        <div className='flex flex-col md:items-end items-start'>
            <div className='flex items-center md:-ml-10 -ml-4'>
              <input type="text"  onChange={handleOnchange} placeholder='Updates in your inbox' value={email}   className='rounded-[20px] px-2 py-2 text-darkGrayishBlue'/>
              <button type='button' onClick={emailValidation} className='bg-brightRed  text-white px-2 py-2  hover:bg-veryPaleRed cursor-pointer ml-2 rounded-full'>Go</button>
            </div>
            <p className='text-brightRed font-poppins'>{message}</p>
            <p className='font-poppins text-[14px] text-darkGrayishBlue sm:mt-8 mt-2'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
