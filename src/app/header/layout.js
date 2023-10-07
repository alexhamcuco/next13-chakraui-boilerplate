"use client"

import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <div>
      <Heading>Welcome to Spanish with Alex</Heading>
      <Flex justifyContent={"center"}>
        <Image
          src="/images/banner_img.png"
          alt="Imagen de Alex"
          width="300"
          height="100"
        />
      </Flex>
      <Flex
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-around"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg" /* Agregar una sombra para mejorar la apariencia */
      >
        <Flex justifyContent="space-around" alignItems="center">
          <Flex direction="column">
            <Text fontSize="1xl">Sessions</Text>
            <Text fontSize="6xl">10</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="1xl">Lessons</Text>
            <Text fontSize="6xl">200</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="1xl">Podcasts</Text>
            <Text fontSize="6xl">100</Text>
          </Flex>
        </Flex>

        <Flex justifyContent={{ sm: "center"  }} alignItems="center">
          <Flex direction="column">
            <Text fontSize="1xl">😊 4.9/5</Text>
            <Text fontSize="1xl">
              Students give Alex <br /> a good rating
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Header