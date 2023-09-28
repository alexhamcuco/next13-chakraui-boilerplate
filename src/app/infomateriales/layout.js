import { getMateriales } from "@/app/lib/api";
import React, { useEffect, useState } from "react";

const Info = () => {
  const [materiales, setMateriales] = useState([]);
  const [tiposUnicos, setTiposUnicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMateriales = await getMateriales();
        setMateriales(fetchedMateriales);

        // Obtener tipos de materiales únicos
        const tiposUnicos = Array.from(
          new Set(fetchedMateriales.map((material) => material.tipo))
        );
        setTiposUnicos(tiposUnicos);

        // Mostrar los tipos de materiales únicos en la consola
        console.log("Tipos de materiales únicos:", tiposUnicos);
      } catch (error) {
        console.error("Error al obtener los materiales:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      <h2>Tipos de Materiales Únicos:</h2>
      <ul>
        {tiposUnicos.map((tipo, index) => (
          <li key={index}>{tipo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
