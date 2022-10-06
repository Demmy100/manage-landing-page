import React from 'react'
import Button from './Button'
import illustration from '../images/illustration-intro.svg'

const Hero = () => {
  return (
   <section className='flex sm:flex-row flex-col-reverse w-full px-10 py-6'>
    <div className='flex justify-center sm:items-start items-center flex-1 flex-col'>
      <h1 className='sm:text-[35px] text-[30px] sm:text-left text-center font-semibold text-darkBlue font-poppins sm:leading-[50px] leading-[35px]'>Bring everyone <br className='sm:flex hidden'/>together to build <br className='sm:flex hidden'/>better products.</h1>
      <p  className='font-poppins  max-w-[470px] text-[16px] sm:text-left text-center text-darkGrayishBlue mt-5'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. </p>
      <Button title="mt-8"/>
    </div>
    <div className='flex flex-1 justify-center items-center relative w-full'>
      <img src={illustration} alt="illustration" className='w-[100%] h-[100%] z-[5] object-contain'/>
    </div>
   </section>
  )
}

export default Hero
