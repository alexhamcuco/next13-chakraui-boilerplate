"use client";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Container,
  // Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PruebaCarrousel = ({ materiales }) => {
  const { colors } = useTheme();
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
        <Carousel infiniteLoop showStatus={false}>
          {materiales.map((material, i) => {
            console.log("material", material);
            return (
              <Card key={i}>
                <CardBody>
                  {/* <Image alt={material.titulo} src={material.urlImagen} /> */}
                  <img src={material.urlImagen} alt="" />
                </CardBody>
                <CardFooter
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* <Text> {material.titulo} </Text> */}
                </CardFooter>
              </Card>
            );
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default PruebaCarrousel;
