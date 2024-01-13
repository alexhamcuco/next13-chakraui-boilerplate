"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const HorizontalCardIlustrations = () => {
  const { colors } = useTheme();
  const imageAndText = [
    { src: "/images/Illustration_1.svg", text: "Discord" },
    { src: "/images/Illustration_2.svg", text: "Telegram" },
    { src: "/images/Illustration_3.svg", text: "Email" },
  ];

  return (
    <Box bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}>
      <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
        <Flex
          mb="8"
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text pb="4" color="red">
            REASONS
          </Text>
          <Heading fontSize="3xl" pb="4">
            Why choose Spanish with Alex
          </Heading>
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <Flex
            width={{ base: "100%", md: "30%" }}
            mb={12}
            direction={"column"}
            alignItems={"center"}
            textAlign={"center"}
            gap={4}
          >
            <Image src={"/images/Illustration_1.svg"} alt="" width={224} />
            <Heading fontSize="2xl">Placeholder</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident porro nobis earum error cum suscipit dignissimos tenetur
              commodi nisi. Alias numquam reiciendis quos quibusdam sunt, odio
              ducimus commodi quas dolore?
            </Text>
          </Flex>
          <Flex
            width={{ base: "100%", md: "30%" }}
            mb={12}
            direction={"column"}
            alignItems={"center"}
            textAlign={"center"}
            gap={4}
          >
            <Image src={"/images/Illustration_2.svg"} alt="" width={224} />
            <Heading fontSize="2xl">Placeholder</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident porro nobis earum error cum suscipit dignissimos tenetur
              commodi nisi. Alias numquam reiciendis quos quibusdam sunt, odio
              ducimus commodi quas dolore?
            </Text>
          </Flex>
          <Flex
            width={{ base: "100%", md: "30%" }}
            direction={"column"}
            alignItems={"center"}
            textAlign={"center"}
            gap={4}
          >
            <Image src={"/images/Illustration_3.svg"} alt="" width={224} />
            <Heading fontSize="2xl">Placeholder</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident porro nobis earum error cum suscipit dignissimos tenetur
              commodi nisi. Alias numquam reiciendis quos quibusdam sunt, odio
              ducimus commodi quas dolore?
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default HorizontalCardIlustrations;
