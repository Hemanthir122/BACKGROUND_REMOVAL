import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 ' >
      {/*left side */}
      <div >
        <h1 className='text-4xl xl:text-4xl 2xl:text-5xl font-bold text-neutral-700 leading-tight'>Remove the <br className='max-md:hidden'/><span className='bg-gradient-to-r from-violet-600 to-fuchsia-400 bg-clip-text text-transparent '>background</span> from <br className='max-sm:hidden' /> images for free.</h1>
        <p className='my-5 text-[15px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti, debitis aliquid explicabo nisi cupiditate. Praesentium illo, nisi culpa neque ea harum voluptatibus excepturi? Optio quos earum veritatis beatae architecto?</p>
        <div className=''>
            <input type="file" id='upload1' hidden/>
            <label className='inline-flex gap-3 px-7 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 my-4' htmlFor="upload1"><img className='w-5 ' src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm px-3'>Uplode your Image</p></label>
        </div>
      </div>
       {/*right side */}
      {/* right side */}
    <div className=' '>
        <img src={assets.header_img} alt="Header" />
      </div>
    </div>
  )
}

export default Header
