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
          START TALKING TODAY
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
            START TALKING TODAY
          </Text>
          <Heading fontSize="2xl" mb={4}>
            Book a lesson now!
          </Heading>
          <Text mb={4}>
            I have been teaching for more than ten years now,
            adults and children, all levels, exams preparations and conversational spanish.
     If you want my help just book a lesson and lets start today!
          </Text>
          <CustomButton label="Book a lesson" onClick={showAlert} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default ConversationZoom;
