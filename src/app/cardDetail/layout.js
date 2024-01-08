"use client";

import { Text, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import Link from "next/link";
import "./CardDetail.css";

const CardDetail = ({ material }) => {
  return (
    <Link href={`/materials/${material.tipo}/${material.urlTitulo}`}>
      <Card>
        <CardBody className="tarjeta" padding={0}>
          <Image src={material.urlImagen} alt="" className="tarjeta-imagen" />
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
