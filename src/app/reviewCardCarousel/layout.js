import React from "react";
import { Box, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";
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
        width="150%"
        height="120%"
        right={{ base: "200px", md: "400px" }}
      />

      {/* Content Layer */}
      <Box position="relative" zIndex={1}>
        <Flex justifyContent="center">
          <Text color="red">REVIEWS</Text>
        </Flex>
        <Carousel>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

export default ReviewCardCarousel;
