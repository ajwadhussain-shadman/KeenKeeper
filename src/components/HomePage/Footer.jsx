import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-[80px] pb-[30px]'>
           <div className='md:w-3/4 w-11/12 mx-auto'>
             
             {/* top part */}

             <div className='text-center text-white space-y-4'>
                <h1 className='text-5xl font-bold'>KeenKeeper</h1>
                <p className='text-sm text-white/50'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-xl font-medium'>Social Links</p>
                <div className='flex justify-center gap-3'>
                  <button className='flex justify-center items-center bg-white text-black h-[40px]  rounded-full w-[40px]'><RiInstagramFill/></button>
                  <button className='flex justify-center items-center bg-white text-black h-[40px]  rounded-full w-[40px]'><FaFacebookSquare /></button>
                  <button className='flex justify-center items-center bg-white text-black h-[40px]  rounded-full w-[40px]'><BsTwitterX /></button>
                </div>

                {/* bottom part */}
                <div className='mt-[40px] pt-[30px] border-t border-white/10 md:flex justify-between space-y-4'>
                <p className='text-[#FAFAFA]/30 text-sm'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='text-[#FAFAFA]/30 text-sm '>
                    <span className='mr-4'><a href="">Privacy Policy</a></span>
                    <span className='mr-4'><a href="">Terms of Service  </a></span>
                    <span><a href="">Cookies</a></span>
                    
                </div>
                </div>
             </div>

           </div>
        </div>
    );
};

export default Footer;