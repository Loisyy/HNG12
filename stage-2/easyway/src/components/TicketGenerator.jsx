import { useState } from "react"
import { TicketSelection } from "./TicketSelection"
import { AttendeeDetails } from "./AttendeeDetails"
import { TicketConfirmation } from "./TicketConfirmation"
import "./TicketGenerator.css"

export function TicketGenerator() {
  const [step, setStep] = useState(1)
  const [ticketData, setTicketData] = useState(null)
  const [attendeeData, setAttendeeData] = useState(null)

  const handleTicketSelect = (data) => {
    setTicketData(data)
    setStep(2)
  }

  const handleAttendeeSubmit = (data) => {
    setAttendeeData(data)
    setStep(3)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleReset = () => {
    setStep(1)
    setTicketData(null)
    setAttendeeData(null)
  }

  return (
    <div className="ticket-generator">
      <div className="ticket-generator-content">
        {step === 1 && <TicketSelection onSubmit={handleTicketSelect} />}
        {step === 2 && <AttendeeDetails ticketType={ticketData} onSubmit={handleAttendeeSubmit} onBack={handleBack} />}
        {step === 3 && (
          <TicketConfirmation ticketData={ticketData} attendeeData={attendeeData} onBookAnother={handleReset} />
        )}
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>
    </div>
  )
}
