"use client";

import {
  Flex,
  Text,
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { colors } = useTheme();

  return (
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
    >
      <Container
        mt={24}
        textAlign={"center"}
        maxW={{ base: "container.sm", md: "6xl" }}
      >
        <Flex justifyContent={"center"}>
          <Image
            src="/images/banner_img3.png"
            alt="Imagen de Alex"
            width="400"
            height="0"
          />
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          borderColor={useColorModeValue(
            colors.light.border,
            colors.dark.border
          )}
          borderWidth="1px"
          borderRadius={18}
          boxShadow="2xl"
          bg={useColorModeValue(
            colors.light.bgSecondary,
            colors.dark.bgSecondary
          )}
          zIndex={1}
          position="relative"
          top="-20px"
          py={8}
          // px={12}
        >
          <Flex justifyContent={"space-between"} >
            <Flex direction={"column"}>
              <Text fontSize="1xl">Sessions</Text>
              <Text fontSize="6xl">10</Text>
            </Flex>
            <Flex direction={"column"}>
              <Text fontSize="1xl">Lessons</Text>
              <Text fontSize="6xl">200</Text>
            </Flex>
            <Flex direction={"column"}>
              <Text fontSize="1xl">Podcasts</Text>
              <Text fontSize="6xl">100</Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex direction={"column"}>
              <Text fontSize="1xl"> ⭐⭐⭐⭐⭐ 5/5 </Text>
              <Text fontSize="1xl">
                Students give Alex <br /> a good rating. 😊
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
