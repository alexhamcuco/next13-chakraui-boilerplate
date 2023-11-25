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
import CustomButton from "../customButton/layout";

const VideoContainer = () => {
  return (
    <Container maxW={{ base: "container.sm", md: "6xl" }} textAlign={"center"}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box>
          <Text color="red" mb={2} display={{ base: "block", md: "none" }}>
            MY MOTIVATION
          </Text>
          <Flex justifyContent={"center"}>
            <Image src="\images\video.png" alt="Imagen de Goku" mb={4} />
          </Flex>
        </Box>
        <Flex direction={"column"}>
          <Text
            color="red"
            mb={2}
            display={{ base: "none", md: "block" }}
            justifyContent={"center"}
          >
            MY MOTIVATION
          </Text>
          <Heading fontSize="2xl" mb={4}>
            A very personal Project
          </Heading>
          <Text mb={6}>
            Welcome to my house,First of all I want to Thank you,
            Thanks for being here! de TODO corazón.❤ and secondly, I hope you like it, mainly because I putted a ton of work, care and
            years into this 😅 jajaja . I would love if you be on more in this very personal project,
            mi casa es su casa. and  your opinion
            is very important. a Big thank you and , vamos allá! 
          </Text>
        </Flex>
      </Flex>
      <CustomButton label="Learn More" />
    </Container>
  );
};

export default VideoContainer;
