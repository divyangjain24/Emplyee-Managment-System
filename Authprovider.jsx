import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../components/Utils/localstorage'

export const AuthContext=createContext()


const Authprovider = ({children}) => {
    //localStorage.clear()
    const [userData,setUserData]=useState(null)

useEffect(()=>{
    setLocalStorage()
    const {employees}=getLocalStorage()
setUserData({employees})

},[])



  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}

        </AuthContext.Provider>
  
    </div>
  )
}

export default Authprovider
