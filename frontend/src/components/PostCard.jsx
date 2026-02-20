import { useNavigate } from 'react-router-dom'

const categoryColors = {
  General: '#7a6f62',
  Technology: '#2980b9',
  Lifestyle: '#27ae60',
  Travel: '#8e44ad',
  Food: '#e67e22',
  Health: '#16a085',
}

export default function PostCard({ post }) {
  const navigate = useNavigate()
  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  })
  const color = categoryColors[post.category] || '#7a6f62'

  return (
    <article
      onClick={() => navigate(`/posts/${post.id}`)}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        padding: '2rem',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* category tag */}
      <span style={{
        display: 'inline-block',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: color,
        marginBottom: '0.75rem',
        borderBottom: `2px solid ${color}`,
        paddingBottom: 2
      }}>
        {post.category}
      </span>

      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: '1.4rem',
        lineHeight: 1.3,
        marginBottom: '0.75rem',
        color: 'var(--ink)'
      }}>
        {post.title}
      </h2>

      <p style={{
        color: 'var(--muted)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        {post.excerpt}
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--border)',
        paddingTop: '1rem',
        fontSize: '0.8rem',
        color: 'var(--muted)'
      }}>
        <span>By <strong style={{ color: 'var(--ink)' }}>{post.author}</strong></span>
        <span>{date}</span>
      </div>
    </article>
  )
}
