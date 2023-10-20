import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const ConversationZoomComponent = () => {
  return (
    <Box p="43">
      <Flex justifyContent="center">
        <Flex
          w="50%"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "50%" }} pl={{ base: "0", md: "4" }}>
            <Flex justifyContent="center">
              <Text color="red">Enunciado</Text>
            </Flex>
            <Text>
              Welcome to Spanish with Alex, your Spanish Academy Online. Here
              you can book personalised classes, check out my courses and study
              using my own and exclusive materials.
            </Text>
            <Flex justifyContent="center">
              <Button
                ml="4"
                border="2px solid red"
                color="red"
                borderRadius="full"
                _hover={{
                  bg: "red.500",
                  color: "white",
                }}
              >
                Book a lesson
              </Button>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Flex>
              <Image
                src="images\calander img.png"
                alt="Alex talking with student"
              />
            </Flex>
          </Box> 
        </Flex>
      </Flex>
    </Box>
  );
};

export default ConversationZoomComponent;
