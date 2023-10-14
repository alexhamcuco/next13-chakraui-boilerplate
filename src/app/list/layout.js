"use client";

import React from 'react'
import { Grid   } from "@chakra-ui/react";
import CardDetail from '../cardDetail/layout';

const List = ({materiales}) => {
 return (
   <Grid
     templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
     gap={6}
     justifyContent="space-around"
     py={3} // Padding vertical (parte superior e inferior)
     px={{ sm: 12, md: 44 }} // Padding horizontal (lados)
   >
     {materiales.map((material) => (
       <CardDetail material={material} key={material._id} />
     ))}
   </Grid>
 );

}

export default List
