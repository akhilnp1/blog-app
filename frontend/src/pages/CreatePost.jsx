import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../api'
import PostForm from '../components/PostForm'

export default function CreatePost() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    setLoading(true)
    setError(null)
    try {
      const res = await createPost(data)
      navigate(`/posts/${res.data.id}`)
    } catch {
      setError('Failed to create post. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 2rem' }}>
      <div style={{ marginBottom: '2.5rem', borderBottom: '3px solid var(--ink)', paddingBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
          Write
        </p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontStyle: 'italic' }}>
          New Post
        </h1>
      </div>

      {error && (
        <div style={{ background: '#fde8e8', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '12px 16px', borderRadius: 2, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      <PostForm onSubmit={handleSubmit} loading={loading} />
    </main>
  )
}
