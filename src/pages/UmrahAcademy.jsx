import React, { useState } from 'react';
import {
    PlayCircle,
    Clock,
    Award,
    Users,
    BookOpen,
    ArrowRight,
    Star,
    Heart,
    Search,
    CheckCircle,
    Trophy,
    Filter,
    MoreHorizontal,
    Bookmark
} from 'lucide-react';

const UmrahAcademy = () => {
    const [activeCategory, setActiveCategory] = useState('All Courses');

    const categories = [
        'All Courses', 'Operational', 'Marketing', 'Finance', 'Sharia Compliance', 'Customer Service'
    ];

    const courses = [
        {
            id: 1,
            title: "Digital Marketing Strategy for Travel 2025",
            category: "Marketing",
            instructor: "Dewi Digital",
            duration: "5h 45m",
            students: "2.4k",
            rating: 4.9,
            level: "Intermediate",
            image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
            badge: "Trending"
        },
        {
            id: 2,
            title: "Manajemen Keuangan PPIU & Akuntansi Sederhana",
            category: "Finance",
            instructor: "Budi Artha, Ak",
            duration: "8h 20m",
            students: "1.1k",
            rating: 4.7,
            level: "Beginner",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop",
            badge: "Best Seller"
        },
        {
            id: 3,
            title: "Fiqih Umrah Kontemporer & Manasik Digital",
            category: "Sharia",
            instructor: "Dr. Zulkifli Hasan",
            duration: "4h 30m",
            students: "3.2k",
            rating: 5.0,
            level: "All Levels",
            image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop",
            badge: "Essential"
        },
        {
            id: 4,
            title: "Excellent Service: Menangani Komplain Jamaah",
            category: "Service",
            instructor: "Sari Melati",
            duration: "3h 15m",
            students: "1.8k",
            rating: 4.8,
            level: "Intermediate",
            image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
            badge: "Popular"
        }
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px 20px' }}>

            {/* 1. Header & Stats Section */}
            <section style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '24px', height: '2px', background: 'var(--c-gold-500)' }}></div>
                        <span style={{ color: 'var(--c-gold-500)', fontWeight: 800, fontSize: '10px', uppercase: 'true', letterSpacing: '2px' }}>EXCELLENCE IN LEARNING</span>
                    </div>
                    <h1 style={{ fontSize: '42px', fontWeight: 900, color: 'var(--c-navy-900)', marginBottom: '12px', letterSpacing: '-1px' }}>Academy</h1>
                    <p style={{ color: '#64748b', maxWidth: '400px', fontSize: '15px' }}>Tingkatkan kapabilitas tim travel Anda dengan kurikulum terstandardisasi internasional.</p>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ background: 'white', padding: '16px 24px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                        <p style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginBottom: '4px', letterSpacing: '1px' }}>STUDY HOURS</p>
                        <p style={{ fontSize: '24px', fontWeight: 900, color: 'var(--c-navy-900)' }}>128<span style={{ fontSize: '14px', color: '#94a3b8', marginLeft: '2px' }}>h</span></p>
                    </div>
                    <div style={{ background: 'white', padding: '16px 24px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                        <p style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginBottom: '4px', letterSpacing: '1px' }}>CERTIFICATES</p>
                        <p style={{ fontSize: '24px', fontWeight: 900, color: 'var(--c-navy-900)' }}>12</p>
                    </div>
                </div>
            </section>

            {/* 2. Hero Feature Section */}
            <section style={{ marginBottom: '64px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #0B1120 0%, #1a2333 100%)',
                    borderRadius: '32px',
                    padding: '48px',
                    display: 'flex',
                    gap: '48px',
                    alignItems: 'center',
                    color: 'white',
                    boxShadow: '0 30px 60px rgba(11, 17, 32, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Abstract background element */}
                    <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>

                    <div style={{ flex: 1, zIndex: 2 }}>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                            <span style={{ padding: '6px 12px', background: 'rgba(217,119,6,0.15)', color: 'var(--c-gold-400)', borderRadius: '100px', fontSize: '10px', fontWeight: 800, letterSpacing: '1px' }}>ACTIVE MODULE</span>
                            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '100px', fontSize: '10px', fontWeight: 800, letterSpacing: '1px' }}>CERTIFICATION</span>
                        </div>

                        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px', lineHeight: 1.1 }}>Master Class: Leadership in Pilgrimage Management</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px' }}>
                            Satu langkah lagi menuju sertifikasi Professional Tour Leader. Selesaikan modul manajemen krisis saat ini.
                        </p>

                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '24px', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'flex-end' }}>
                                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>Current progress</span>
                                <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--c-gold-400)' }}>85%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px' }}>
                                <div style={{ width: '85%', height: '100%', background: 'var(--c-gold-400)', borderRadius: '100px', boxShadow: '0 0 20px rgba(217,119,6,0.4)' }}></div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px' }}>
                            <button style={{
                                padding: '16px 32px',
                                background: 'var(--c-gold-500)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '16px',
                                fontWeight: 800,
                                fontSize: '15px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 10px 20px rgba(217,119,6,0.2)'
                            }}>
                                Resume Video <PlayCircle size={20} />
                            </button>
                            <button style={{
                                padding: '16px 32px',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                fontWeight: 700,
                                fontSize: '15px',
                                cursor: 'pointer'
                            }}>
                                Curriculum
                            </button>
                        </div>
                    </div>

                    <div style={{ width: '380px', height: '340px', borderRadius: '24px', background: '#000', overflow: 'hidden', position: 'relative', zIndex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} alt="Course thumbnail" />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                                <PlayCircle size={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 3. Filter & Sort Section */}
            < section style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    transition: 'all 0.3s ease',
                                    background: activeCategory === cat ? 'var(--c-navy-900)' : 'white',
                                    color: activeCategory === cat ? 'white' : '#64748b',
                                    boxShadow: activeCategory === cat ? '0 10px 20px rgba(11,17,32,0.1)' : 'none',
                                    border: activeCategory === cat ? 'none' : '1px solid #e2e8f0'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input type="text" placeholder="Cari materi..." style={{ padding: '12px 16px 12px 48px', borderRadius: '14px', border: '1px solid #e2e8f0', width: '240px', fontSize: '14px', outline: 'none' }} />
                        </div>
                        <button style={{ width: '48px', height: '48px', borderRadius: '14px', border: '1px solid #e2e8f0', background: 'white', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <Filter size={18} />
                        </button>
                    </div>
                </div>
            </section >

            {/* 4. Course Grid Section */}
            < section >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
                    {courses.map(course => (
                        <div key={course.id} style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>

                            {/* Card Image area */}
                            <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                                <img src={course.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={course.title} />
                                <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '6px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.95)', fontSize: '10px', fontWeight: 800, color: 'var(--c-navy-900)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                    {course.badge}
                                </div>
                                <div style={{ position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Bookmark size={16} />
                                </div>
                            </div>

                            {/* Card Content Area */}
                            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--c-gold-500)', background: 'var(--c-gold-100)', padding: '2px 8px', borderRadius: '4px' }}>{course.category}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 700, color: '#64748b' }}>
                                        <Star size={12} fill="#FBBF24" color="#FBBF24" /> {course.rating}
                                    </div>
                                </div>

                                <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--c-navy-900)', marginBottom: '16px', lineHeight: 1.4, flex: 1 }}>{course.title}</h4>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>
                                        <Clock size={14} /> {course.duration}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>
                                        <Users size={14} /> {course.students} Siswa
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden' }}>
                                            <img src={`https://i.pravatar.cc/100?u=${course.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={course.instructor} />
                                        </div>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--c-navy-900)' }}>{course.instructor}</span>
                                    </div>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'var(--c-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

        </div >
    );
};

export default UmrahAcademy;
