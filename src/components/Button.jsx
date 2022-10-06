import React from 'react'

const Button = ({ title }) => {
  return (
    <button type='button' className={`font-poppins hover:bg-veryPaleRed text-white bg-brightRed rounded-[20px] px-4 py-2 text-16px cursor-pointer ${title}`}>Get Started</button>
  )
}

export default Button
