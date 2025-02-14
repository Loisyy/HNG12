import "./TicketConfirmation.css"

export function TicketConfirmation({ ticketData, attendeeData, onBookAnother }) {
  return (
    <div className="ticket-confirmation">
      <div className="step-header">
        <h2>Your Ticket is Ready!</h2>
        <p>Step 3 of 3</p>
      </div>

      <div className="ticket-card">
        <div className="ticket-content">
          <div className="ticket-event">
            <h3>NSSPD CONFERENCE 2025</h3>
            <p>April 10, 2025 | 9:00 AM</p>
          </div>

          <div className="attendee-photo">
            <img src={attendeeData.avatarUrl || "/placeholder.svg?height=100&width=100"} alt="Attendee" />
          </div>

          <div className="ticket-details">
            <div className="detail-item">
              <p className="detail-label">Name</p>
              <p className="detail-value">{attendeeData.name}</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Email</p>
              <p className="detail-value">{attendeeData.email}</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Ticket Type</p>
              <p className="detail-value">{ticketData.type.toUpperCase()}</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Quantity</p>
              <p className="detail-value">{ticketData.quantity}</p>
            </div>
          </div>
        </div>

        <div className="ticket-qr">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <rect x="7" y="7" width="3" height="3"></rect>
            <rect x="14" y="7" width="3" height="3"></rect>
            <rect x="7" y="14" width="3" height="3"></rect>
            <rect x="14" y="14" width="3" height="3"></rect>
          </svg>
        </div>
      </div>

      <div className="ticket-actions">
        <button className="btn btn-outline" onClick={onBookAnother}>
          Book Another Ticket
        </button>
        <button className="btn btn-primary">Download Ticket</button>
      </div>
    </div>
  )
}

