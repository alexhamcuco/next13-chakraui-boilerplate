"use client";

import React from "react";
import { Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";


const HorizontalCardIlustrations = () => {
  const { colors } = useTheme();
  const imageSources = [
    "/images/Illustration_1.svg",
    "/images/Illustration_2.svg",
    "/images/Illustration_3.svg",
  ];

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Flex
        flexDirection="row" // Alinea las imágenes horizontalmente
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        justifyContent="space-around"
        alignItems="center"
        maxW="700px"
        mx="auto"
        mt="40px"
        mb="40px"
      >
        {imageSources.map((imageSource, index) => (
          <Box key={index} w="100%">
            <Image
              src={imageSource}
              alt={`Illustration ${index + 1}`}
              w="70%"
              h="auto"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HorizontalCardIlustrations;
