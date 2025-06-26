"use client";

import { useState } from "react";
import { addAppointment } from "@/lib/firestore";

export default function BookingForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addAppointment(form);
      setSuccess(true);
      setForm({
        fullName: "",
        phone: "",
        date: "",
        time: "",
        service: "",
      });
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white p-6 shadow rounded">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      />
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      >
        <option value="">Select Service</option>
        <option value="Haircut">Haircut</option>
        <option value="Beard Trim">Beard Trim</option>
        <option value="Combo">Haircut + Beard</option>
      </select>
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Booking..." : "Book Now"}
      </button>

      {success && (
        <p className="text-green-600 text-sm mt-2">Appointment booked successfully!</p>
      )}
    </form>
  );
}
