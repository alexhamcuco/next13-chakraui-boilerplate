import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Container,
  Avatar,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const ReviewCard = ({ review }) => {
  const { colors } = useTheme();

  return (
    <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
      <Box
        mx="15"
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="red.500"
        overflow="hidden"
        boxShadow="lg"
        bg={useColorModeValue(
          colors.light.bgTranspLight,
          colors.dark.bgTranspDark
        )}
      >
        {/* Stars Section */}
        <Flex
          p="4"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid red.500"
        >
          <Text fontSize="xl" fontWeight="bold">
            &quot;{review.text}&quot;
          </Text>
        </Flex>

        {/* Reviews Section */}
        <Flex p="4" alignItems="center">
          <Avatar
            size="lg"
            src={review.profilePicture}
            alt="Foto de perfil"
            mr={4}
            border="2px solid red"
          />
          <Box>
            <Text mt={2} color="gray.500">
              - {review.author}
            </Text>
            <Text fontSize="1xl"> ⭐⭐⭐⭐⭐ </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default ReviewCard;
