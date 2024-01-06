import React from "react";
import { getMateriales } from "../lib/api";
import NewMaterialCarousel from "../newMaterialCarousel/layout"; //     image:

const NewMaterialCarouselLAyout = async ({ tipo }) => {
  const materiales = await getMateriales();

  return <NewMaterialCarousel materiales={materiales} />;
};

export default NewMaterialCarouselLAyout;
