"use client";

import {
  Flex,
  Image,
  Text,
  Button,
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";

const VideoContainer = () => {
  return (
    <Container maxW={{ base: "container.sm", md: "6xl" }} textAlign={"center"}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box>
          <Text color="red" mb={2} display={{ base: "block", md: "none" }}>
            Enunciado
          </Text>
          <Flex justifyContent={"center"}>
            <Image src="\images\video.png" alt="Imagen de Goku" mb={4} />
          </Flex>
        </Box>
        <Flex direction={"column"}>
          <Text
            color="red"
            mb={2}
            display={{ base: "none", md: "inherit" }}
            justifyContent={"center"}
          >
            Enunciado
          </Text>
          <Heading fontSize="2xl" mb={4}>
            Spanish with Alex
          </Heading>
          <Text mb={6}>
            Welcome to Spanish with Alex, your Spanish Academy Online. Here you
            can book personalised classes, check out my courses and study using
            my own and exclusive materials.
          </Text>
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
            Learn more
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default VideoContainer;
