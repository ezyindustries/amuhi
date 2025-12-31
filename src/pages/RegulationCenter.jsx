import React, { useState } from 'react';
import { Search, FileText, Globe, AlertCircle, ChevronRight, Download } from 'lucide-react';

const RegulationCenter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const regulations = [
        {
            id: 1,
            title: "Kepdirjen PHU No. 320 Tahun 2024",
            description: "Pedoman Teknis Bimbingan Manasik Haji bagi Jemaah Haji Reguler.",
            category: "Kemenag",
            date: "28 Dec 2024",
            isNew: true,
            type: "PDF"
        },
        {
            id: 2,
            title: "Saudi Visa Regulation Update",
            description: "Ketentuan baru masa berlaku visa umrah menjadi 90 hari sejak tanggal terbit.",
            category: "Saudi",
            date: "15 Dec 2024",
            isNew: false,
            type: "Link"
        },
        {
            id: 3,
            title: "UU No. 8 Tahun 2019",
            description: "Penyelenggaraan Ibadah Haji dan Umrah (Payung Hukum Utama).",
            category: "Kemenag",
            date: "2019",
            isNew: false,
            type: "PDF"
        },
        {
            id: 4,
            title: "Protokol Kesehatan Bandara 2025",
            description: "Update standar pemeriksaan kesehatan jamaah di Bandara Soekarno-Hatta.",
            category: "Imigrasi/KKP",
            date: "10 Jan 2025",
            isNew: true,
            type: "PDF"
        }
    ];

    const tags = ['All', 'Kemenag', 'Saudi', 'Imigrasi/KKP'];

    return (
        <div className="flex flex-column gap-6">
            {/* Header Section */}
            <div className="card">
                <div className="flex-between mb-4">
                    <div>
                        <h2 className="text-xl font-bold mb-1">Pusat Regulasi & Kebijakan</h2>
                        <p className="text-muted text-sm">Single Source of Truth untuk aturan Umrah & Haji terbaru.</p>
                    </div>
                    <div>
                        <div className="relative flex items-center">
                            <Search size={18} className="text-muted absolute ml-3" style={{ position: 'absolute', left: '12px' }} />
                            <input
                                type="text"
                                placeholder="Cari regulasi..."
                                className="search-input"
                                style={{
                                    paddingLeft: '40px',
                                    paddingRight: '16px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #e2e8f0',
                                    width: '300px',
                                    outline: 'none'
                                }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`badge ${filter === tag ? 'btn-primary' : 'btn-text'}`}
                            style={{
                                cursor: 'pointer',
                                border: filter === tag ? 'none' : '1px solid #e2e8f0',
                                padding: '6px 16px'
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* List Section */}
            <div className="flex flex-column gap-4">
                {regulations.map((item) => (
                    <div className="card p-6 flex flex-between items-center" key={item.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="flex gap-4 items-start">
                            <div className="p-3 rounded-xl flex-center" style={{
                                background: item.category === 'Saudi' ? '#FEF3C7' : '#DCFCE7',
                                color: item.category === 'Saudi' ? '#B45309' : '#166534',
                                borderRadius: '12px'
                            }}>
                                {item.category === 'Saudi' ? <Globe size={24} /> : <FileText size={24} />}
                            </div>
                            <div>
                                <div className="flex gap-2 mb-1 items-center">
                                    <span className="text-xs font-bold text-muted">{item.category}</span>
                                    {item.isNew && <span className="badge badge-success text-xs">New Update</span>}
                                    <span className="text-xs text-muted">• {item.date}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-muted text-sm">{item.description}</p>
                            </div>
                        </div>

                        <button className="btn btn-text">
                            {item.type === "PDF" ? <Download size={20} /> : <ChevronRight size={20} />}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RegulationCenter;
