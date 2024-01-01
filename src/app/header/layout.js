"use client";

import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Container,
  useColorModeValue,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Image from "next/image";

const Header = () => {
  const { colors } = useTheme();
  //windows size
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container
        mt={24}
        textAlign={"center"}
        maxW={{ base: "container.sm", md: "6xl" }}
      >
        <Flex justifyContent={"center"}>
          {width >= 768 ? (
            <Image
              src="/images/banner_img2.png"
              alt="Alex"
              width={800}
              height={200}
              layout="fixed"
            />
          ) : (
            <Image
              src="/images/banner_img3.png"
              alt="Alex"
              width={350}
              height={150}
              layout="fixed"
            />
          )}
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          p={8}
          justifyContent={"space-around"}
          alignItems={"center"}
          borderColor={useColorModeValue(
            colors.light.border,
            colors.dark.border
          )}
          borderWidth="1px"
          borderRadius={18}
          boxShadow="2xl"
          bg={useColorModeValue(
            colors.light.bgSecondary,
            colors.dark.bgSecondary
          )}
          zIndex={1}
          position="relative"
          top="-20px"
          py={8}
        >
          <Flex gap={{ base: 9 }} width={"60%"} justifyContent={"space-around"}>
            <Flex direction={"column"}>
              <Text fontSize={{ base: "1xl", sm: "1xl"}}>Sessions</Text>
              <Text fontSize={{ base: "4xl", sm: "6xl"}}>10</Text>
            </Flex>
            <Flex direction={"column"}>
              <Text fontSize={{ base: "1xl", sm: "1xl"}}>Lessons</Text>
              <Text fontSize={{ base: "4xl", sm: "6xl"}}>200</Text>
            </Flex>
            <Flex direction={"column"}>
              <Text fontSize={{ base: "1xl", sm: "1xl"}}>Podcasts</Text>
              <Text fontSize={{ base: "4xl", sm: "6xl"}}>100</Text>
            </Flex>
          </Flex>
          <Divider
            display={{ base: "block", md: "none" }}
            borderColor={useColorModeValue(
              colors.light.border,
              colors.dark.border
            )}
            borderWidth="1px"
            height="auto"
            mt={2}
            mb={3}
          />
          <Flex>
            <Flex direction={"column"}>
              <Text fontSize="1xl"> ⭐⭐⭐⭐⭐ 5/5 </Text>
              <Text fontSize="1xl">
                Students give Alex an <br /> average rating of 5 stars.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
