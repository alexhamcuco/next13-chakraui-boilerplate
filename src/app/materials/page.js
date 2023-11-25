import React from "react";
import { getMateriales } from "../lib/api";
import List from "../list/layout";

const Materials = async () => {
  const materiales = await getMateriales();

  return <List materiales={materiales} />;
};

export default Materials;
