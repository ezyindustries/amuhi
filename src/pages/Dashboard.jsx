import React from 'react';
import {
    ShieldCheck,
    TrendingUp,
    Users,
    AlertTriangle,
    FileText,
    ArrowRight,
    Clock
} from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="d-grid fade-in">

            {/* --- HERO STATS --- */}
            <div className="col-4">
                <div className="card" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div className="flex-between" style={{ marginBottom: '16px' }}>
                            <p className="text-sm font-bold text-muted uppercase">Membership Status</p>
                            <ShieldCheck className="text-gold" size={24} />
                        </div>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px' }}>Platinum</h2>
                        <span className="badge badge-success">Active License</span>
                        <p className="text-xs text-muted" style={{ marginTop: '16px' }}>
                            EXP: Dec 31, 2026
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="card" style={{ height: '100%' }}>
                    <div className="flex-between" style={{ marginBottom: '16px' }}>
                        <p className="text-sm font-bold text-muted uppercase">Risk Level</p>
                        <div style={{ padding: '8px', background: '#DCFCE7', borderRadius: '8px' }}>
                            <TrendingUp className="text-success" size={20} />
                        </div>
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px', color: '#10B981' }}>Stable</h2>
                    <p className="text-sm text-muted">
                        Operational Stability Score: <strong>98/100</strong>
                    </p>
                </div>
            </div>

            <div className="col-4">
                <div className="card" style={{ height: '100%' }}>
                    <div className="flex-between" style={{ marginBottom: '16px' }}>
                        <p className="text-sm font-bold text-muted uppercase">Jamaah 1446H</p>
                        <Users className="text-muted" size={24} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px' }}>1,240</h2>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span className="badge badge-success">+12%</span>
                        <span className="text-xs text-muted">vs last season</span>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT ROW --- */}

            {/* Left: Alerts */}
            <div className="col-8" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="flex-between">
                    <h3 className="font-bold" style={{ fontSize: '1.25rem' }}>Live Industry Alerts</h3>
                    <button className="btn btn-text">View All</button>
                </div>

                {/* Alert 1 */}
                <div className="card" style={{ borderLeft: '4px solid #F43F5E' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: '#FEE2E2', borderRadius: '12px', color: '#F43F5E' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="flex-between">
                                <h4 className="font-bold" style={{ fontSize: '1.1rem' }}>Urgent: Visa Fee Adjustment</h4>
                                <span className="text-xs text-danger font-bold">CRITICAL</span>
                            </div>
                            <p className="text-muted" style={{ margin: '8px 0', fontSize: '0.95rem' }}>
                                Kementerian Haji Saudi merilis aturan penyesuaian biaya visa umrah efektif per 1 Januari. Harap sesuaikan paket.
                            </p>
                            <div className="flex-start gap-4">
                                <button className="btn btn-text" style={{ padding: 0, color: '#F43F5E' }}>Read Full Regulation</button>
                                <span className="text-xs text-muted">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alert 2 */}
                <div className="card" style={{ borderLeft: '4px solid #F59E0B' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: '#FEF3C7', borderRadius: '12px', color: '#D97706' }}>
                            <Clock size={24} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="flex-between">
                                <h4 className="font-bold" style={{ fontSize: '1.1rem' }}>Siskopatuh Maintenance</h4>
                                <span className="text-xs text-gold font-bold">WARNING</span>
                            </div>
                            <p className="text-muted" style={{ margin: '8px 0', fontSize: '0.95rem' }}>
                                Sistem Siskopatuh akan mengalami maintenance terjadwal pada hari Jumat, 02:00 - 05:00 WIB.
                            </p>
                            <span className="text-xs text-muted">5 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="col-4" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 className="font-bold" style={{ fontSize: '1.25rem' }}>Quick Access</h3>

                <div className="card">
                    <h4 className="font-bold text-muted text-sm uppercase mb-4">SOP Library</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div className="flex-between" style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px', cursor: 'pointer' }}>
                            <div className="flex-start gap-2">
                                <FileText size={16} className="text-muted" />
                                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Cancelation Policy</span>
                            </div>
                            <ArrowRight size={16} className="text-muted" />
                        </div>
                        <div className="flex-between" style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px', cursor: 'pointer' }}>
                            <div className="flex-start gap-2">
                                <FileText size={16} className="text-muted" />
                                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Hotel Force Majeure</span>
                            </div>
                            <ArrowRight size={16} className="text-muted" />
                        </div>
                    </div>
                    <button className="btn btn-text" style={{ width: '100%', marginTop: '16px' }}>Browse Library</button>
                </div>

                <div className="card" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white' }}>
                    <h4 className="font-bold mb-2">Umrah Academy</h4>
                    <p className="text-sm" style={{ opacity: 0.8, marginBottom: '20px' }}>
                        Modul Baru: "Mitigasi Risiko 2026"
                    </p>
                    <button className="btn btn-gold" style={{ width: '100%' }}>Start Learning</button>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
