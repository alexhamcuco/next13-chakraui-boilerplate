"use client";

import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react";
import CardDetalle from '../CardDetalle/layout';

const Lista = ({materiales}) => {
    console.log( materiales)
 return (
        < Grid templateColumns='repeat(3, 1fr)' gap={6}  >
            
            {       
                materiales.map((material) => <CardDetalle material={material} key={material._id} />)
            }
        </Grid>
    )

}

export default Lista
