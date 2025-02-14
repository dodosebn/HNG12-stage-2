'use client';
import React, { useEffect, useState } from 'react';
import LayoutCont from './layoutCont';
import UpPagesInfo from './upPagesInfo';

const TicketRadi = () => {
    const [formDatas, setFormData] = useState({
        name: '',
        email: '',
        specialRequest: '',
        imageUrl: '',
        selectedType: '',
        numberOfTickets: 1,
    });

    useEffect(() => {
        const fetchDatas = () => {
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
        fetchDatas();
    }, []);

    return (
        <LayoutCont>
            <div>
                <UpPagesInfo pgName="Ready" pgNum="3" />
                <h1>Your Ticket is Booked!</h1>
                <p>Check your email for a copy or you can download</p>

                <main>
                    <div>
                        <h1>Techember Fest ”25</h1>
                        <p>📍 04 Rumens Road, Ikoyi, Lagos 📅 March 15, 2025 | 7:00 PM</p>

                        <div>
                            {formDatas.imageUrl && (
                                <img
                                    src={formDatas.imageUrl}
                                    alt="Uploaded"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            )}
                        </div>

                        {/* Square Table with Four Divisions */}
                        <div className="w-64 h-64 border-2 border-gray-300 relative my-6 mx-auto">
                            {/* Vertical Divider */}
                            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300"></div>
                            {/* Horizontal Divider */}
                            <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-300"></div>

                            {/* Top-Left Section */}
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 p-4">
                                <h3 className="font-semibold">Enter Name</h3>
                                <p>{formDatas.name}</p>
                            </div>

                            {/* Top-Right Section */}
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-4">
                                <h3 className="font-semibold">Enter Email</h3>
                                <p>{formDatas.email}</p>
                            </div>

                            {/* Bottom-Left Section */}
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-4">
                                <h3 className="font-semibold">Ticket Type</h3>
                                <p>{formDatas.selectedType}</p>
                            </div>

                            {/* Bottom-Right Section */}
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-4">
                                <h3 className="font-semibold">Ticket for One</h3>
                                <p>{formDatas.numberOfTickets}</p>
                            </div>
                        </div>

                        {/* Special Request Section */}
                        <div className="mt-6 p-4 border border-gray-300 rounded-lg w-64 mx-auto">
                            <h3 className="font-semibold">Special Request</h3>
                            <p className="mt-2">
                                {formDatas.specialRequest || "Nil"}
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </LayoutCont>
    );
};

export default TicketRadi;