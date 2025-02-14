"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const TicketReady = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        specialRequest: '',
        imageUrl: '',
        selectedType: '',
        numberOfTickets: 1,
    });

    // Fetch data from localStorage on component mount
    useEffect(() => {
        const fetchData = () => {
            const name = localStorage.getItem('name') || '';
            const email = localStorage.getItem('email') || '';
            const specialRequest = localStorage.getItem('specialRequest') || '';
            const imageUrl = localStorage.getItem('imageUrl') || '';
            const selectedType = localStorage.getItem('selectedType') || '';
            const numberOfTickets = localStorage.getItem('numberOfTickets') ? Number(localStorage.getItem('numberOfTickets')) : 1;

            setFormData({
                name,
                email,
                specialRequest,
                imageUrl,
                selectedType,
                numberOfTickets,
            });
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#02191D] min-h-screen text-[#FAFAFA] p-6">
            <h2 className="text-3xl font-bold mb-4">Your Ticket is Ready!</h2>
            <div className="bg-[#08252B] border-[1px] border-[#0E464F] p-6 rounded-xl">
                <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
                <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
                <p className="mb-2"><strong>Ticket Type:</strong> {formData.selectedType}</p>
                <p className="mb-2"><strong>Number of Tickets:</strong> {formData.numberOfTickets}</p>
                <p className="mb-2"><strong>Special Request:</strong> {formData.specialRequest}</p>
                {formData.imageUrl && (
                    <div className="mt-4">
                        <img src={formData.imageUrl} alt="Uploaded" className="w-32 h-32 rounded-full object-cover" />
                    </div>
                )}
            </div>
            <div className="mt-6 flex gap-4">
                <Link href="/">
                    <button className="px-4 py-2 bg-[#041E23] text-[#24A0B5] border border-[#24A0B5] rounded-md hover:bg-[#24A0B5] hover:text-white transition-colors">
                        Book Another Ticket
                    </button>
                </Link>
                <button
                    className="px-4 py-2 bg-[#24A0B5] text-white rounded-md hover:bg-[#1C7F8F] transition-colors"
                    onClick={() => alert('Download functionality to be implemented')}
                >
                    Download Ticket
                </button>
            </div>
        </div>
    );
};

export default TicketReady;