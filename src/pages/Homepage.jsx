import React from 'react'
import '../css/homepage.css'
import Topbar from '../components/Topbar'

export default function Homepage() {
  return (
    <div className="homepage">
      <Topbar />
      <header className="hp-header">
        <h1>Diners28 Table Reservation</h1>
        <p className="hp-subtitle">Reserve your table quickly and easily.</p>
      </header>

      <section className="hp-hero">
        <div className="hp-hero-inner">
          <h2>Welcome</h2>
          <p>Find available tables, choose a time, and confirm your reservation in seconds.</p>
          <button className="hp-cta">Get Started</button>
        </div>
      </section>

      <section className="hp-features">
        <div className="feature">
          <h3>Fast Booking</h3>
          <p>Quickly search and reserve available slots.</p>
        </div>
        <div className="feature">
          <h3>Flexible Times</h3>
          <p>Choose times that fit your schedule.</p>
        </div>
        <div className="feature">
          <h3>Easy Management</h3>
          <p>View and modify your reservations easily.</p>
        </div>
      </section>

      <footer className="hp-footer">
        <small>© {new Date().getFullYear()} Diners28</small>
      </footer>
    </div>
  )
}
