"use client";

import React from "react";
import { Box, Text, Link, FormControl, Input, Checkbox } from "@chakra-ui/react";
import CustomButton from "../customButton/layout";

const Footer = () => {
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
        <FormControl>
          <Input type="email" placeholder="Tu correo electrónico" />
          <CustomButton label="Suscription" />
          <Checkbox
            // isChecked={isChecked}
            // onChange={(e) => setIsChecked(e.target.checked)}
          >
            He leído y acepto la política de privacidad y condiciones de
            subscripción a la newsletter
          </Checkbox>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Footer;
