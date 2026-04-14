import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;