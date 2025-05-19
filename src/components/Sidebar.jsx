// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "🏠 Dashboard" },
  { to: "/patients", label: "👥 Pacientes" },
  { to: "/agenda", label: "📅 Agenda" },
  { to: "/historial", label: "📋 Historial Médico" },
  { to: "/facturacion", label: "💰 Facturación" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">MedGest</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `py-2 px-4 rounded-md font-medium transition ${
                isActive
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
