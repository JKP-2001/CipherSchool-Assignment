import React from 'react'
import CompLogo from "../../Images/CompLogo.png"

const NavBar = () => {
  return (
    <div className="flex border-b-2 shadow-md h-20 w-screen">
      <aside className='flex ml-4 md:ml-20 pt-5'>
        <img src={CompLogo} className="h-4/6 w-4/6 mt-1" alt="" />
        <div className='pt-[9px] ml-2 text-xl font-sans font-semibold'>CipherSchools</div>
      </aside>
      
    </div>
  )
}

export default NavBar