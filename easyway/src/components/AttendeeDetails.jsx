import { useState } from "react";
import "./AttendeeDetails.css";

export function AttendeeDetails({ ticketType, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatarUrl: "",
    specialRequest: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, avatarUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="attendee-details">
      <div className="step-header">
        <h2>Attendee Details</h2>
        <p>Step 2 of 3</p>
      </div>

      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="avatar" className="label">
            Profile Photo
          </label>
          <div className="file-upload">
            <label htmlFor="avatar" className="file-upload-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>Click to upload or drag and drop</span>
            </label>
            <input id="avatar" type="file" onChange={handleImageUpload} accept="image/*" />
          </div>
          {formData.avatarUrl && <img src={formData.avatarUrl} alt="Avatar Preview" className="avatar-preview" />}
        </div>

        <div className="form-field">
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input
            id="name"
            className="input"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            id="email"
            className="input"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="special-request" className="label">
            Special Requests
          </label>
          <textarea
            id="special-request"
            className="textarea"
            value={formData.specialRequest}
            onChange={(e) => setFormData((prev) => ({ ...prev, specialRequest: e.target.value }))}
            placeholder="Any dietary requirements or accessibility needs?"
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-outline" onClick={onBack}>
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Generate Ticket
        </button>
      </div>
    </form>
  );
}
