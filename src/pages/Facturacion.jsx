// src/pages/Facturacion.jsx
import React from "react";

export default function Facturacion() {
  const facturas = [
    { id: 1, paciente: "Ana Morales", monto: 35000, fecha: "2025-05-10" },
    { id: 2, paciente: "Ricardo Soto", monto: 42000, fecha: "2025-05-12" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Facturación</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="px-4 py-2 text-left">Paciente</th>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-left">Monto</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura) => (
            <tr key={factura.id} className="border-t">
              <td className="px-4 py-2">{factura.paciente}</td>
              <td className="px-4 py-2">{factura.fecha}</td>
              <td className="px-4 py-2">${factura.monto.toLocaleString()}</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:underline">
                  Descargar PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
