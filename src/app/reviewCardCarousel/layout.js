//npm install pure-react-carousel
//npm audit fix
"use client";

import React from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../reviewCard/layout";
import { useTheme } from "@emotion/react";


const reviews = [
  {
    id: 1,
    text: "⭐⭐⭐⭐⭐ 5/5  Método excelente. ¡Recomiendo totalmente!",
    author: "Michael Knight",
  },
  {
    id: 2,
    text: "⭐⭐⭐⭐⭐ 5/5 Las reseñas son una excelente manera de compartir opiniones.",
    author: "María García",
  },
  {
    id: 3,
    text: "⭐⭐⭐⭐⭐ 5/5 Este producto cambió mi vida. ¡No puedo vivir sin él!",
    author: "Luis Rodríguez",
  },
];

function ReviewCardCarousel() {
    const { colors } = useTheme();

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Flex justifyContent="center">
        <Text color="red">REVIEWS</Text>
      </Flex>
      <Carousel>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
    </Box>
  );
}

export default ReviewCardCarousel;
