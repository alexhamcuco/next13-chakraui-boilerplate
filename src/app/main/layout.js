"use client";

import { Heading, Flex } from "@chakra-ui/react";
import Navbar from "../navbar/layout";
import { myImageURL } from "../../imagepaths";
import Tarjeta from "../tarjeta/layout";

export const Main = () => {
  return (
    <main>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Heading>Bienvenid@ a spanish with alex</Heading>
        <Tarjeta />

        <img src={myImageURL} alt="My Image" width="100" height="100" />
      </Flex>
    </main>
  );
};
