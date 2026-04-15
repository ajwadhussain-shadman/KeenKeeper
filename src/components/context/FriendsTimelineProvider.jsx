import React, { act, useState } from 'react';
import { FriendsTimelineContext } from './FriendsTimelineContext';

const FriendsTimelineProvider = ({children}) => {
     const [friendsTimeline,setFriendsTimeline]=useState([]);
        
       const addToTimeline=(action,name)=>{
         const currentDate=new Date();
         const newTimeline={ 
            action,
            name,
            date:currentDate,
         }    ;
         setFriendsTimeline([newTimeline,...friendsTimeline])    
       }

     const data={
        friendsTimeline,
        addToTimeline
     }

    return (
       <FriendsTimelineContext.Provider value={data}>
{children}
       </FriendsTimelineContext.Provider>
    );
};

export default FriendsTimelineProvider;