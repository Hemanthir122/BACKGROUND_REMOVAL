import React from 'react'
import { assets,plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='mx-4 my-3 text-center lg:mx-44 mt-14 min-h-[75vh]'>
     
        <button className='border-2 px-10 py-2 rounded-full mb-6'>OUR PLANS</button>
        <h1  className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-10'>Choose the plan that's right for you</h1>
        <div className='flex flex-wrap justify-center gap-6 text-left'>
          {plans.map((item,index)=>(
            <div className='bg-white drop-shadow-sm border  rounded-lg py-12 px-6 text-gray-600 hover:scale-105 transition-all duration-300 ' key={index}>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='mt-3 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-4'><span className='text-3xl font-medium'>₹{item.price}</span>/{item.credits} credits</p>
              <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Get Started</button>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default BuyCredit
