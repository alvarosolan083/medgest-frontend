// ✅ src/components/Header.jsx
import React from "react";
import { auth } from "../auth";

export default function Header() {
  const userEmail = auth.user?.email || "admin@clinika.com";

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm mb-4">
      <h1 className="text-xl font-semibold text-blue-700">Panel de Control</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          Bienvenido/a <strong>{userEmail}</strong> 👋
        </span>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="text-red-600 font-medium hover:underline text-sm"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
