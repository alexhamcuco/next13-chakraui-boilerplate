import { getMateriales } from '@/app/lib/api'
import React from 'react'
import Material from './page'

const layout =  async ({params}) => {
  const materiales = await getMateriales() 
  const material = materiales.find( (material)=> material.tipo === params.tipo && material.urlTitulo === params.material)
    return  (
            <Material material={material}   />

    )
}

export default layout
