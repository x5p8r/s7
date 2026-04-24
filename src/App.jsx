import React, { useState } from 'react';
import './App.css';

const PROJECTS = [
  { title: "S7 للطقس", desc: "تطبيق ويب متطور لمتابعة حالة الطقس لحظة بلحظة.", tag: "تطبيق ويب" },
  { title: "S7 للصلاة", desc: "أداة ذكية لحساب أوقات الصلاة بناءً على موقعك.", tag: "أداة تقنية" },
  { title: "مولد QR", desc: "خدمة سريعة لإنشاء رموز الاستجابة السريعة.", tag: "خدمات" },
];

function App() {
  const [isDark, setIsDark] = useState(true);

  // دالة لتجربة الأزرار
  const handleAction = (msg) => alert(msg);

  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      <nav className="navbar">
        <div className="logo">S7 STUDIO</div>
        <ul className="nav-links">
          <li onClick={() => handleAction("سيتم نقلك للرئيسية")}>الرئيسية</li>
          <li onClick={() => handleAction("هذه هي مشاريعك")}>مشاريعي</li>
          <button className="theme-toggle-btn" onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </ul>
      </nav>

      <header className="hero">
        <h1>نبني <span className="gradient-text">المستقبل</span> برؤية تقنية</h1>
        <p>برمجة، تصميم، وحلول إبداعية متكاملة. تطوير سلمان 2026.</p>
        <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
          <button className="card-btn" onClick={() => handleAction("جاري عرض الأعمال...")}>مشاهدة أعمالي</button>
          <button className="card-btn" style={{background: 'transparent', border: '1px solid var(--accent)', color: 'var(--text-main)'}} 
                  onClick={() => handleAction("جاري تحميل السيرة الذاتية...")}>السيرة الذاتية</button>
        </div>
      </header>

      <section className="projects-section">
        <h2>أبرز المشاريع</h2>
        <div className="grid">
          {PROJECTS.map((p, i) => (
            <div className="card" key={i}>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <button className="card-btn" style={{width: '100%', marginTop: '1rem'}} 
                      onClick={() => handleAction(`استكشاف ${p.title}`)}>استكشف المشروع</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{textAlign: 'center', padding: '40px', borderTop: '1px solid var(--border)'}}>
        <p>صُنع بشغف بواسطة سلمان | 2026</p>
      </footer>
    </div>
  );
}

export default App;