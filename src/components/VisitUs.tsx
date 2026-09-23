const BUSINESS_HOURS = [
  { day: 'Monday', hours: 'CLOSED' },
  { day: 'Tuesday', hours: 'CLOSED' },
  { day: 'Wednesday', hours: '11:00 AM – 5:00 PM' },
  { day: 'Thursday', hours: '11:00 AM – 5:00 PM' },
  { day: 'Friday', hours: '11:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: '11:00 AM – 5:00 PM' },
  { day: 'Sunday', hours: 'CLOSED' },
]

const MAP_URL = 'https://www.google.com/maps/search/811+Main+Street,+Manchester,+CT+06040'

export default function VisitUs() {
  return (
    <section id="visit" className="visit-us">
      <div className="container visit-us-content">
        <div className="visit-info">
          <h2>Visit Us</h2>
          <p className="business-name-section">Scarlett's on Main</p>
          <address>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="address-link">
              811 Main Street<br />
              Manchester, CT 06040
            </a>
          </address>
        </div>
        
        <div className="hours-info">
          <h3>Store Hours</h3>
          <div className="hours-table">
            {BUSINESS_HOURS.map((item) => (
              <div key={item.day} className={`hours-row ${item.hours === 'CLOSED' ? 'closed' : ''}`}>
                <span className="day">{item.day}</span>
                <span className="hours">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
