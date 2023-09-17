"use client";

import React from 'react'
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import CardDetalle from '../CardDetalle/layout';

const Lista = ({materiales}) => {
    console.log( materiales)
 return (
   <Grid
     templateColumns="repeat(3, 1fr)"
     gap={6}
     justifyContent="space-around"
     py={3} // Padding vertical (parte superior e inferior)
     px={44} // Padding horizontal (lados)
   >
     {materiales.map((material) => (
       <CardDetalle material={material} key={material._id} />
     ))}
   </Grid>
 );

}

export default Lista
