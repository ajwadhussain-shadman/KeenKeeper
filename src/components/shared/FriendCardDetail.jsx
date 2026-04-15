import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriendsData from '../hook/useFriendsData';
import { PiBellSimpleZBold } from 'react-icons/pi';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuMessageSquareMore, LuPhoneCall, LuVideo } from 'react-icons/lu';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { TbPhoneCall } from 'react-icons/tb';
import { FriendsTimelineContext } from '../context/FriendsTimelineContext';
const FriendCardDetail = () => {
    const { id } = useParams();
    const { friends, loading } = useFriendsData();
    const{ friendsTimeline,addToTimeline}=useContext(FriendsTimelineContext);
    if (loading) {
        return <p>Loading...</p>;
    }

    const friend = friends.find(fr => fr.id === Number(id));

    if (!friend) {
        return <p>Friend not found</p>;
    }

    return (
        <div className='w-11/12 md:w-3/4 mx-auto my-[80px]'>
            <div className='space-y-8 md:space-y-0 md:grid grid-cols-5 grid-rows-2 gap-6'>
                {/* friend id */}
                <div className='p-6 text-center flex items-center flex-col gap-3 shadow bg-white rounded-lg col-span-2 row-span-2'>
                    <img src={friend.picture} className='max-w-[80px] rounded-full' alt="" />
                    <div>
                        <h2 className='font-semibold text-xl text-[#1F2937]'>{friend.name}</h2>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex gap-1 justify-center'> {
                            friend.tags.map(t => {
                                return (
                                    <div className='bg-[#CBFADB]  text-[#244D3F]
                            p-2 text-center rounded-full text-[12px]'>{t}</div>
                                )
                            })
                        }</div>
                        <div>
                            {friend.status === "almost due" && <p className='badge text-center bg-[#EF4444] text-white rounded-full text-[12px]'>{friend.status}</p>}
                            {friend.status === "on-track" && <p className='badge bg-[#244D3F] text-[12px]  text-white rounded-full'>{friend.status}</p>}
                            {friend.status === "overdue" && <p className='badge bg-[#EFAD44] text-[12px] text-white rounded-full'>{friend.status}</p>}
                        </div>
                    </div>
                    <div className='text-[#64748B] space-y-3'>
                        <p className=''>"{friend.bio}"</p>
                        <p className=' text-sm'>{friend.email}</p>
                    </div>
                </div>
                {/* data cards */}
                <div className='col-span-1 row-span-1 py-8 px-4 rounded-lg text-center  bg-white shadow'>
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.days_since_contact}</h2>
                    <p className='text-[#64748B] mt-4'>Days Since Contact</p>
                </div>
                <div className='col-span-1 row-span-1 py-8 px-4 rounded-lg text-center  bg-white shadow'>
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.goal}</h2>
                    <p className='text-[#64748B] mt-4'>Goal (Days)</p>
                </div>
                <div className='col-span-1 row-span-1 py-8 px-4 rounded-lg text-center  bg-white shadow'>
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>{new Date(friend.next_due_date).toLocaleDateString('en-US',{
                        day:'numeric',
                        month:'short',
                        year:'numeric'
                    })}</h2>
                    <p className='text-[#64748B] mt-4'>Next Due</p>
                </div>
                <div className='col-span-3 row-span-1 p-6 bg-white shadow rounded-lg'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl text-[#244D3F]'>Relationship Goal</h2>
                    <button className='btn'>Edit</button>
                </div>
                  <p className='text-[#64748B] mt-4'>Connect every <span className='text-[#1F2937]'>{friend.goal} days</span></p>
                </div>
                <div className='col-span-2 row-span-2 space-y-2'>
                    <button className='btn bg-white rounded-lg w-full'><PiBellSimpleZBold />Snooze 2 weeks</button>
                    <button className='btn bg-white rounded-lg w-full'><FiArchive />Archive</button>
                    <button className='btn bg-white rounded-lg w-full text-[#EF4444]'><RiDeleteBin6Line /> Delete</button>
                </div>
                
                <div className='col-span-3 row-span-1 bg-white shadow rounded-lg p-6'>
                         <h2 className='text-xl text-[#244D3F] font-medium'>Quick Check-In</h2>
                         <div className='mt-4 flex md:flex-row flex-col justify-between items-center gap-4'>
                                <div  onClick={() => addToTimeline("call", friend.name)} className='p-4 btn h-full w-full md:w-[160px] flex flex-col items-center bg-[#F8FAFC] rounded-lg gap-2 text-[#1F2937]'>
                              <TbPhoneCall className='text-3xl' />
                              <p className='text-xl'>Call</p>
                             </div>
                                <div  onClick={() => addToTimeline("text", friend.name)} className='p-4 btn h-full w-full md:w-[160px] flex flex-col items-center bg-[#F8FAFC] rounded-lg gap-2 text-[#1F2937]'>
                               <LuMessageSquareMore className='text-3xl' />
                              <p className='text-xl'>Text</p>
                             </div>
                                <div  onClick={() => addToTimeline("video", friend.name)} className='btn h-full p-4 w-full md:w-[160px] flex flex-col items-center bg-[#F8FAFC] rounded-lg gap-2 text-[#1F2937]'>
                               <LuVideo className='text-3xl' />
                              <p className='text-xl'>Video</p>
                             </div>
                            
                            
                         </div>
                </div>
            </div>

        </div>
    );
};
export default FriendCardDetail;