import React, { useState } from 'react';
import LayoutCont from './customs/layoutCont';
import UpPagesInfo from './customs/upPagesInfo';
import { TiWeatherStormy } from "react-icons/ti";
import ButtonCtrl from './customs/buttonCtrl';
import TicketReady from './ticketReady';

const AttendieDetails = () => {
    const [clickCtrl, setClickCtrl] = useState(false);
  
    const handleClicks = () => {
      setClickCtrl(!clickCtrl);
    };
  return (
    <>
    <LayoutCont>
      <UpPagesInfo pgName='Attendee Details' pgNum='2' />
      <section className='text-[#fafafa] bg-[#08252B] border-[1px] border-[#0E464F] p-2 rounded-xl w-full mt-4 flex flex-col justify-center items-center relative pb-[2rem] px-[0.5rem]'>
    
        <p className='text-left self-start mb-[2rem] text-sm'>Upload Profile Photo</p>

          <div className='bg-[#000000] px-[11rem] py-[3.5rem] rounded-sm flex justify-center items-center relative'>
            
            {/* Inner pop-up box positioned above */}
            <div className='bg-[#0E464F] border-[2px] border-[#24A0B5] p-4 text-center rounded-2xl w-[9rem] shadow-lg absolute top-[-2rem] left-1/2 transform -translate-x-1/2 py-[3rem]'>
              <div className='mx-auto flex justify-center'><TiWeatherStormy size={32} /></div>
              <p className='mx-auto flex justify-center text-[10px]'>Drag & drop or click to upload</p>
            </div>
          </div>

        </section>
<section className='pt-4'>
        <hr className='border-[#07373F] w-[100%] border-[1.5px] my-4'/>
        <div className="w-full flex justify-center">
  <form action="#" className='w-[100%] max-w-[400px]  flex flex-col gap-3 text-[#fafafa]'>
    <label htmlFor="Name">Enter Your Name
    <input type="text" name="" id="" className='bg-[#052228] border border-[#07373F] text-[#fafafa] p-1 rounded-md w-full outline-none' style={{ textIndent: '0.5rem' }} />
    </label>
    <label htmlFor="Enter Your Email">  Enter your Email  
    <input type="text" name="" id="" className='bg-[#052228] border border-[#07373F] text-[#fafafa] p-1 rounded-md w-full outline-none' style={{ textIndent: '0.5rem' }}  /></label>
    <label htmlFor="TextArea">special Request?
    <textarea name="" id="" className='bg-[#052228] border border-[#07373F] text-[#fafafa] p-1 rounded-md w-full outline-none'   style={{ textIndent: '0.5rem' }} 
    /></label>
  </form>
</div>
</section>
<div className='flex justify-between mt-6'>
<ButtonCtrl btnName='Back' bgCol='#041E23' color='#24A0B5' handleClicks={handleClicks}/>
<ButtonCtrl btnName='GetTicket' bgCol='#24A0B5' color='#fff' handleClicks={handleClicks}/>
        </div>
    </LayoutCont>
    {!clickCtrl && <AttendieDetails />}
    {clickCtrl && <TicketReady/>}
    </>
  );
}

export default AttendieDetails;
