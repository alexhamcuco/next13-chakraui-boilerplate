import React from "react";
import { getMateriales } from "../lib/api";
import Lista from "../Lista/layout";

const Materiales = async () => {
  const materiales = await getMateriales();

  return <Lista materiales={materiales} />;
};

export default Materiales;
