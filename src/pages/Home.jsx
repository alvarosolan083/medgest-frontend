import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">MedGest</h1>
        <p className="text-gray-600 text-lg">
          Plataforma para la gestión médica en clínicas y consultorios.
        </p>
        <button
          onClick={handleClick}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
        >
          Ingresar al sistema
        </button>
      </div>
    </div>
  );
}


