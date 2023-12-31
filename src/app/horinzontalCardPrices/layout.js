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
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
      p="8 "
    >
      <Container
        mt={9}
        textAlign={"center"}
        maxW={{ base: "container.sm", md: "6xl" }}
      >
                <Box p="49">

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
          <Flex direction="column">
            <Text fontSize="8xl" color="orange">
              $20 
            </Text>
            <Text fontSize="sm" mt={2}>
              per month
            </Text>
          </Flex>
          <Flex direction="column">
            <VStack align="start" spacing={4}>
              <Text> 📌 Access to all Exclusive content</Text>
              <Divider />
              <Text>📌Discord channel</Text>
              <Divider />
              <Text>📌 Telegram group</Text>
            </VStack>
          </Flex>
          <Flex direction="column">
            <CustomButton label="Subscribe" />
          </Flex>
        </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default HorizontalCardPrices;
