"use client";

import React from "react";
import { Text, Card, CardBody, CardFooter } from '@chakra-ui/react'
import './Carddetalle.css'; // Asegúrate de importar tu archivo de CSS aquí
import Link from "next/link";

const CardDetalle = ({material}) => {
  return (
    <Link href= {`${material.tipo}/${material.urlTitulo}`}>
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
    </Link>
  );
};

export default CardDetalle;
