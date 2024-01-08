import React, { useEffect, useState } from "react";
import { Box, Text, Flex, useColorModeValue, Image, Container } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../reviewCard/layout";
import { useTheme } from "@emotion/react";
import { getReviews } from "../lib/api";
import { useMediaQuery } from "@chakra-ui/react";


function ReviewCardCarousel() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { colors } = useTheme();
  const [isSmallScreen] = useMediaQuery("(max-width: 1200px)");

  // Calculate the number of elements to show based on screen size
  const elementsToShow = isSmallScreen ? 1 : 3;

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
      <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
        
        <Box position="relative" zIndex={1}>
          <Flex justifyContent="center">
            <Text color="red">REVIEWS</Text>
          </Flex>
          <Carousel
            infiniteLoop
            showStatus={false}
            showArrows={!isSmallScreen}
            showThumbs={false}
            centerMode={!isSmallScreen}
            emulateTouch={!isSmallScreen}
            swipeScrollTolerance={!isSmallScreen ? 2 : 10}
            centerSlidePercentage={100 / elementsToShow}
            showSides={!isSmallScreen}
            selectedItem={0}
            interval={5000}
          >
            {reviews &&
              reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

export default ReviewCardCarousel;
