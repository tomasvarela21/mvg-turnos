"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAppointments } from "@/lib/firestore";
import AppointmentCard from "@/components/AppointmentCard";
import { Appointment } from "@/types/appointment";

export default function AdminDashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (!user) {
      router.push("/admin/login");
    } else {
      getAppointments().then(setAppointments);
    }
  }, [user]);

  if (!user) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={logout} className="text-red-600 underline">
          Cerrar sesión
        </button>
      </div>

      <div className="grid gap-4">
        {appointments.length === 0 ? (
          <p>No hay turnos.</p>
        ) : (
          appointments.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} />
          ))
        )}
      </div>
    </div>
  );
}
