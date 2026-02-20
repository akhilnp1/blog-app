import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost, updatePost, deletePost } from '../api'
import PostForm from '../components/PostForm'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPost(id)
      .then(r => setPost(r.data))
      .catch(() => setError('Post not found.'))
      .finally(() => setLoading(false))
  }, [id])

  const handleUpdate = async (data) => {
    setSaving(true)
    try {
      const res = await updatePost(id, data)
      setPost(res.data)
      setEditing(false)
    } catch {
      setError('Failed to update post.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Delete this post? This cannot be undone.')) return
    await deletePost(id)
    navigate('/')
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '6rem', color: 'var(--muted)', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
      Loading...
    </div>
  )

  if (error) return (
    <div style={{ textAlign: 'center', padding: '6rem', color: 'var(--accent)' }}>{error}</div>
  )

  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  })

  if (editing) return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setEditing(false)} style={{ background: 'none', color: 'var(--muted)', fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer' }}>
          ← Cancel
        </button>
        <h2 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.5rem' }}>Edit Post</h2>
      </div>
      <PostForm initial={post} onSubmit={handleUpdate} loading={saving} />
    </main>
  )

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 2rem' }}>
      {/* Back */}
      <button onClick={() => navigate('/')} style={{ background: 'none', color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
        ← All Posts
      </button>

      {/* Meta */}
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '2px solid var(--accent)', paddingBottom: 2 }}>
          {post.category}
        </span>
      </div>

      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem', fontStyle: 'italic' }}>
        {post.title}
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
        <span>By <strong style={{ color: 'var(--ink)' }}>{post.author}</strong></span>
        <span>{date}</span>
      </div>

      {/* Content */}
      <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--ink)', whiteSpace: 'pre-wrap', marginBottom: '3rem' }}>
        {post.content}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={() => setEditing(true)}
          style={{ padding: '10px 24px', border: '1px solid var(--ink)', background: 'none', color: 'var(--ink)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 2, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--paper)' }}
          onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = 'var(--ink)' }}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          style={{ padding: '10px 24px', border: '1px solid var(--accent)', background: 'none', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 2, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#fff' }}
          onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = 'var(--accent)' }}
        >
          Delete
        </button>
      </div>
    </main>
  )
}
