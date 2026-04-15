import React, { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import { FriendsTimelineContext } from '../context/FriendsTimelineContext';




const Stats = () => {
   
    const{friendsTimeline}=useContext(FriendsTimelineContext);
    console.log(friendsTimeline);
     const actionLength=(action)=>{
        const actionArray=friendsTimeline.filter(friend=>friend.action==action);
        return actionArray.length;
     }
    

    const data = [
  { name: 'call', value: actionLength('call'), fill: '#244D3F' },
  { name: 'text', value: actionLength('text'), fill: '#7E35E1' },
  { name: 'video', value: actionLength('video'), fill: '#37A163' }
];
    return (
        <div>
           <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    
    </PieChart>
        </div>
    );
};

export default Stats;