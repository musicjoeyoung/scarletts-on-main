const BUSINESS_HOURS = [
  { day: 'Mon', hours: 'CLOSED' },
  { day: 'Tue', hours: 'CLOSED' },
  { day: 'Wed', hours: '11–5' },
  { day: 'Thu', hours: '11–5' },
  { day: 'Fri', hours: '11–5' },
  { day: 'Sat', hours: '11–5' },
  { day: 'Sun', hours: 'CLOSED' },
]

const MAP_URL = 'https://www.google.com/maps/search/811+Main+Street,+Manchester,+CT+06040'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Scarlett's on Main</h3>
          <p className="footer-tagline">a sweet repeat shop</p>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
            811 Main Street<br />
            Manchester, CT 06040
          </a>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <a href="mailto:scarlettsonmain@gmail.com" className="footer-link">
            scarlettsonmain@gmail.com
          </a>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <div className="footer-hours">
            {BUSINESS_HOURS.map((item) => (
              <div key={item.day} className={item.hours === 'CLOSED' ? 'closed' : ''}>
                <span className="day">{item.day}</span>
                <span className="hours">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section footer-nav">
          <h4>Navigate</h4>
          <nav>
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#visit" className="footer-link">Visit</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Scarlett's on Main. All rights reserved.</p>
      </div>
    </footer>
  )
}
