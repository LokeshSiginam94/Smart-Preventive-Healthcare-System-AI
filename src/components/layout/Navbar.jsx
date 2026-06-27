import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Symptom Checker', to: '/symptom-checker' },
  { label: 'Features', to: '/features' },
  { label: 'How to Use', to: '/how-to-use' },
  { label: 'About Project', to: '/about' },
  { label: 'Team', to: '/team' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.18)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '14px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <Link
            to="/"
            onClick={closeMenu}
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              minWidth: 0,
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: '17px',
                lineHeight: 1.2,
              }}
            >
              Smart Preventive
            </span>
            <span
              style={{
                color: '#7dd3fc',
                fontWeight: 600,
                fontSize: '13px',
                lineHeight: 1.2,
              }}
            >
              Healthcare System
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              color: 'white',
              borderRadius: '10px',
              padding: '10px 12px',
              cursor: 'pointer',
            }}
            className="navbar-menu-button"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <nav
            aria-label="Primary Navigation"
            id="primary-navigation"
            className={`navbar-links ${menuOpen ? 'open' : ''}`}
          >
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                gap: '10px',
                margin: 0,
                padding: 0,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    style={({ isActive }) => ({
                      color: isActive ? '#67e8f9' : '#cbd5e1',
                      textDecoration: 'none',
                      fontWeight: isActive ? 700 : 500,
                      padding: '10px 12px',
                      borderRadius: '10px',
                      backgroundColor: isActive
                        ? 'rgba(34, 211, 238, 0.12)'
                        : 'transparent',
                      border: isActive
                        ? '1px solid rgba(34, 211, 238, 0.18)'
                        : '1px solid transparent',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    })}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <style>{`
        .navbar-links a:hover {
          color: #67e8f9 !important;
          background: rgba(34, 211, 238, 0.08) !important;
        }

        .navbar-links a:focus-visible,
        .navbar-menu-button:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 2px;
        }

        @media (max-width: 960px) {
          .navbar-menu-button {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }

          .navbar-links {
            display: none;
            width: 100%;
            margin-top: 14px;
          }

          .navbar-links.open {
            display: block;
          }

          .navbar-links ul {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 8px !important;
            padding-top: 8px !important;
          }

          .navbar-links li,
          .navbar-links a {
            width: 100%;
          }

          .navbar-links a {
            display: block !important;
            padding: 12px 14px !important;
            background: rgba(15, 23, 42, 0.92);
            border: 1px solid rgba(148, 163, 184, 0.12) !important;
          }
        }

        @media (min-width: 961px) {
          .navbar-links {
            display: block !important;
          }
        }
      `}</style>
    </header>
  )
}