import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Symptom Checker', to: '/symptom-checker' },
  { label: 'Features', to: '/features' },
  { label: 'How to Use', to: '/how-to-use' },
]

const projectLinks = [
  { label: 'About Project', to: '/about' },
  { label: 'Team', to: '/team' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(148, 163, 184, 0.15)',
        background: '#020617',
        marginTop: '48px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr 1fr',
            gap: '28px',
          }}
          className="footer-grid"
        >
          <div>
            <h3
              style={{
                margin: 0,
                color: 'white',
                fontSize: '20px',
                fontWeight: 800,
              }}
            >
              Smart Preventive Healthcare System
            </h3>

            <p
              style={{
                marginTop: '14px',
                color: '#cbd5e1',
                lineHeight: 1.8,
                fontSize: '14px',
                maxWidth: '420px',
              }}
            >
              An AI-assisted academic healthcare project focused on symptom awareness,
              preventive guidance, recovery support, and responsible early decision support.
            </p>
          </div>

          <div>
            <h4
              style={{
                margin: 0,
                color: 'white',
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              Quick Links
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '16px 0 0',
                display: 'grid',
                gap: '10px',
              }}
            >
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    style={{
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                margin: 0,
                color: 'white',
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              Project Info
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '16px 0 0',
                display: 'grid',
                gap: '10px',
              }}
            >
              {projectLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    style={{
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '28px',
            paddingTop: '18px',
            borderTop: '1px solid rgba(148, 163, 184, 0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
          className="footer-bottom"
        >
          <p
            style={{
              margin: 0,
              color: '#94a3b8',
              fontSize: '13px',
            }}
          >
            © 2026 Smart Preventive Healthcare System
          </p>

          <p
            style={{
              margin: 0,
              color: '#94a3b8',
              fontSize: '13px',
            }}
          >
            For educational use only · Not a medical diagnosis platform
          </p>
        </div>
      </div>

      <style>{`
        footer a:hover {
          color: #67e8f9 !important;
        }

        footer a:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 3px;
          border-radius: 6px;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  )
}