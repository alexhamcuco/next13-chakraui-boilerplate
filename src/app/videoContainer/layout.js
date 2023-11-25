"use client";

import {
  Flex,
  Image,
  Text,
  Button,
  Container,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomButton from "../customButton/layout";
import { useTheme } from "@emotion/react";

const VideoContainer = () => {
  const { colors } = useTheme();

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container
        maxW={{ base: "container.sm", md: "6xl" }}
        textAlign={"center"}
      >
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
              Welcome to Spanish with Alex,😊 I build this web to help students
              who want to learn Spanish. This is going to be a organic and
              personal website where your opinion it is going to play a very
              important part. I have putted a ton of work into it, and I very
              exited to share it with you, I hope you enjoy it. Thank you for
              being here! de corazón.❤
            </Text>
          </Flex>
        </Flex>
        <CustomButton label="Learn More" />
      </Container>
    </Box>
  );
};

export default VideoContainer;
