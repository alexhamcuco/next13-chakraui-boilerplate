"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./materialCarousel.css";

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
};

const CardMaterial = ({ material }) => {
  const { colors } = useTheme();

  return (
    <Card
      key={material._id}
      bg={"transparent"}
      borderRadius="0.5rem"
      marginX={{ base: "0", sm: "10px" }}
    >
      <CardHeader
        padding={0}
        borderColor={useColorModeValue(colors.light.border, colors.dark.border)}
        borderWidth="1px 1px 0 1px"
        borderRadius="0.5rem 0.5rem 0 0"
      >
        <Image
          src={material.urlImagen}
          alt=""
          borderRadius="0.5rem 0.5rem 0 0"
        />
      </CardHeader>
      <CardBody
        borderColor={useColorModeValue(colors.light.border, colors.dark.border)}
        borderWidth="0 1px 1px 1px"
        borderRadius="0 0 0.5rem 0.5rem"
      >
        {material.titulo}
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

const NewMaterialCarousel = ({ materiales }) => {
  const { colors } = useTheme();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

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
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: 20,
                  top: 99,
                  borderColor: "#020919",
                  borderWidth: "1px",
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="arrow"
              >
                <ArrowBackIcon color="#020919" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 20,
                  top: 99,
                  borderColor: "#020919",
                  borderWidth: "1px",
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="arrow"
              >
                <ArrowForwardIcon color="#020919" />
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const icon = isSelected ? "●" : "○";
            return (
              <span
                style={{
                  marginLeft: 20,
                  color: "white",
                  cursor: "pointer",
                  color: "red",
                }}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                {icon}
              </span>
            );
          }}
        >
          {materiales.map((material) => {
            return <CardMaterial key={material._id} material={material} />;
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default NewMaterialCarousel;
