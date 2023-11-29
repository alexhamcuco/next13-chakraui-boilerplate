import React from "react";
import { Flex, Image, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const HorizontalCardIlustrations = () => {
  const { colors } = useTheme();
  const imageAndText = [
    { src: "/images/Illustration_1.svg", text: "Discord" },
    { src: "/images/Illustration_2.svg", text: "Telegram" },
    { src: "/images/Illustration_3.svg", text: "Email" },
  ];

  return (
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
      p="4"
    >
      <Flex
        flexDirection="row"
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
        p="4"
      >
        {imageAndText.map(({ src, text }, index) => (
          <Box key={index} w="100%" p="4">
            <Image
              src={src}
              alt={`Illustration ${index + 1}`}
              w="70%"
              h="auto"
            />
            <Text textAlign="center" mt="2" fontWeight="bold">
              {text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HorizontalCardIlustrations;
