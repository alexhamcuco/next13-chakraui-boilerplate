import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // Importa los iconos de redes sociales

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
        <Text color="red">Social Media</Text>
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
        <Icon
          as={FaTwitter}
          boxSize={6}
          color="blue.400"
          border="2px solid red" // Agregar borde rojo al icono
          p={2} // Añadir espaciado para el borde
          borderRadius="full" // Mantener borde circular
          mr={2}
        />
        <Icon
          as={FaFacebook}
          boxSize={6}
          color="blue.800"
          border="2px solid red" // Agregar borde rojo al icono
          p={2} // Añadir espaciado para el borde
          borderRadius="full" // Mantener borde circular
          mr={2}
        />
        <Icon
          as={FaInstagram}
          boxSize={6}
          color="purple.500"
          border="2px solid red" // Agregar borde rojo al icono
          p={2} // Añadir espaciado para el borde
          borderRadius="full" // Mantener borde circular
        />
      </Flex>
    </Box>
  );
};

export default ContactCard;
