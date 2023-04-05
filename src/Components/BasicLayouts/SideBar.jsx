import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import NavBar from './NavBar';
import DropDownOptions from './DropDownOptions';

const SideBar = () => {
    return (
        <>
        <div className="hidden min-[1024px]:block ">
            <div className="flex flex-col items-center w-16 h-screen py-8 space-y-10 border-r-[2px] shadow-md pt-20 z-50">
                <div className="item1">
                    <HomeOutlinedIcon fontSize='medium' />
                    <div className='text-[10px]'>Home</div>
                </div>
                <div className="item1 items-center">
                    <WhatshotIcon className='ml-2' fontSize='medium' />
                    <div className='text-[10px]'>Trending</div>
                </div>
                <div className="item1">
                    <PersonAddAltIcon className="ml-3" fontSize='medium' />
                    <div className='text-[10px]'>Following</div>
                </div>
                <div className="item1">
                    <QuestionAnswerOutlinedIcon className='mx-1' fontSize='medium' />
                    <div className='text-[10px]'>Review</div>
                </div>
                <div className="item1">
                    <TourOutlinedIcon fontSize='medium' />
                    <div className='text-[10px]'>Tour</div>
                </div>

            </div>
        </div>
        <div className="onless1024px min-[1024px]:hidden">
            <div className="lowernavbar fixed overflow-hidden rounded-md bottom-0 w-full mt-5">
                <div className="flex justify-between h-14 border-t-[2px] space-x-9 shadow-md px-10 mt-4">
                <div className="item1">
                    <HomeOutlinedIcon fontSize='medium' />
                    <div className='text-[10px]'>Home</div>
                </div>
                <div className="item1 items-center">
                    <WhatshotIcon className='ml-2' fontSize='medium' />
                    <div className='text-[10px]'>Trending</div>
                </div>
                <div className="item1">
                    <PersonAddAltIcon className="ml-3" fontSize='medium' />
                    <div className='text-[10px]'>Following</div>
                </div>
                <div className="item1">
                    <QuestionAnswerOutlinedIcon className='mx-1' fontSize='medium' />
                    <div className='text-[10px]'>Review</div>
                </div>
                <div className="item1">
                    <TourOutlinedIcon fontSize='medium' />
                    <div className='text-[10px]'>Tour</div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar