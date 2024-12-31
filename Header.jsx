import React, { useState } from 'react'
import { setLocalStorage } from '../Utils/localstorage';

const Header = () => {
  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between text-white text-3xl font-semibold'>
      <h1 className='text-4xl font-medium'>Hello</h1><br></br>
      <span className='text-white text-5xl font-semibold'>username</span>
      <button onClick ={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-2xl'>Log out</button>
    </div>
  );
};


export default Header
