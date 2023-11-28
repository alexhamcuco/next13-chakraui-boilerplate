"use client";

import React from "react";
import {
  Flex,
  Text,
  VStack,
  Divider,
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import CustomButton from "../customButton/layout";
import { useTheme } from "@emotion/react";

const HorizontalCardPrices = () => {
  const { colors } = useTheme();

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
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
          bg={useColorModeValue(
            colors.light.bgSecondary,
            colors.dark.bgSecondary
          )}
          borderColor={useColorModeValue(
            colors.light.border,
            colors.dark.border
          )}
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
    </Box>
  );
};

export default HorizontalCardPrices;
