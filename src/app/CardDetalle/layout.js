"use client";

import React from "react";
import { Text, Card, CardBody, CardFooter } from '@chakra-ui/react'
import './Carddetalle.css'; // Asegúrate de importar tu archivo de CSS aquí

const CardDetalle = ({material}) => {
  return (
    <div>
      <Card>
        <CardBody className="tarjeta" padding={0}>
          {" "}
          <img src={material.urlImagen} alt="" className="tarjeta-imagen" />
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
    </div>
  );
};

export default CardDetalle;
