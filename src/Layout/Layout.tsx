import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Box } from '@mui/material';
import './Layout.css'; 

import Header from './Header';
import Footer from '../Pages/Footer';


const Layout: React.FC = () => {
  const location = useLocation();


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <Box className="layout-container">
     
      <Box className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
    
        <Header    />
  
      </Box>
      <Box className="content-container">
        
        <Outlet />
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Layout;
