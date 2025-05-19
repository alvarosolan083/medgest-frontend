// src/pages/Historial.jsx
import React, { useState } from "react";

export default function Historial() {
  const [historial, setHistorial] = useState([
    {
      id: 1,
      fecha: "2025-05-10",
      medico: "Dr. Juan Pérez",
      nota: "Paciente presenta mejoría significativa tras tratamiento con fisioterapia.",
    },
    {
      id: 2,
      fecha: "2025-05-15",
      medico: "Dra. Carolina Gómez",
      nota: "Se observa inflamación persistente. Se recomienda resonancia magnética.",
    },
  ]);

  const [nuevoRegistro, setNuevoRegistro] = useState({
    fecha: "",
    medico: "",
    nota: "",
  });

  const handleChange = (e) => {
    setNuevoRegistro({
      ...nuevoRegistro,
      [e.target.name]: e.target.value,
    });
  };

  const agregarNota = (e) => {
    e.preventDefault();
    if (!nuevoRegistro.fecha || !nuevoRegistro.medico || !nuevoRegistro.nota) return;
    const nueva = { ...nuevoRegistro, id: Date.now() };
    setHistorial([nueva, ...historial]);
    setNuevoRegistro({ fecha: "", medico: "", nota: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Historial Médico</h1>

      {/* Formulario para nueva nota */}
      <form onSubmit={agregarNota} className="grid md:grid-cols-4 gap-4 mb-6">
        <input
          type="date"
          name="fecha"
          value={nuevoRegistro.fecha}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="medico"
          placeholder="Médico tratante"
          value={nuevoRegistro.medico}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="nota"
          placeholder="Nota médica"
          value={nuevoRegistro.nota}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agregar
        </button>
      </form>

      {/* Tabla de historial */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-left">Médico</th>
              <th className="py-2 px-4 text-left">Nota</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((registro) => (
              <tr key={registro.id} className="border-t">
                <td className="py-2 px-4">{registro.fecha}</td>
                <td className="py-2 px-4">{registro.medico}</td>
                <td className="py-2 px-4">{registro.nota}</td>
              </tr>
            ))}
            {historial.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No hay registros aún.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
