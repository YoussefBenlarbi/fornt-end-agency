"use client";

import { useState } from "react";
import axios from 'axios';
import styles from "../app/tours/ToursEnquiry.module.css";

export default function TourEnquiryForm({ tour_id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    arrival_date: "",
    departure_date: "",
    number_of_travelers: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enquiryData = {
      tour_id,
      ...formData,
      status: "pending",
    };

    try {
      const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:8000/api/enquiry-data";
      const response = await axios.post(API_ENDPOINT, enquiryData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        alert("Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          arrival_date: "",
          departure_date: "",
          number_of_travelers: "",
          message: "",
        });
      } else {
        console.error("Response status:", response.status);
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form className={styles.enquiryForm} onSubmit={handleSubmit}>
      <h3 style={{ fontWeight: "bold" }}>Request a quote now!</h3>
      <p className={styles.enquiryParagragh}>
        Let Us Take You on a Journey Through Time and Culture in Morocco
      </p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="arrival_date"
        placeholder="Arrival Date"
        required
        value={formData.arrival_date}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="departure_date"
        placeholder="Departure Date"
        required
        value={formData.departure_date}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="number_of_travelers"
        placeholder="Number of Travelers"
        required
        min="1"
        value={formData.number_of_travelers}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>

      <button type="submit">Send Enquiry</button>
    </form>
  );
}