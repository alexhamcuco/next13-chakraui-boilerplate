"use client";

import { Box, Text, Flex, Center, useColorModeValue } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const ReviewCard = ({ review }) => {
      const { colors } = useTheme();

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
        bg={useColorModeValue(
          colors.light.bgTranspLight,
          colors.dark.bgTranspDark
        )}
      >
        <Flex p="4" alignItems="center" flex="1">
          <Text fontSize="xl" fontWeight="bold">
            {review.text}
          </Text>
          <Text ml="4">- {review.author}</Text>
        </Flex>
      </Box>
    </Center>
  );
};

export default ReviewCard;
