"use client";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "@chakra-ui/react";

const NewMaterialCarousel = ({ materiales }) => {
  const { colors } = useTheme();
  const [isSmallScreen] = useMediaQuery("(max-width: 1200px)");

  // Calculate the number of elements to show based on screen size
  const elementsToShow = isSmallScreen ? 1 : 3;

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
        <Flex
          mb="8"
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text mb="4" color="red">
            THE LATESTS CONTENTS
          </Text>
          <Heading fontSize="3xl">Enjoy juice and fresh materials!</Heading>
        </Flex>
        <Carousel
          infiniteLoop
          showStatus={false}
          showArrows={!isSmallScreen}
          showThumbs={false}
          centerMode={!isSmallScreen}
          centerSlidePercentage={100 / elementsToShow}
          emulateTouch={!isSmallScreen}
          swipeScrollTolerance={!isSmallScreen ? 2 : 10}
          showSides={!isSmallScreen}
          selectedItem={0}
          interval={5000}
        >
          {materiales.map((material) => {
            return (
              <Card key={material._id}>
                <CardBody padding={"29px 29px 0 29px"}>
                  <img src={material.urlImagen} alt="" />
                </CardBody>
                <CardFooter
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Add additional information if needed */}
                </CardFooter>
              </Card>
            );
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default NewMaterialCarousel;
