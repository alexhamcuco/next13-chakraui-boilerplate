import React from 'react'
import CardDetalle from '../cardDetalle/layout'
import { getMateriales } from '../lib/api';
import Lista from '../lista/layout';

 const Materiales = async () => {
    const materiales = await getMateriales();

  return (
    
    <Lista materiales={materiales}/>
  )
}

export default Materiales
