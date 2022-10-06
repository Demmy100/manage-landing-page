import React from 'react'

const Team = () => {
  return (
    <section className='flex sm:flex-row flex-col justify-between items-center px-10 py-6 bg-brightRed bg-hero-pattern bg-cover bg-bottom right'>
      <div className='flex flex-col flex-1'> <h1 className='xs:text-[35px] text-[30px] sm:text-left text-center font-semibold mb-6 text-white font-poppins sm:leading-[40px] leading-[35px]'> Simplify how your team <br />works today.</h1></div>
      <div className='flex items-end justify-end flex-1'><button type='button' className='font-poppins text-brightRed hover:text-veryPaleRed bg-white rounded-[20px] px-4 py-2 text-16px cursor-pointer'>Get Started</button></div>
    </section>
  )
}

export default Team
