import React, { useState } from 'react'
import CompLogo from "../../Images/CompLogo.png"
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DropDownOptions from './DropDownOptions';
import HomeContent from '../Home/HomeContent';

const NavBar = () => {

  const [isdrop,setdrop] = useState(true);

  const setDrop = (e)=>{
    setdrop(!isdrop);
  }
  
  return (
    <>
    <div className="flex border-b-2 shadow-md h-20 w-screen">
      <div className='flex ml-4 md:ml-20 pt-5'>
        <img src={CompLogo} className="h-4/6 w-4/6 mt-1" alt="" />
        <div className='pt-[9px] ml-2 text-xl font-sans font-semibold'>CipherSchools</div>
      </div>
      <div className='hidden min-[800px]:block ml-10 md:ml-40 pt-8 text-lg font-medium'>
        <div className="itemname">Home</div>
      </div>
      <div className='hidden min-[800px]:block ml-4 md:ml-20 pt-8 text-lg font-medium'>
        <div className="itemname">Creative</div>
      </div>
      <div className='hidden min-[800px]:block ml-4 md:ml-20 pt-8 text-lg font-medium'>
        <div className="itemname">Login</div>
      </div>
      <div className='flex min-[800px]:hidden fixed right-4 pt-8'>
        <DropDownOptions setHidden={isdrop}/>
        {isdrop?<ArrowDropDownCircleOutlinedIcon onClick={setDrop}/>:<CancelOutlinedIcon onClick={setDrop}/>}
      </div>
    </div>
    </>
  )
}

export default NavBar