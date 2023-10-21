"use client";

import {
  Flex,
  Heading,
  Text,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Container mt={24} textAlign={"center"} maxW="6xl">
      <Heading mb={4}>Welcome to Spanish with Alex</Heading>
      <Flex justifyContent={"center"}>
        <Image
          src="/images/banner_img.png"
          alt="Imagen de Alex"
          width="400"
          height="0"
        />
      </Flex>
      <Flex
        direction={{ sm: "column", md: "row" }}
        justifyContent={"space-between"}
        borderWidth={1}
        borderRadius={18}
        boxShadow="2xl"
        bg={useColorModeValue("gray.100", "gray.700")}
        zIndex={1}
        position="relative"
        top="-20px"
        py={8}
        px={12}
      >
        <Flex justifyContent={"space-between"}>
          <Flex direction={"column"} gap={4} mr={24}>
            <Text fontSize="1xl">Sessions</Text>
            <Text fontSize="6xl">10</Text>
          </Flex>
          <Flex direction={"column"} gap={4} mr={24}>
            <Text fontSize="1xl">Lessons</Text>
            <Text fontSize="6xl">200</Text>
          </Flex>
          <Flex direction={"column"} gap={4}>
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
  );
};

export default Header;
