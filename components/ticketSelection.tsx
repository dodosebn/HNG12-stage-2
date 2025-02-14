'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TickType from './customs/tickType';
import ButtonCtrl from './customs/buttonCtrl';
import UpPagesInfo from './customs/upPagesInfo';
import LayoutCont from './customs/layoutCont';

const TicketSelection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [numberOfTickets, setNumberOfTickets] = useState<number>(1);
  const [err, setErr] = useState('');
  const router = useRouter();

  const handleTicketTypeSelection = (type: string) => {
    setSelectedType(type); // Update the selected type
    setErr(''); // Clear any errors
  };

  const handleNextClick = () => {
    if (!selectedType) {
      setErr('Please select a ticket type');
      return;
    }
    localStorage.setItem('selectedType', selectedType);
    localStorage.setItem('numberOfTickets', numberOfTickets.toString());
    router.push('/page-two'); // Navigate to the next page
  };

  const handleReturnClicks = () => {
    localStorage.removeItem('selectedType');
  };

  return (
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
          {err && <span className='text-red-500'>{err}</span>}
          <div className='p-2 rounded-2xl border-[#07373F] border-[1px] bg-[#041E23] flex gap-3'>
            <div className={`${err && 'border-[2px] border-red-500 rounded-2xl'}`}>
              <TickType 
                price='Free' 
                info='Regular Access' 
                handleTicketTypeSelection={handleTicketTypeSelection}
                isSelected={selectedType === 'Regular Access'} // Pass isSelected prop
              />
            </div>
            <div className={`${err && 'border-[2px] border-red-500 rounded-2xl'}`}>
              <TickType 
                price='$150' 
                info='VIP/ACCESS' 
                handleTicketTypeSelection={handleTicketTypeSelection}
                isSelected={selectedType === 'VIP/ACCESS'} // Pass isSelected prop
              />
            </div>
            <div className={`${err && 'border-[2px] border-red-500 rounded-2xl'}`}>
              <TickType 
                price='$150' 
                info='VVIP/ACCESS' 
                handleTicketTypeSelection={handleTicketTypeSelection}
                isSelected={selectedType === 'VVIP/ACCESS'} // Pass isSelected prop
              />
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='text-lg font-semibold Roboto'>Number of Tickets</h3>
          <select name="number" className='w-full mt-2 rounded-lg p-[12px] outline-none bg-[#12464E] text-white' value={numberOfTickets} onChange={(e) => setNumberOfTickets(Number(e.target.value))}>
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className='flex justify-between mt-6'>
          <ButtonCtrl btnName='Cancel' bgCol='#041E23' color='#24A0B5' handleClicks={handleReturnClicks}/>
          <ButtonCtrl btnName='Next' bgCol='#24A0B5' color='#fff' handleClicks={handleNextClick}/>
        </div>
      </main>
    </LayoutCont>
  );
};

export default TicketSelection;