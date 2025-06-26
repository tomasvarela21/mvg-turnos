import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

export const metadata = {
  title: "Mi Viejo Garage",
  description: "Barbería en San Miguel de Tucumán",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main className="container mx-auto px-4 py-6">{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
