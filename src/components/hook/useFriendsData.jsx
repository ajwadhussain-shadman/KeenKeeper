import React, { useEffect, useState } from 'react';

const useFriendsData = () => {
        const [friends,setFriends]=useState([]);
        const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchedData=async ()=>{
            const res=await fetch('/data.json');
            const data=await res.json();
             setFriends(data);
             setLoading(false);
        }
  fetchedData();
    },[])
    return {friends,loading};
};

export default useFriendsData;