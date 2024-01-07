import React, { useEffect, useState } from "react";
import { Box, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../reviewCard/layout";
import { useTheme } from "@emotion/react";
import { getReviews } from "../lib/api";

function ReviewCardCarousel() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { colors } = useTheme();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(error);
      }
    };

    fetchReviews();
  }, []);

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
          {reviews &&
            reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
        </Carousel>
      </Box>
    </Box>
  );
}

export default ReviewCardCarousel;
