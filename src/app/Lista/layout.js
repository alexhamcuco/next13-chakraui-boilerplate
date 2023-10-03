"use client";

import React from "react";
import { Grid } from "@chakra-ui/react";
import CardDetalle from "../CardDetalle/layout";

const Lista = ({ materiales }) => {
  console.log("materiales en Lista:", materiales);
  return (
    <Grid
      templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
      gap={6}
      justifyContent="space-around"
      py={3} // Padding vertical (parte superior e inferior)
      px={{ sm: 12, md: 44 }} // Padding horizontal (lados)
    >
      {materiales.map((material) => (
        <CardDetalle material={material} key={material._id} />
      ))}
    </Grid>
  );
};

export default Lista;
