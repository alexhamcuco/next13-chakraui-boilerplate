//npm install pure-react-carousel
//npm audit fix

import { Container, Flex, Text, Box,  useColorModeValue } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MaterialCard from "../materialCard/layout";
import { useTheme } from "@emotion/react";

const reviews = [
  {
    id: 1,
    text: "latest podcast",
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
  const {colors} = useTheme()

  return (
        <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>

    <Container
      mt={14}
      textAlign={"center"}
      maxW={{ base: "container.sm", md: "6xl" }}
    >
      <Flex justifyContent="center">
        <Text color="red">LATEST CONTENT</Text>
      </Flex>
      <Text>Enjoy the latest content now!</Text>
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
