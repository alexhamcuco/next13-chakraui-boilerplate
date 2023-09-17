"use client";

import React from "react";
import { Card, CardBody, Text, CardFooter } from "@chakra-ui/react";
const CardDetalle = ({material}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <img src={material.urlImagen} alt="" />
        </CardBody>
        <CardFooter>
          <Text> {material.titulo} </Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardDetalle;
