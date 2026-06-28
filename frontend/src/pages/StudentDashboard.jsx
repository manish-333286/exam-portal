import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentDashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (!stored) { navigate('/'); return }
    setUser(JSON.parse(stored))
  }, [])

  function logout() {
    localStorage.removeItem('user')
    navigate('/')
  }

  if (!user) return null

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '600' }}>My exams</h2>
          <p style={{ color: '#888', fontSize: '14px' }}>Welcome, {user.name}</p>
        </div>
        <button onClick={logout} style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', background: '#fff' }}>
          Sign out
        </button>
      </div>
      <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', textAlign: 'center', color: '#888', border: '1px solid #eee' }}>
        No exams scheduled yet.
      </div>
    </div>
  )
}
