import React, { useState } from 'react'
import '../css/Topbar.css'

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const [isSignup, setIsSignup] = useState(false) 
  const [email, setEmail] = useState('')
  const [name, setName] = useState('') 
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('') 
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="topbar-brand">DINER 28</div>

        <button
          className="topbar-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`hamburger ${open ? 'is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <div
        className={`sidebar-overlay ${open ? 'visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside className={`sidebar ${open ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="sidebar-inner">
          <div className="sidebar-header login-header">
            <div className="login-title">{isSignup ? 'Sign-up' : 'Log-in'}</div>
          </div>

          <div className="login-body">
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault()
                if (isSignup) {
                  if (password !== confirmPassword) {
                    console.warn('Passwords do not match')
                    return
                  }
                  console.log('Sign-up', { name, email, password })
                } else {
                  console.log('Log-in', { email, password })
                }
                // close sidebar after submit
                setOpen(false)
              }}
            >
              {isSignup && (
                <label className="form-row">
                  <span className="row-icon" aria-hidden>👤</span>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              )}

              <label className="form-row">
                <span className="row-icon" aria-hidden>✉️</span>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="form-row">
                <span className="row-icon" aria-hidden>🔒</span>
                <input
                  className="input-field"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="pwd-toggle"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </label>

              {isSignup && (
                <label className="form-row">
                  <span className="row-icon" aria-hidden>🔒</span>
                  <input
                    className="input-field"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="pwd-toggle"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </label>
              )}

              <div className="dashed-divider" aria-hidden />

              <button
                className={`login-btn ${isSignup ? 'signup-btn' : 'neutral-btn'}`}
                type="submit"
              >
                <span className="btn-icon">{isSignup ? '👥' : '🔑'}</span>
                <span className="btn-text">{isSignup ? 'Sign-up' : 'Log-in'}</span>
              </button>
            </form>

            <button
              className={`action-row ${isSignup ? 'signup-active' : ''}`}
              onClick={() => setIsSignup((s) => !s)}
              type="button"
            >
              <span className="action-icon">{isSignup ? '🔑' : '👥'}</span>
              <span className="action-label">{isSignup ? 'Log-in' : 'Sign-up'}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
