"use client";

import React from "react";
import { Card, CardBody, Text, CardFooter } from "@chakra-ui/react";
const CardDetalle = ({material}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <img
            src="https://www.spanishwithalex.com/images/cards/rutinasdiarias.jpg"
            alt=""
          />
        </CardBody>
        <CardFooter>
          <Text> {material.titulo} </Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardDetalle;
