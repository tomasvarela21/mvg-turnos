import { Appointment } from "@/types/appointment";

export function getFakeAppointments(): Appointment[] {
  return [
    {
      id: "1",
      fullName: "Juan Pérez",
      phone: "3812345678",
      date: "2025-06-28",
      time: "14:00",
      service: "Haircut",
    },
    {
      id: "2",
      fullName: "Lucía García",
      phone: "3812345679",
      date: "2025-06-28",
      time: "15:00",
      service: "Beard Trim",
    },
  ];
}
