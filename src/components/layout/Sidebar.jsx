import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  GraduationCap,
  Settings,
  ShieldCheck,
  ChevronRight,
  Hexagon
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <ShieldCheck size={20} />, label: 'Regulations', path: '/regulations' },
    { icon: <FileText size={20} />, label: 'SOP Library', path: '/sop' },
    { icon: <MessageSquare size={20} />, label: 'Forum', path: '/forum' },
    { icon: <GraduationCap size={20} />, label: 'Academy', path: '/academy' },
  ];

  return (
    <aside className="app-sidebar">
      {/* Brand Header */}
      <div className="sidebar-header">
        <div className="brand-logo">
          <div className="brand-icon">
            <Hexagon size={20} fill="white" />
          </div>
          AMUHI OS
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer User Profile */}
      <div style={{ marginTop: 'auto', padding: '24px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '12px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#334155' }}></div>
          <div style={{ fontSize: '0.85rem' }}>
            <div style={{ fontWeight: '600' }}>PT. Berkah</div>
            <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Platinum</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
