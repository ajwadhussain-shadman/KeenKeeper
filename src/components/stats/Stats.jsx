import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsTimelineContext } from '../context/FriendsTimelineContext';




const Stats = () => {

  const { friendsTimeline } = useContext(FriendsTimelineContext);
  console.log(friendsTimeline);
  const actionLength = (action) => {
    const actionArray = friendsTimeline.filter(friend => friend.action == action);
    return actionArray.length;
  }


  const data = [
    { name: 'call', value: actionLength('call'), fill: '#244D3F' },
    { name: 'text', value: actionLength('text'), fill: '#7E35E1' },
    { name: 'video', value: actionLength('video'), fill: '#37A163' }
  ];
  return (
    <div className='bg-[#F8FAFC] min-h-screen'>
      <div className=' py-[80px] md:w-3/4 w-11/12 mx-auto'>
        <h1 className='text-[#1F2937] font-bold md:text-5xl text-3xl'>Friendship Analytics</h1>

        <div className='bg-white mt-6 p-8 space-y-6'>
          <h2 className='text-[#244D3F] text-xl font-medium'>By Interaction Type</h2>
          <PieChart style={{ width: '100%', maxWidth: '347px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
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
            <Tooltip></Tooltip>
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingTop: "20px" }}
            />
          </PieChart>
        </div>

      </div>
    </div>
  );
};

export default Stats;