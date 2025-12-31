import React from 'react';
import { FileText, CheckSquare, Shield, Briefcase, Download, ArrowRight } from 'lucide-react';

const SOPLibrary = () => {
    const categories = [
        {
            title: "Kontrak & Legalitas",
            icon: <Briefcase size={24} className="text-gold" />,
            docs: [
                "Perjanjian Kerjasama Jual Beli Paket Umrah (B2B)",
                "Surat Penunjukan Perwakilan (SPP)",
                "Kontrak Kerja Sama Handling Bandara"
            ]
        },
        {
            title: "Operasional Jamaah",
            icon: <CheckSquare size={24} className="text-success" />,
            docs: [
                "Checklist Perlengkapan Jamaah (Pria/Wanita)",
                "Formulir Pendaftaran & Riwayat Kesehatan",
                "Tata Tertib Jamaah selama di Tanah Suci"
            ]
        },
        {
            title: "Mitigasi Risiko",
            icon: <Shield size={24} className="text-danger" />,
            docs: [
                "SOP Penanganan Jamaah Sakit/Wafat",
                "Prosedur Kehilangan Paspor di Saudi",
                "Panduan Klaim Asuransi Perjalanan"
            ]
        }
    ];

    return (
        <div>
            <div className="card mb-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #151F32 100%)', color: 'white' }}>
                <div className="flex-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">SOP & Document Library</h2>
                        <p className="opacity-80">Standarisasi operasional travel Anda dengan template dokumen teruji.</p>
                    </div>
                    <button className="btn btn-gold">
                        Request Document
                    </button>
                </div>
            </div>

            <div className="d-grid">
                {categories.map((cat, idx) => (
                    <div className="col-4" key={idx}>
                        <div className="card h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-slate-100 rounded-lg" style={{ background: '#F1F5F9', borderRadius: '10px' }}>
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-lg">{cat.title}</h3>
                            </div>

                            <ul className="list-none p-0">
                                {cat.docs.map((doc, docIdx) => (
                                    <li key={docIdx} className={`py-3 flex justify-between items-center cursor-pointer group hover:text-gold ${docIdx !== cat.docs.length - 1 ? 'border-b border-slate-100' : ''}`} style={{ borderBottom: docIdx !== cat.docs.length - 1 ? '1px solid #f1f5f9' : 'none', padding: '12px 0' }}>
                                        <div className="flex gap-2 items-start" style={{ maxWidth: '85%' }}>
                                            <FileText size={16} className="text-muted mt-1 flex-shrink-0" />
                                            <span className="text-sm font-medium transition-colors">{doc}</span>
                                        </div>
                                        <Download size={16} className="text-muted group-hover:text-gold cursor-pointer" />
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 pt-4 border-t border-slate-100" style={{ borderColor: '#f1f5f9' }}>
                                <button className="btn btn-text text-sm w-full flex-center gap-2">
                                    Lihat Semua <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SOPLibrary;
