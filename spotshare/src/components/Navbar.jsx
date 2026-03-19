import { useState } from 'react'
import { MapPin, Menu, X } from 'lucide-react'
import { COLORS } from '../data/listings.js'

const { green, darkGreen, midGreen } = COLORS

export default function Navbar({ nav, dark = false }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav
      style={{
        background: dark ? darkGreen : 'white',
        borderBottom: dark ? 'none' : '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 1.5rem',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
          onClick={() => nav('home')}
        >
          <div
            style={{
              background: green,
              width: 32,
              height: 32,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MapPin size={16} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: dark ? 'white' : '#111' }}>
            Spot<span style={{ color: green }}>Share</span>
          </span>
        </div>

        {/* Desktop links */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 24 }}
          className="desktop-nav"
        >
          {[['Find Parking', 'search'], ['How It Works', 'home'], ['Help', 'faq']].map(([label, target]) => (
            <button
              key={label}
              onClick={() => nav(target)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
                color: dark ? 'rgba(255,255,255,0.85)' : '#4b5563',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop actions */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
          className="desktop-nav"
        >
          <button
            onClick={() => nav('host-dashboard')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              color: dark ? 'rgba(255,255,255,0.8)' : '#374151',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            List Your Space
          </button>
          <button
            onClick={() => nav('student-dashboard')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              color: dark ? 'rgba(255,255,255,0.8)' : '#374151',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Log In
          </button>
          <button
            onClick={() => nav('search')}
            style={{
              background: green,
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              padding: '8px 20px',
              borderRadius: 24,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-nav"
        >
          {mobileMenu ? (
            <X size={24} color={dark ? 'white' : '#111'} />
          ) : (
            <Menu size={24} color={dark ? 'white' : '#111'} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenu && (
        <div
          style={{
            background: dark ? midGreen : 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {[
            ['Find Parking', 'search'],
            ['Student Dashboard', 'student-dashboard'],
            ['Host Dashboard', 'host-dashboard'],
            ['Help', 'faq'],
          ].map(([l, t]) => (
            <button
              key={l}
              onClick={() => { nav(t); setMobileMenu(false) }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: 15,
                color: dark ? 'white' : '#374151',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
