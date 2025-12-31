import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
            case '/': return 'Executive Dashboard';
            case '/regulations': return 'Regulation Intelligence';
            case '/sop': return 'SOP Library';
            case '/academy': return 'Professional Academy';
            case '/forum': return 'Member Discussion';
            default: return 'AMUHI OS';
        }
    };

    return (
        <div className="app-shell">
            <Sidebar />
            <main className="app-main">
                <Header title={getTitle(location.pathname)} />
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
