import React from 'react';
import { MessageSquare, ThumbsUp, Eye, MoreHorizontal, Plus } from 'lucide-react';

const DiscussionForum = () => {
    const discussions = [
        {
            title: "Info Vendor Katering Makkah yang Recommended untuk 2025?",
            author: "Travel Berkah Abadi",
            role: "Member",
            time: "2h ago",
            replies: 24,
            views: 342,
            tag: "Vendor Sharing",
            isHot: true
        },
        {
            title: "Ada yang mengalami kendala input Siskopatuh hari ini?",
            author: "Cahaya Haramain",
            role: "Member",
            time: "5h ago",
            replies: 8,
            views: 120,
            tag: "Technical Issue",
            isHot: false
        },
        {
            title: "Sharing pengalaman inspeksi Kemenag terbaru",
            author: "Amanah Tour",
            role: "Verified Member",
            time: "1d ago",
            replies: 56,
            views: 890,
            tag: "Regulation",
            isHot: true
        }
    ];

    return (
        <div className="d-grid">
            <div className="col-8">
                <div className="flex-between mb-4">
                    <div className="flex gap-4 items-center">
                        <h2 className="text-xl font-bold">Forum Diskusi</h2>
                        <div className="flex gap-2">
                            <span className="badge badge-success cursor-pointer">Popular</span>
                            <span className="badge badge-warning bg-transparent border border-muted text-muted cursor-pointer" style={{ border: '1px solid #cbd5e1' }}>Newest</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-column gap-4">
                    {discussions.map((item, idx) => (
                        <div className="card hover:shadow-md transition-shadow cursor-pointer p-6" key={idx}>
                            <div className="flex items-start gap-4">
                                <div className="flex-center font-bold text-navy-700" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: `hsl(${Math.random() * 360}, 70%, 80%)`,
                                }}>
                                    {item.author.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-sm text-navy-900">{item.author}</span>
                                        <span className="badge bg-slate-100 text-muted" style={{ background: '#e2e8f0', fontSize: '10px' }}>{item.role}</span>
                                        <span className="text-xs text-muted">• {item.time}</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <div className="flex items-center gap-4 text-muted text-sm">
                                        <span className="badge badge-warning text-xs">{item.tag}</span>
                                        <span className="flex items-center gap-1 hover:text-navy-900"><MessageSquare size={14} /> {item.replies} Replies</span>
                                        <span className="flex items-center gap-1"><Eye size={14} /> {item.views} Views</span>
                                    </div>
                                </div>
                                {item.isHot && <span className="text-xs font-bold text-rose-500">🔥 Hot</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-4">
                <button className="btn btn-gold w-full mb-6 gap-2">
                    <Plus size={20} /> Buat Diskusi Baru
                </button>

                <div className="card mb-6">
                    <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted">Trending Topics</h3>
                    <ul className="list-none p-0 flex flex-column gap-3">
                        {['#VisaUmrah2025', '#HotelMadinah', '#ManasikDigital', '#TiketPesawat'].map((tag, i) => (
                            <li key={i} className="flex justify-between items-center text-sm font-medium hover:text-gold cursor-pointer">
                                <span>{tag}</span>
                                <span className="text-muted text-xs">2.4k posts</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card text-white" style={{ background: 'var(--c-navy-900)' }}>
                    <h3 className="font-bold mb-2">Community Guidelines</h3>
                    <p className="text-sm opacity-80 mb-4">Jaga diskusi tetap profesional dan saling menghormati antar anggota asosiasi.</p>
                    <button className="btn btn-text text-white text-sm p-0 justify-start">Baca Selengkapnya</button>
                </div>
            </div>
        </div>
    );
};

export default DiscussionForum;
