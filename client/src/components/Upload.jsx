import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
        {/**Title */}
      <h1 className='mb-4 sm:mb-2 text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-600 py-6 md:py-16'>See the magic. Try now</h1>
      
      <div className='text-center '>
            <input type="file" id='upload2' hidden/>
            <label className='inline-flex gap-3 px-7 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 my-4' htmlFor="upload2"><img className='w-5 ' src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm px-3'>Uplode your Image</p></label>
        </div>
    </div>
  )
}

export default Upload
