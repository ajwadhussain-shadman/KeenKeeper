import React, { act, useContext } from 'react';
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
    console.log(friendsTimeline);
    return (
        <div className='bg-[#F8FAFC] min-h-screen'>
            <div className='md:w-3/4 w-11/12 mx-auto py-[80px] space-y-6'>
                {
                    friendsTimeline.map(friend => {
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
                    })
                }
            </div>
        </div>
    );
};

export default TimeLine;