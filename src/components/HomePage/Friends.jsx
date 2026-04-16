import React from 'react';
import useFriendsData from '../hook/useFriendsData';
import FriendCard from '../shared/FriendCard';
import { PacmanLoader } from 'react-spinners';

const Friends = () => {
    const { friends, loading } = useFriendsData();

    return (
        <div className='md:w-3/4 w-11/12 mx-auto pt-10 border-t border-[#E9E9E9] mb-[80px]'>
            <h2 className='font-semibold text-2xl text-[#1F2937] mb-4'>Your Friends</h2>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-6'>
                {
                    loading ? (<div className='flex items-center col-span-4 justify-center'>
                        <PacmanLoader color="#244D3F" />
                    </div>) :

                        (friends.map(friend => {
                            return (
                                <FriendCard friend={friend} key={friend.id}></FriendCard>
                            )
                        }))
                }
            </div>
        </div>
    );
};

export default Friends;