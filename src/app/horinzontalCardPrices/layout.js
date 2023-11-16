"use client";

import React from "react";
import {
  Flex,
  Text,
  VStack,
  Divider,
  Button,
  Container,
} from "@chakra-ui/react";
import CustomButton from "../customButton/layout";

const HorizontalCardPrices = () => {
  return (
    <div>
      <Container
        mt={9}
        textAlign={"center"}
        maxW={{ base: "container.sm", md: "6xl" }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="2xl"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex direction="column">
            <Text fontSize="6xl" color="orange">
              $1 for 1 year
            </Text>
            {/* <Text fontSize="sm" mt={2}>
              per month
            </Text> */}
          </Flex>
          <Flex direction="column">
            <VStack align="start" spacing={4}>
              <Text> 📌 Access to exclusive content</Text>
              <Divider />
              <Text>📌Discord channel</Text>
              <Divider />
              <Text>📌 launch price</Text>
            </VStack>
          </Flex>
          <Flex direction="column">
            <CustomButton label="Subscribe" />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default HorizontalCardPrices;
