"use client";

import {  Flex } from "@chakra-ui/react";
import HorizontalCard from "../horizontalCard/layout";
import Header from "../header/layout";


export const Main = () => {
  return (
    <main>
      <Flex
        direction="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Header/>
      

      </Flex>
      
      <HorizontalCard />
    </main>
  );
};
