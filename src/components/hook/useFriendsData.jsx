import React, { useEffect, useState } from 'react';

const useFriendsData = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchedData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();

            setTimeout(() => {
                setFriends(data);
                setLoading(false);
            },1000)

        }
        fetchedData();
    }, [])
    return { friends, loading };
};

export default useFriendsData;