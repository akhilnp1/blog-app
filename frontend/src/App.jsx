import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/new"       element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border)',
        marginTop: '4rem',
        color: 'var(--muted)',
        fontSize: '0.8rem',
        fontFamily: 'var(--serif)',
        fontStyle: 'italic'
      }}>
        The Blog — Built with FastAPI &amp; React
      </footer>
    </div>
  )
}
