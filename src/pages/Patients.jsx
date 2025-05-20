import React, { useState } from "react";
import { auth } from "../auth";

export default function Patients() {
  const [pacientes, setPacientes] = useState([
    {
      id: 1,
      nombre: "Ana Morales",
      rut: "12.345.678-9",
      telefono: "+56 9 1234 5678",
      email: "ana@correo.com",
    },
    {
      id: 2,
      nombre: "Ricardo Soto",
      rut: "23.456.789-0",
      telefono: "+56 9 8765 4321",
      email: "ricardo@correo.com",
    },
  ]);

  const [nuevo, setNuevo] = useState({
    nombre: "",
    rut: "",
    telefono: "",
    email: "",
  });

  const [editandoId, setEditandoId] = useState(null);

  const handleChange = (e) => {
    setNuevo({
      ...nuevo,
      [e.target.name]: e.target.value,
    });
  };

  const agregarPaciente = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.rut) return;

    if (editandoId) {
      setPacientes((prev) =>
        prev.map((p) => (p.id === editandoId ? { ...nuevo, id: p.id } : p))
      );
      setEditandoId(null);
    } else {
      const nuevoPaciente = {
        ...nuevo,
        id: Date.now(),
      };
      setPacientes([...pacientes, nuevoPaciente]);
    }

    setNuevo({ nombre: "", rut: "", telefono: "", email: "" });
  };

  const eliminarPaciente = (id) => {
    setPacientes(pacientes.filter((p) => p.id !== id));
  };

  const editarPaciente = (paciente) => {
    setNuevo(paciente);
    setEditandoId(paciente.id);
  };

  if (!auth.isAuthenticated) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        🔒 Debes iniciar sesión para acceder a la gestión de pacientes.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Gestión de Pacientes</h1>

      <form onSubmit={agregarPaciente} className="mb-6 grid md:grid-cols-5 gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="rut"
          placeholder="RUT"
          value={nuevo.rut}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={nuevo.telefono}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={nuevo.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editandoId ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">RUT</th>
              <th className="py-2 px-4 text-left">Teléfono</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="py-2 px-4">{p.nombre}</td>
                <td className="py-2 px-4">{p.rut}</td>
                <td className="py-2 px-4">{p.telefono}</td>
                <td className="py-2 px-4">{p.email}</td>
                <td className="py-2 px-4 space-x-3">
                  <button
                    onClick={() => editarPaciente(p)}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarPaciente(p.id)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {pacientes.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No hay pacientes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
