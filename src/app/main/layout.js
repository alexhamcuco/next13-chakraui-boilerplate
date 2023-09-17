"use client";

import { Heading, Flex } from "@chakra-ui/react";
import Navbar from "../navbar/layout";
import { myImageURL } from "../../imagepaths";

export const Main = () => {
  return (
    <main>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Heading>Install Chakra UI In NextJS 13</Heading>
          <img src={myImageURL} alt="My Image" width="100" height="100" />
      </Flex>
    </main>
  );
};
