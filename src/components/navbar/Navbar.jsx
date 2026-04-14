import React from 'react';
import MyLinks from './MyLinks';
import { RiHome2Line } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';
import { FaChartLine } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='shadow'>
               <div className=' space-y-3 sm:space-y-0 sm:flex justify-between w-9/10 mx-auto py-4'>
            <div><h2 className=''><span className='font-extrabold text-2xl text-[#1F2937]'>Keen</span><span className='font-semibold text-2xl text-[#244D3F]'>Keeper</span></h2></div>
            <div className='flex justify-between items-center'>
                <MyLinks to={'/'} classname={'flex items-center gap-1'}><RiHome2Line /> Home</MyLinks>
                <MyLinks to={'/Timeline'} classname={'flex items-center gap-1'}><IoTimeOutline />Timeline</MyLinks>
                <MyLinks to={'/stats'} classname={'flex items-center gap-1'}><FaChartLine /> Stats</MyLinks>
                
            </div>
        </div>
        </div>
     
    );
};

export default Navbar;