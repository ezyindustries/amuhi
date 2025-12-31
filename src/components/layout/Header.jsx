import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = ({ title }) => {
    return (
        <header className="app-header">
            <div className="page-title">
                <h1>{title}</h1>
                <p>Welcome back, Platinum Member</p>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{
                    position: 'relative',
                    width: '240px'
                }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            width: '100%',
                            padding: '10px 10px 10px 40px',
                            borderRadius: '99px',
                            border: '1px solid #E2E8F0',
                            outline: 'none',
                            background: '#F8FAFC',
                            fontSize: '0.9rem'
                        }}
                    />
                </div>

                <button style={{
                    background: 'white',
                    border: '1px solid #E2E8F0',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative'
                }}>
                    <Bell size={20} color="#64748B" />
                    <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '10px',
                        height: '10px',
                        background: '#ef4444',
                        borderRadius: '50%',
                        border: '2px solid white'
                    }}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
