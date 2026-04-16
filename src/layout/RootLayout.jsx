import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/HomePage/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
             <Footer></Footer>
              <ToastContainer  position="top-center"  />
        </div>
    );
};

export default RootLayout;