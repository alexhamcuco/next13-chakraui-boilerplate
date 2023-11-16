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
          TUTORING
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
            Start talking now!
          </Heading>
          <Text mb={4}>
            I have been teaching for more than ten years now, time flies, adults, children, all levels, 
            exams preparations and conversational skills, if you want to book a lesson 
            with you can start today!
          </Text>
          <CustomButton label="Book a lesson" onClick={showAlert} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ConversationZoom;
