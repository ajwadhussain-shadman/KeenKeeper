import React from 'react';
import { FaPlus } from 'react-icons/fa';
import useFriendsData from '../hook/useFriendsData';

const Banner = () => {
    const {friends}=useFriendsData();
    return (
        <div className='text-center space-y-4 py-10 md:w-3/4 w-11/12 mx-auto'>
            <h2 className='text-[#1F2937] font-bold md:text-5xl text-3xl'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] '>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.
            </p>
            <button className='btn mt-4 bg-[#244D3F] text-white font-semibold'><FaPlus />Add a Friend</button>
        {/* Summery Card */}
              <div className='grid grid-cols-2 md:grid-cols-4 justify-between my-6 gap-6 '>
                <div className='p-8 text-center space-y-2 shadow rounded-lg bg-white'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>{friends.length}</p>
                    <p  className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='p-8 text-center space-y-2 shadow rounded-lg bg-white'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>3</p>
                    <p  className='text-[#64748B]'>On Track</p>
                </div>
                <div className='p-8 text-center space-y-2 shadow rounded-lg bg-white'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>6</p>
                    <p  className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className='p-8 text-center space-y-2 shadow rounded-lg bg-white'>
                    <p className='font-semibold text-3xl text-[#244D3F]'>10</p>
                    <p  className='text-[#64748B]'>Interactions This Month</p>
                </div>
                
              </div>
            
        </div>
    );
};

export default Banner;