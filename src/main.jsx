// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@yourusername',
    icon: 'https://cdn.simpleicons.org/tiktok/000000',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: 'https://cdn.simpleicons.org/instagram/000000',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/yourusername',
    icon: 'https://cdn.simpleicons.org/facebook/000000',
  },
]

function App() {
  return (
    <div className="container">
      {/* ส่วนหัว / โปรไฟล์ */}
      <div className="profile">
        <img className="avatar" src="/avatar.jpg" alt="Profile" />
        <h1>Life with Jame</h1>
        <p>Welcome to my link bio!</p>
      </div>

      {/* รายการปุ่มลิงก์พร้อมไอคอนสีดำ */}
      <div className="links-container">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <img src={item.icon} alt={item.name} width="22" height="22" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
