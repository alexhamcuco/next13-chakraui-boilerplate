"use client";

import React from "react";
import { Text, Card, CardBody, CardFooter } from '@chakra-ui/react'
import './CardDetail.css'; // Asegúrate de importar tu archivo de CSS aquí
import Link from "next/link";


// hay que cambiaar el href para que desde la lista de todos los materiales funcione el link ya que le falta /materiales/..
//al añadir /materiales en la linea 13 pensaba que iba a duplicar /materiales si hacías click desde la seleccion tipo pero no...

const CardDetail = ({material}) => {
  return (
    <Link href= {`/materials/${material.tipo}/${material.urlTitulo}`}>  
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

export default CardDetail;

