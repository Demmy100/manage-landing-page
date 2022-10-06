import React from 'react'
import { aboutUs } from '../constants'

const About = () => {
  return (
    <section className='flex gap-10 sm:flex-row flex-col w-full px-10 py-6'>
      <div className='flex flex-1 flex-col justify-center items-start'>
        <h1 className='text-[30px] sm:text-left text-center font-semibold text-darkBlue font-poppins sm:leading-[40px] leading-[30px]'> What’s different about <br className='sm:flex hidden'/>Manage?</h1>
        <p className='font-poppins  max-w-[470px] text-[16px] sm:text-left text-center text-darkGrayishBlue sm:mb-0 mb-4 mt-5'>Manage provides all the functionality your team needs, without the complexity. 
          Our software is tailor-made for modern digital product teams. </p>
      </div>
      <div className='flex flex-1 justify-center items-center flex-col'>
        {aboutUs.map((about) => (
          <div key={about.id} className='flex justify-center items-start'>
            <span className='bg-brightRed text-white rounded-full font-normal text-[16px] mb-4 px-[10px] py-[2px] flex items-center'>{about.num}</span>
            <div className='flex flex-col ml-4 items-start'>
              <h3 className='font-poppins text-darkBlue font-semibold text-[16px] mb-2'>{about.title}</h3>
              <p className='font-poppins max-w-[470px] text-[16px] text-darkGrayishBlue mb-6'>{about.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
