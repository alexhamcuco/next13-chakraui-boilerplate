import React from 'react'
import Nav from '../navbar/layout'
import { getMateriales } from '../lib/api'

const NavbarLayout = async () => {
 const materiales = await getMateriales()
  
 
 return (
<Nav materiales={materiales}/>
  )
}

export default NavbarLayout