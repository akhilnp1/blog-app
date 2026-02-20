import { useEffect, useState } from 'react'
import { getPosts } from '../api'
import PostCard from '../components/PostCard'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPosts()
      .then(r => setPosts(r.data))
      .catch(() => setError('Could not load posts. Is the backend running?'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '6rem', color: 'var(--muted)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem' }}>
      Loading posts...
    </div>
  )

  if (error) return (
    <div style={{ textAlign: 'center', padding: '6rem', color: 'var(--accent)' }}>{error}</div>
  )

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Hero header */}
      <div style={{
        borderBottom: '3px solid var(--ink)',
        marginBottom: '3rem',
        paddingBottom: '1.5rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      }}>
        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
            Welcome to
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1, fontStyle: 'italic' }}>
            The Blog
          </h1>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </span>
      </div>

      {posts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '5rem 2rem',
          border: '2px dashed var(--border)',
          color: 'var(--muted)'
        }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.3rem', marginBottom: 8 }}>
            No posts yet.
          </p>
          <p style={{ fontSize: '0.9rem' }}>Click <strong>+ New Post</strong> to write your first one.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </main>
  )
}
