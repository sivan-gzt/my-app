import React, { ReactNode } from 'react';
import Footer from './footer/Footer';
import Main from './main/Main';
import Header from './header/Header';
import Box from '@/components/Box';
import { CommonProps } from "@/models/types";
import { Toaster } from 'sonner';
import { Outlet } from 'react-router-dom';


const Layout: React.FC<CommonProps> = ({ children }) => {
    return (
        <>
            <Box className="min-h-screen">
                <Header />
                <Main>
                    {children}
                </Main>
                <Footer />
                <Toaster />
            </Box>
            <Outlet />
        </>
    );
};

export default Layout;
