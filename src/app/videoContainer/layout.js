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
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container
        mt={16}
        maxW={{ base: "container.sm", md: "6xl" }}
        textAlign={"center"}
      >
        <Flex direction={{ base: "column", md: "row"}}>
          <Text color="red" mb={2} display={{ base: "block", md: "none" }}>
            HOLA AMIGOS
          </Text>
          <Image
            src="\images\calander_img 2.png"
            alt="Imagen de Alex"
            width={{ base: "inherit", md: "50%" }}
          />
          <Flex
            direction={"column"}
            pl={{ base: 2, md: 20 }}
            pr={{ base: 2, md: 0 }}
            py={{ base: 8, md: 0 }}
            textAlign={"left"}
          >
            <Text color="red" mb={2} display={{ base: "none", md: "block" }}>
              HOLA AMIGOS
            </Text>
            <Heading fontSize="3xl" mb={4}>
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
              role. I have put a ton of work into it, and I&rsquo;m very excited
              to share it with you. I hope you like it and that you learn a lot
              💪. Thank you for being here!
              <span style={{ fontStyle: "italic" }}> de corazón</span> ❤.{" "}
              <strong style={{ fontWeight: "bold" }}>Alex</strong>
            </Text>
            <Box>
              <CustomButton label="Learn More" />
              {/* <Button colorScheme="blue">Button</Button> */}
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default VideoContainer;
