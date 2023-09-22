"use client";

import React from "react";
import { Text, Card, CardBody, CardFooter } from "@chakra-ui/react";

const Material = ({ material }) => {
  return (
    
      <Card>
        <CardBody padding={0}>
          <img src={material.urlImagen} alt=""  />
        </CardBody>
        <CardFooter
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text> {material.titulo} </Text>
        </CardFooter>
      </Card>
  );
};

export default Material;
