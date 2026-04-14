import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='text-center space-y-4 py-10'>
            <h2 className='text-[#1F2937] font-bold md:text-5xl text-3xl'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] '>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.
            </p>
            <button className='btn mt-4 bg-[#244D3F] text-white font-semibold'><FaPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;