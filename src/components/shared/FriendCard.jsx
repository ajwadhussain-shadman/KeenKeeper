import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    console.log(friend)
    return (
        <Link to={`/Friends/${friend.id}`} className='p-6 text-center flex items-center flex-col gap-3 shadow bg-white rounded-lg'>
            <img src={friend.picture} className='max-w-[80px] rounded-full' alt="" />
            <div>
                <h2 className='font-semibold text-xl text-[#1F2937]'>{friend.name}</h2>
                <p className='text-[#64748B] text-sm'>{friend.days_since_contact}d ago</p>
            </div>
            <div className='space-y-2'>
               <div className='flex gap-1 justify-center'> {
                    friend.tags.map(t=>{
                        return(
                            <div className='bg-[#CBFADB]  text-[#244D3F]
                            p-2 text-center rounded-full text-[12px]'>{t}</div>
                        )
                    })
                }</div>
                <div>
                    {friend.status==="almost due" && <p className='badge text-center bg-[#EF4444] text-white rounded-full text-[12px]'>{friend.status}</p>}
                    {friend.status==="on-track" && <p className='badge bg-[#244D3F] text-[12px]  text-white rounded-full'>{friend.status}</p>}
                    {friend.status==="overdue" && <p className='badge bg-[#EFAD44] text-[12px] text-white rounded-full'>{friend.status}</p>}
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;