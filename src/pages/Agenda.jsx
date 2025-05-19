// src/pages/Agenda.jsx
import React, { useState } from "react";

export default function Agenda() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      paciente: "María López",
      medico: "Dr. Juan Pérez",
      fecha: "2025-05-20",
      hora: "10:00",
      estado: "Confirmada",
    },
    {
      id: 2,
      paciente: "Carlos Soto",
      medico: "Dra. Fernanda Ruiz",
      fecha: "2025-05-20",
      hora: "11:30",
      estado: "Pendiente",
    },
  ]);

  const [nuevaCita, setNuevaCita] = useState({
    paciente: "",
    medico: "",
    fecha: "",
    hora: "",
    estado: "Pendiente",
  });

  const handleChange = (e) => {
    setNuevaCita({
      ...nuevaCita,
      [e.target.name]: e.target.value,
    });
  };

  const agregarCita = (e) => {
    e.preventDefault();
    if (!nuevaCita.paciente || !nuevaCita.medico || !nuevaCita.fecha || !nuevaCita.hora) return;
    const nueva = { ...nuevaCita, id: Date.now() };
    setCitas([...citas, nueva]);
    setNuevaCita({ paciente: "", medico: "", fecha: "", hora: "", estado: "Pendiente" });
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Agenda Médica</h1>

      {/* Formulario para agregar cita */}
      <form onSubmit={agregarCita} className="mb-6 grid gap-4 md:grid-cols-5">
        <input
          type="text"
          name="paciente"
          placeholder="Paciente"
          value={nuevaCita.paciente}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="medico"
          placeholder="Médico"
          value={nuevaCita.medico}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="date"
          name="fecha"
          value={nuevaCita.fecha}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="time"
          name="hora"
          value={nuevaCita.hora}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agendar
        </button>
      </form>

      {/* Tabla de citas */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-2 px-4 text-left">Paciente</th>
              <th className="py-2 px-4 text-left">Médico</th>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-left">Hora</th>
              <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id} className="border-t">
                <td className="py-2 px-4">{cita.paciente}</td>
                <td className="py-2 px-4">{cita.medico}</td>
                <td className="py-2 px-4">{cita.fecha}</td>
                <td className="py-2 px-4">{cita.hora}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      cita.estado === "Confirmada"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {cita.estado}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:underline mr-3">Editar</button>
                  <button
                    onClick={() => eliminarCita(cita.id)}
                    className="text-red-600 hover:underline"
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
