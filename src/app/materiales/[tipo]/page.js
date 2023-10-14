
import React from "react";
import { getMateriales } from "@/app/lib/api";
import Lista from "@/app/Lista/layout";

const Tipo = async ({params}) => {
  const materiales = await getMateriales();
  const materialesFiltrados = materiales.filter( (material)=> material.tipo == params.tipo  ) 

  return <Lista materiales={materialesFiltrados} />;
};

export default Tipo;
