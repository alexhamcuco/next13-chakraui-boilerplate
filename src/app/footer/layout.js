"use client";

import React, { useState } from "react";
import { Box, Text, Link, FormControl, Input } from "@chakra-ui/react";
import CustomButton from "../customButton/layout";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("")

  async function handleSubmit (e) {
    e.preventDefault()
    const userEmail = {email}
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userEmail),
    });
  }
  return (
    <Box bg="gray.700" p="4" mt="8" textAlign="center">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Spanish with Alex. All rights
        reserved.
      </Text>
      <Text fontSize="sm" mt="2">
        <Link href="/terminos-legales">Términos Legales</Link>
      </Text>
      <Text fontSize="sm" mt="2">
        Suscríbete a nuestro boletín:
      </Text>
      <Box display="inline-block" maxW="300px" mx="auto">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input  value={email} onChange={ (e)=>setEmail(e.target.value) } type="email" placeholder="Tu correo electrónico" />
            {/* <CustomButton label="Suscription" /> */}
          </FormControl>
          <button type= "submit" >
             suscripcion

          </button>
        </form>
      </Box>
    </Box>
  );
};

export default Footer;
