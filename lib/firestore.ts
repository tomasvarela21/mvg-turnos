import { db } from "@/services/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Appointment } from "@/types/appointment";

const collectionName = "appointments";

export async function addAppointment(data: Omit<Appointment, "id">) {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
}

export async function getAppointments(): Promise<Appointment[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Appointment[];
}
