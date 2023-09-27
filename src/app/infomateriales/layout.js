import { getMateriales } from "@/app/lib/api";
import React from "react";

const Info = async ({  }) => {
  const materiales = await getMateriales();
  const material = materiales.find(
    (material) =>
      material.tipo 
  );
  return ( console.log(material));
};

export default Info;
