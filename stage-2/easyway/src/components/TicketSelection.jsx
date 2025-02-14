import { useState } from "react";
import "./TicketSelection.css";

export function TicketSelection({ onSubmit }) {
  const [selectedType, setSelectedType] = useState("free");
  const [quantity, setQuantity] = useState("1");

  const handleSubmit = () => {
    onSubmit({
      type: selectedType,
      price: selectedType === "free" ? 0 : 100,
      quantity: Number.parseInt(quantity, 10), 
    });
  };

  return (
    <div className="ticket-selection">
      <div className="step-header">
        <h2>Select with Ease</h2>
        <p>Just 3 click away </p>
      </div>

      <div className="event-info">
        <h3>NSSPD Conference 2025</h3>
        <p>Empowerment, Healing and Deliverance.</p>
        <p>Jesus is Lord</p>
        <p className="event-date">April 10, 2025 | 9:00 AM</p>
        </div>

      <div className="ticket-types">
        <label className={`ticket-type ${selectedType === "free" ? "selected" : ""}`}>
          <input
            type="radio"
            name="ticketType"
            value="free"
            checked={selectedType === "free"}
            onChange={() => setSelectedType("free")}
          />
          <span className="ticket-price">FREEE</span>
          <span className="ticket-access">GENERAL ACCESS</span>
        </label>
        <label className={`ticket-type ${selectedType === "vip" ? "selected" : ""}`}>
          <input
            type="radio"
            name="ticketType"
            value="vip"
            checked={selectedType === "vip"}
            onChange={() => setSelectedType("vip")}
          />
          <span className="ticket-price">$10</span>
          <span className="ticket-access">RESERVATION</span>
        </label>
      </div>

      <div className="ticket-quantity">
        <label htmlFor="quantity" className="label">
          Tickets Numbers
        </label>
        <select id="quantity" className="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary submit-button">
        Continue to Details
      </button>
    </div>
  );
}
