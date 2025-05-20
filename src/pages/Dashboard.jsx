import React from "react";

export default function Dashboard() {
  const email = localStorage.getItem("email");

  return (
    <>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Panel de Control</h1>
        <p className="text-sm text-gray-500">Bienvenido/a 👋 <strong>{email}</strong></p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl mb-2">📅</div>
          <p className="text-sm text-gray-500">Citas de hoy</p>
          <h2 className="text-2xl font-semibold text-blue-600">0</h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl mb-2">👥</div>
          <p className="text-sm text-gray-500">Pacientes activos</p>
          <h2 className="text-2xl font-semibold text-blue-600">0</h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl mb-2">💰</div>
          <p className="text-sm text-gray-500">Ingresos mensuales</p>
          <h2 className="text-2xl font-semibold text-blue-600">$0</h2>
        </div>
      </section>

      <div className="mt-10 bg-white p-6 rounded-lg shadow text-center text-gray-500">
        Aquí irá un resumen más completo del sistema.
      </div>
    </>
  );
}
