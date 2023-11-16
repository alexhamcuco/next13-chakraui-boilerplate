"use client";

import { Box, Flex, Image, Text, Icon, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Importa los iconos de redes sociales

const ContactCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      maxW="300px"
      margin="0 auto"
      textAlign="center"
    >
      <Flex justifyContent="center">
        <Text color="red">SOCIAL MEDIA</Text>
      </Flex>
      <Text>
        If you want to have access to free materials, and educative pills,
        follow me on social media and join the "familia".
      </Text>
      <Image
        src="/images/contact_img.png"
        alt="Contact Image"
        w="100%"
        h="auto"
      />
      <Text mt={4}>Sígueme en mis redes:</Text>
      <Flex justifyContent="center" mt={2}>
        <Link
          href="https://www.youtube.com/channel/UCbx58EYkaC1yJBxNuOvhDOg"
          isExternal
        >
          <Icon
            as={FaYoutube}
            boxSize={10}
            color="blue.400"
            border="2px solid red" // Agregar borde rojo al icono
            p={2} // Añadir espaciado para el borde
            borderRadius="full" // Mantener borde circular
            mr={2}
          />
        </Link>

        <Link href="https://twitter.com/spanishwithalex" isExternal>
          <Icon
            as={FaTwitter}
            boxSize={10}
            color="blue.400"
            border="2px solid red" // Agregar borde rojo al icono
            p={2} // Añadir espaciado para el borde
            borderRadius="full" // Mantener borde circular
            mr={2}
          />
        </Link>

        <Link href="https://www.facebook.com/spanishwithalex" isExternal>
          <Icon
            as={FaFacebook}
            boxSize={10}
            color="blue.800"
            border="2px solid red" // Agregar borde rojo al icono
            p={2} // Añadir espaciado para el borde
            borderRadius="full" // Mantener borde circular
            mr={2}
          />
        </Link>

        <Link href="https://www.instagram.com/spanishwithalex" isExternal>
          <Icon
            as={FaInstagram}
            boxSize={10}
            color="purple.500"
            border="2px solid red" // Agregar borde rojo al icono
            p={2} // Añadir espaciado para el borde
            borderRadius="full" // Mantener borde circular
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default ContactCard;
