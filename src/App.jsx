import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import RegulationCenter from './pages/RegulationCenter';
import SOPLibrary from './pages/SOPLibrary';
import UmrahAcademy from './pages/UmrahAcademy';
import DiscussionForum from './pages/DiscussionForum';

// Placeholder for sections under development
const ComingSoon = ({ title }) => (
  <div className="card text-center" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-muted">Modul ini sedang dalam tahap pengembangan (MVP Phase 2).</p>
    <div style={{ marginTop: '2rem', padding: '1rem', background: '#f1f5f9', borderRadius: '0.5rem' }}>
      <code>Feature Integration in Progress...</code>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="regulations" element={<RegulationCenter />} />
          <Route path="sop" element={<SOPLibrary />} />
          <Route path="forum" element={<DiscussionForum />} />
          <Route path="academy" element={<UmrahAcademy />} />
          <Route path="settings" element={<ComingSoon title="Governance Panel" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
