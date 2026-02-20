import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <header style={{
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '0 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.6rem',
          fontStyle: 'italic',
          letterSpacing: '-0.5px',
          color: 'var(--paper)'
        }}>
          The<span style={{ color: 'var(--accent)', marginLeft: 6 }}>Blog</span>
        </Link>

        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8 }}>
            Home
          </Link>
          <button
            onClick={() => navigate('/new')}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 2,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              fontWeight: 500,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.target.style.opacity = 0.85}
            onMouseLeave={e => e.target.style.opacity = 1}
          >
            + New Post
          </button>
        </nav>
      </div>
    </header>
  )
}
