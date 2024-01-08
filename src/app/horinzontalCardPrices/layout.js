"use client";

import {
  Flex,
  Text,
  VStack,
  Divider,
  Container,
  useColorModeValue,
  Box,
  Heading,
} from "@chakra-ui/react";
import CustomButton from "../customButton/layout";
import { useTheme } from "@emotion/react";

const HorizontalCardPrices = () => {
  const { colors } = useTheme();

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
        <Flex mb="8" direction={"column"} alignItems={"center"}>
          <Text mb="4" color="red">
            PRICING
          </Text>
          <Heading fontSize="3xl">Limited time only.</Heading>
        </Flex>
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
          p="8"
        >
          <Flex direction="column" alignItems={"center"}>
            <Text fontSize="8xl" color="orange">
              $20
            </Text>
            <Text fontWeight="bold" mt={2}>
              per month
            </Text>
          </Flex>
          <Flex my={{ base: "12", md: "0" }} direction="column">
            <VStack align="start" spacing={4}>
              <Text> 📌 Access to all Exclusive content</Text>
              <Divider
                borderColor={useColorModeValue(
                  colors.light.border,
                  colors.dark.border
                )}
                borderWidth="1px"
                height="auto"
              />
              <Text>📌Discord channel</Text>
              <Divider
                borderColor={useColorModeValue(
                  colors.light.border,
                  colors.dark.border
                )}
                borderWidth="1px"
                height="auto"
              />
              <Text>📌 Telegram group</Text>
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
