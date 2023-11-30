import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MaterialCard from "../materialCard/layout";
import { useTheme } from "@emotion/react";

const reviews = [
  {
    id: 1,
    text: "latest podcast ultimo ejercicio gramatica",
    author: "por SwA",
  },
  {
    id: 2,
    text: "ultimo video",
    author: "María García",
  },
  {
    id: 3,
    text: "ultimo ejercicio gramatica",
    author: "Luis Rodríguez",
  },
];

function MaterialCardCarousel() {
  const { colors } = useTheme();

  return (
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
      position="relative"
    >
      {/* Background Image Layer */}
      <Image
        src="/images/reviewd_shape.svg"
        alt="Shape bubble"
        zIndex={1}
        position="absolute"
        top={0}
        width="100%"
        height="100%"
        left={{ base: "150px", md: "300px" }}
        transform="rotateY(180deg)"
      />

      {/* Content Layer */}
      <Container
        mt={14}
        textAlign={"center"}
        maxW={{ base: "container.sm", md: "6xl" }}
        zIndex={2}
        position="relative"
      >
        <Flex justifyContent="center">
          <Text color="red">LATEST CONTENT</Text>
        </Flex>
        <Text>Enjoy fresh materials!</Text>
        <Carousel>
          {reviews.map((review) => (
            <MaterialCard key={review.id} review={review} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

export default MaterialCardCarousel;
