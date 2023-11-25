"use client";

import { Box, Text, Flex, Center } from "@chakra-ui/react";

const ReviewCard = ({ review }) => {
  return (
    <Center
      h="15vh"
      // mt="10vh"
      w="100%"
    >
      <Box
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="red.500"
        overflow="hidden"
        boxShadow="lg"
        flexDirection="row"
        display="flex"
      >
        <Flex p="4" alignItems="center" flex="1">
          <Text fontSize="xl" fontWeight="bold">
            "{review.text}"
          </Text>
          <Text ml="4">- {review.author}</Text>
        </Flex>
      </Box>
    </Center>
  );
};

export default ReviewCard;
