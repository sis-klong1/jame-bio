import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, ExternalLink } from 'lucide-react';
import './style.css';

const profileImage = 'https://i.ibb.co/5hV3z4Jh/IMG-5999.jpg';

const links = [
  {
    type: 'tiktok',
    label: 'lifewithjame_s',
    url: 'https://www.tiktok.com/@niroot.k',
  },
  {
    type: 'tiktok',
    label: 'J-AME (s)',
    url: 'https://www.tiktok.com/@iloveyouja.mes',
  },
  {
    type: 'instagram',
    label: 'lifewithjame_s',
    url: 'https://www.instagram.com/lifewithjame_s',
  },
  {
    type: 'facebook',
    label: 'Niroot Kongchin',
    url: 'https://www.facebook.com/niroot.kongchin',
  },
];

const iconUrls = {
  tiktok: 'https://cdn.simpleicons.org/tiktok/000000',
  instagram: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg',
  facebook: 'https://cdn.simpleicons.org/facebook/000000',
};

// 06:00–19:00 = day, 19:01–05:59 = night
function getPeriod() {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const dayStart = 6 * 60;
  const dayEnd = 19 * 60;
  return minutes >= dayStart && minutes <= dayEnd ? 'day' : 'night';
}

function SocialIcon({ type }) {
  return (
    <span className="brand-icon">
      <img
        src={iconUrls[type]}
        alt={type}
        style={{ width: '18px', height: '18px', display: 'block' }}
      />
    </span>
  );
}

function App() {
  const [theme, setTheme] = useState(getPeriod);

  // เขียนธีมลง <html> เพื่อให้ CSS variables ทั้งหมด fade ตามกัน
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // เช็คเวลาซ้ำทุก 30 วินาที เผื่อเปิดหน้าค้างข้ามช่วงเวลา
  useEffect(() => {
    const id = setInterval(() => {
      const next = getPeriod();
      setTheme((prev) => (prev === next ? prev : next));
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <section className="bio-card">
        <div className="profile-wrap">
          <img className="profile" src={profileImage} alt="Life With Jame_s" />
        </div>

        <h1>Life With Jame_s</h1>
        <p className="bio">Sharing stays, food and memorable trips together 🇹🇭</p>

        <div className="primary-actions">
          <a
            className="glass-action line"
            href="https://lin.ee/TVHEeIG"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Line"
          >
            <span className="line-logo">LINE</span>
            <span>LINE</span>
          </a>

          <a className="glass-action" href="mailto:siz.skk1@gmail.com" aria-label="Send email">
            <Mail size={19} strokeWidth={2.1} />
            <span>Email</span>
          </a>
        </div>

        <div className="social-list">
          {links.map((link) => (
            <a
              className="social-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.url}
            >
              <span className="social-left">
                <SocialIcon type={link.type} />
                <span>{link.label}</span>
              </span>
              <ExternalLink size={16} strokeWidth={1.8} className="external" />
            </a>
          ))}
        </div>

        <footer>Life With Jame_s · Thailand 🇹🇭</footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
