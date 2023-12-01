import React from "react";
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
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
      p="8"
    >
      <Container
        maxW={{ base: "container.sm", md: "6xl" }}
        textAlign={"center"}
        p="4"
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Box>
            <Text color="red" mb={2} display={{ base: "block", md: "none" }}>
              PRESENTATION
            </Text>
            <Flex justifyContent={"center"}>
              <Image
                src="\images\calander_img 2.png"
                alt="Imagen de Alex "
                mb={4}
              />
            </Flex>
          </Box>
          <Flex
            direction={"column"}
            ml={{ base: 0, md: 4 }}
            mt={{ base: 4, md: 0 }}
          >
            <Text
              color="red"
              mb={2}
              display={{ base: "none", md: "block" }}
              justifyContent={"center"}
            >
              PRESENTATION
            </Text>
            <Heading fontSize="2xl" mb={4}>
              Your personal Teacher online.
            </Heading>
            <Text mb={6}>
              Hi! Welcome to{" "}
              <strong style={{ fontWeight: "bold" }}>Spanish with Alex </strong>
              😊 I have created this web to{" "}
              <strong style={{ fontWeight: "bold" }}>help</strong> students from
              all countries who want to learn{" "}
              <strong style={{ fontWeight: "bold" }}>Spanish</strong>. This is a
              website where your opinion it is going to play a very important
              role. I have put a ton of work into it, and I'm very excited to
              share it with you. I hope you like it and that you learn a lot 💪.
              Thank you for being here!
              <span style={{ fontStyle: "italic" }}> de corazón</span> ❤.{" "}
              <strong style={{ fontWeight: "bold" }}>Alex</strong>
            </Text>
            <CustomButton label="Learn More" />
          </Flex>
        </Flex>
        <Flex direction={"column"}></Flex>
      </Container>
    </Box>
  );
};

export default VideoContainer;
