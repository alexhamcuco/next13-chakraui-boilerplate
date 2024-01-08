"use client";

import {
  Flex,
  Image,
  Text,
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
        <Flex direction={{ base: "column", lg: "row" }}>
          <Text
            color="red"
            mb={2}
            display={{ base: "block", md: "none", lg: "none" }}
          >
            HOLA AMIGOS
          </Text>
          <Image
            src="\images\calander_img 2.png"
            alt="Imagen de Alex"
            width={{ base: "inherit", lg: "50%" }}
          />
          <Flex
            direction={"column"}
            pl={{ base: 2, lg: 20 }}
            pr={{ base: 2, lg: 0 }}
            py={{ base: 8, lg: 0 }}
            textAlign={"left"}
          >
            <Text color="red" mb={2} display={{ base: "none", md: "block" }}>
              HOLA AMIGOS
            </Text>
            <Heading fontSize="3xl" mb={4}>
              Your personal Academy.
            </Heading>
            <Text mb={6}>
              Hi! Welcome to
              <strong style={{ fontWeight: "bold" }}>Spanish with Alex </strong>
              😊. I have created this web to{" "}
              <strong style={{ fontWeight: "bold" }}>help</strong> students from
              all countries who want to learn{" "}
              <strong style={{ fontWeight: "bold" }}>Spanish</strong>. Here your
              opinion it is very important . You can learn more in the link. I
              have put a ton of work into it, and I&rsquo;m very excited to
              share it with you. We are going to learn a lot 💪. Thank you for
              being here!
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
