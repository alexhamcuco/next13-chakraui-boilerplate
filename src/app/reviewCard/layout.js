"use client";

import { Box, Text, Flex, Center, useColorModeValue, Container } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const ReviewCard = ({ review }) => {
      const { colors } = useTheme();

  return (
   
      <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>

      <Box
        mx="15"
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="red.500"
        overflow="hidden"
        boxShadow="lg"
        flexDirection="row"
        display="flex"
        bg={useColorModeValue(
          colors.light.bgTranspLight,
          colors.dark.bgTranspDark
        )}
      >
        <Flex p="4" alignItems="center" flex="1">
          <Text fontSize="xl" fontWeight="bold">
            &quot; {review.text}&quot;
          </Text>
          <Text ml="4">- {review.author}</Text>
        </Flex>
      </Box>
      </Container>
  );
};

export default ReviewCard;
