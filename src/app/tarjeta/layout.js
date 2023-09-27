// components/Card.js
"use client"

import { Box, Image, Text, Flex, Center } from "@chakra-ui/react";

const Tarjeta = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Center>
        <Image
          src="/images/banner img.png"
          alt="Imagen"
          boxSize="300px"
        />
      </Center>
      <Flex p="4">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Título de la ficha
          </Text>
          <Text mt="2">Descripción corta de la ficha.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Tarjeta;
