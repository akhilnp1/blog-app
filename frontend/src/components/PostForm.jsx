import { useState } from 'react'

const categories = ['General', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Health']

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--border)',
  background: '#fff',
  fontSize: '0.95rem',
  color: 'var(--ink)',
  borderRadius: 2,
  transition: 'border-color 0.2s'
}

export default function PostForm({ initial = {}, onSubmit, loading }) {
  const [form, setForm] = useState({
    title: initial.title || '',
    author: initial.author || '',
    content: initial.content || '',
    excerpt: initial.excerpt || '',
    category: initial.category || 'General',
  })

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, color: 'var(--muted)' }}>
          Title *
        </label>
        <input
          style={{ ...inputStyle, fontSize: '1.1rem', fontFamily: 'var(--serif)' }}
          value={form.title}
          onChange={set('title')}
          placeholder="Enter post title..."
          required
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, color: 'var(--muted)' }}>
            Author *
          </label>
          <input
            style={inputStyle}
            value={form.author}
            onChange={set('author')}
            placeholder="Your name"
            required
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, color: 'var(--muted)' }}>
            Category
          </label>
          <select
            style={{ ...inputStyle, cursor: 'pointer' }}
            value={form.category}
            onChange={set('category')}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, color: 'var(--muted)' }}>
          Excerpt <span style={{ fontWeight: 400, textTransform: 'none' }}>(optional — auto-generated if blank)</span>
        </label>
        <input
          style={inputStyle}
          value={form.excerpt}
          onChange={set('excerpt')}
          placeholder="Short description..."
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, color: 'var(--muted)' }}>
          Content *
        </label>
        <textarea
          style={{ ...inputStyle, minHeight: 280, resize: 'vertical', lineHeight: 1.7 }}
          value={form.content}
          onChange={set('content')}
          placeholder="Write your post here..."
          required
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          background: loading ? 'var(--muted)' : 'var(--accent)',
          color: '#fff',
          padding: '14px 32px',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          borderRadius: 2,
          alignSelf: 'flex-start',
          transition: 'opacity 0.2s',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Saving...' : 'Publish Post'}
      </button>
    </form>
  )
}
