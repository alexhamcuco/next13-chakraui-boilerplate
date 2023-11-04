"use client";

import {  Flex, Image, Text, Button, Container, Heading } from "@chakra-ui/react";
import CustomButton from "../customButton/layout";

const showAlert = () => {
  alert("¡Hiciste clic en el botón!");
};

const ConversationZoom = () => {
  return (
    <Container
      mt={24}
      textAlign={"center"}
      maxW={{ base: "container.sm", md: "6xl" }}
    >
      <Flex direction={{ base: "column", md: "row-reverse" }}>
        <Text color="red" mb={2} display={{ base: "block", md: "none" }}>
          Enunciado
        </Text>
        <Flex justifyContent={"center"}>
          <Image
            src="images\calander_img.png"
            alt="Alex talking with student"
          />
        </Flex>
        <Flex direction={"column"} p="9">
          <Text
            color="red"
            mb={2}
            display={{ base: "none", md: "block" }}
            justifyContent={"center"}
          >
            Enunciado
          </Text>
          <Heading fontSize="2xl" mb={4}>
            Spanish with Alex
          </Heading>
          <Text mb={4}>
            Welcome to Spanish with Alex, your Spanish Academy Online. Here you
            can book personalised classes, check out my courses and study using
            my own and exclusive materials.
          </Text>
          <CustomButton label="mostrar alerta" onClick={showAlert} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ConversationZoom;
