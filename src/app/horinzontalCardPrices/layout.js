import { Flex, Text, VStack, Divider, Button, Container } from "@chakra-ui/react";
import React from "react";

const HorizontalCardPrices = () => {
  return (
    <div>
      <Container
        mt={9}
        textAlign={"center"}
        maxW={{ sm: "container.sm", md: "6xl" }}
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
              $20
            </Text>
            <Text fontSize="sm" mt={2}>
              per month
            </Text>
          </Flex>
          <Flex direction="column">
            <VStack align="start" spacing={4}>
              <Text> 📌 This is item 1</Text>
              <Divider />
              <Text>📌This is item 2</Text>
              <Divider />
              <Text>📌 This is item 3</Text>
            </VStack>
          </Flex>
          <Flex direction="column">
            <Button
              ml="4"
              border="2px solid red"
              color="red"
              borderRadius="full"
              _hover={{
                bg: "red.500",
                color: "white",
              }}
            >
              Button
            </Button>
            cancel anytime
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default HorizontalCardPrices;
