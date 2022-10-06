import React from 'react'
import { useState } from 'react'
import { testiSlider } from '../constants'
import Button from './Button'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { image, title, content } = testiSlider[index];
  const handleNext = () => {
    setIndex((prev) => prev + 1);

    if(index >= testiSlider.length - 1) {
      setIndex(0);
    }
  }
  const handlePrev = () => {
    setIndex((prev) => prev - 1);

    if(index <= 0) {
      setIndex(testiSlider.length - 1);
    }
  }
  return (
    <section className='flex justify-center w-full flex-col overflow-auto items-center px-10 py-6'>
        <h1  className='xs:text-[35px] text-[30px] text-left font-semibold mb-6 text-darkBlue font-poppins sm:leading-[40px] leading-[30px]'>What they’ve said </h1>
        <div className='bg-veryLightGray mt-6 rounded-md max-w-[500px] h-[200px] text-center px-6'>
          <img src={image} alt="" className='w-[50px] h-[50px] object-contain rounded-full mx-auto translate-y-[-50%]'/>
          <h3 className='font-poppins text-darkBlue font-semibold text-[16px]'>{title}</h3>
          <p className='font-poppins text-[16px] text-darkGrayishBlue mb-4'>{content}</p>
        </div>
        <div className="flex gap-4 sm:mx-0 mx-auto mt-4">
            <button className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-white shadow-lg" onClick={handlePrev}>
              <AiOutlineArrowLeft className="hover:fill-[#d9d9d9]"/>
            </button>
            <button className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-white shadow-lg" onClick={handleNext}>
              <AiOutlineArrowRight className="hover:fill-[#d9d9d9]"/>
            </button>
          </div>

        
        <Button title='mt-6'/>
    </section>
  )
}

export default Testimonial
