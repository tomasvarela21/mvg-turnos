import { Appointment } from "@/types/appointment";

export default function AppointmentCard({ appointment }: { appointment: Appointment }) {
  return (
    <div className="border p-4 rounded bg-white shadow">
      <h2 className="text-lg font-bold">{appointment.fullName}</h2>
      <p>{appointment.phone}</p>
      <p>{appointment.date} at {appointment.time}</p>
      <p className="italic">{appointment.service}</p>
    </div>
  );
}
