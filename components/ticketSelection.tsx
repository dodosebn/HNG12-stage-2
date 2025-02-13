'use client';
import React, { useState } from 'react';
import TickType from './customs/tickType';
import ButtonCtrl from './customs/buttonCtrl';
import UpPagesInfo from './customs/upPagesInfo'
import LayoutCont from './customs/layoutCont';
// import Link from 'next/link';
import AttendieDetails from './attendieDetails';
const TicketSelection = () => {
  const [clickCtrl, setClickCtrl] = useState(false);

  const handleClicks = () => {
    setClickCtrl(!clickCtrl);
  };

  return (
    <>
    <LayoutCont>
      <UpPagesInfo pgName='Ticket Selection' pgNum='1'/>
      <main className='text-[#FAFAFA] bg-[#08252B] border-[1px] border-[#0E464F] p-3 rounded-3xl w-full mt-4'>
        <div style={{ background: 'linear-gradient(to right, #08252B 5%, #02191D 95%)' }} className='bg-[#0A0C11] border-[1px] border-[#07373F] rounded-2xl text-gray-100 p-[2rem]'>
          <h1 className='text-6xl text-center topic'>Techember Fest ’25</h1>
          <div className='Roboto'>
            <p className='text-center mx-auto mt-2 w-[20rem]'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
            <p className='text-center text-sm mt-1'>📍 [Event Location] | March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <hr className='border-[#07373F] border-[1.5px] my-4'/>
        <div>
          <h3 className='text-lg font-semibold Roboto'>Select Ticket Type:</h3>
          <div className='p-2 rounded-2xl border-[#07373F] border-[1px] bg-[#041E23] flex gap-3'>
            <TickType bgCol='#12464E' price='Free' info='Regular Access'/>
            <TickType bgCol='#02191D' price='$150' info='VIP/ACCESS'/>
            <TickType bgCol='#02191D' price='$150' info='VVIP/ACCESS'/>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-lg font-semibold Roboto'>Number of Tickets</h3>
          <select name="number" className='w-full mt-2 rounded-lg p-[12px] outline-none bg-[#12464E] text-white'>
            <option value="1">1</option>
          </select>
        </div>
        <div className='flex justify-between mt-6'>
          <ButtonCtrl btnName='Cancel' bgCol='#041E23' color='#24A0B5' handleClicks={handleClicks}/>
          <ButtonCtrl btnName='Next' bgCol='#24A0B5' color='#fff' handleClicks={handleClicks}/>
        </div>
      </main>
    </LayoutCont>
     {clickCtrl && < AttendieDetails />}
     </>
  );
};

export default TicketSelection;
