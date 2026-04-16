import React, { act, useContext, useState } from 'react';
import { FriendsTimelineContext } from '../context/FriendsTimelineContext';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
const pressedAction = {
    call: { icon: callImg, type: "call" },
    text: { icon: textImg, type: "text" },
    video: { icon: videoImg, type: "video" }
}

const TimeLine = () => {
    const { friendsTimeline, addToTimeline } = useContext(FriendsTimelineContext);
     const [filter,setFilter]=useState('all');
     const NewTimeLine=filter=="all"?friendsTimeline:friendsTimeline.filter(friend=>friend.action==filter);
    console.log(friendsTimeline);
    return (
        <div className='bg-[#F8FAFC] min-h-screen'>
            <div className='md:w-3/4 w-11/12 mx-auto py-[80px] space-y-6'>
                <h2 className='text-[#1F2937] text-3xl md:text-5xl font-bold'>Timeline</h2>
                <select defaultValue="Pick a color" className="select text-[#64748B]">
                    <option disabled={true}>Filter timeline</option>
                    <option onClick={()=>setFilter('all')}>all</option>
                    <option  onClick={()=>setFilter('call')}>call</option>
                    <option  onClick={()=>setFilter('text')}>text</option>
                    <option  onClick={()=>setFilter('video')}>video</option>
                </select>
                {
                 NewTimeLine.length===0 ? (<div className='flex justify-center items-center mt-10 bg-white shadow rounded-lg p-10'><h2 className='text-3xl font-bold'>No Activity found</h2></div>) :(  NewTimeLine.map(friend => {
                        const action = pressedAction[friend.action];
                        return (
                            <div className='bg-white p-4 rounded-lg flex gap-4'>
                                <img src={action.icon} className='object-contain' alt="" />
                                <div>
                                    <h2 className='text-[#244D3F] font-medium text-xl'>{action.type}<span className='text-[#64748B] text-lg font-normal'> with {friend.name}</span></h2>
                                    <p className="text-sm text-gray-500">
                                        {friend.date.toDateString()}
                                    </p>
                                </div>
                            </div>
                        )
                    }))

                  
                }
            </div>
        </div>
    );
};

export default TimeLine;