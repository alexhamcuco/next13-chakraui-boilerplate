//al crear una carpteta tipo, lo que estoy haciendo es entrar solo en la propiedad
//tipo de materiales, 

// {params}, manera de traer parametros en next, funcion de manera similar al hook de react, UseParams, aqui es más directo. 
// http://localhost:3000/materiales/videos -> [tipo] -> params = { tipo: podcasts} ->tipo params.tipo 

// = asignar
// == comparar   "4" == 4
/// === camprar de manera estricta/absoluta, string=string

import React from "react";
import { getMateriales } from "@/app/lib/api";
import Lista from "@/app/Lista/layout";

const Tipo = async ({params}) => {
  const materiales = await getMateriales();
  const materialesFiltrados = materiales.filter( (material)=> material.tipo == params.tipo  ) 

  return <Lista materiales={materialesFiltrados} />;
};

export default Tipo;
