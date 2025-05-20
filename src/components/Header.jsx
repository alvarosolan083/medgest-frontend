import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  if (!token) return null; // ⛔ Oculta el Header si no hay sesión

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm mb-4">
      <h1 className="text-xl font-semibold text-blue-700">Panel de Control</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          Bienvenido/a <strong>{email}</strong> 👋
        </span>
        <button
          onClick={handleLogout}
          className="text-red-600 font-medium hover:underline text-sm"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
