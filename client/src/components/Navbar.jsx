import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, useClerk, UserButton, useUser }  from "@clerk/clerk-react";

const Navbar = () => {

  const {openSignIn}=useClerk();
  const {isSignedIn,user}=useUser()


  return (
    <div className='flex justify-between items-center mx-3 py-3 lg:mx-42'  >
      <Link to="/"><img className='mx-4 w-32 sm:w-44' src={assets.logo} alt="" /></Link>{
        isSignedIn ? <div>
          <UserButton/>
        </div>:
    
      <button onClick={()=>openSignIn({})} className='bg-zinc-800 gap-4 flex  items-center mx-3   py-2 sm:px-8 sm:py-3   text-white px-4 rounded-full text-sm'>Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" /></button>
    }</div>
  )
}

export default Navbar;