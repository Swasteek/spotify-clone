import React from 'react';
import { assets } from '../assets/assets'; // Fix the import path

export const Sidebar = () => {
    return (
        <nav className='w-[25%] h-full p-4 flex flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.home_icon} alt="Home Icon" />
                    <span>Home</span> {/* Add a label for better UX */}
                </div>
            </div>
            {/* Add more sidebar items here */}
        </nav>
    );
};