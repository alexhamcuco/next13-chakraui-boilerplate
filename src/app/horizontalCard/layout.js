import { Box, Image, Text, Flex, Center, Button } from "@chakra-ui/react";

const HorizontalCard = () => {
  return (
  
    <Center h="50vh" w="100%"> {/* Centrar la tarjeta horizontalmente y ajustar la altura */}
      <Box
        maxW="50%" /* Establecer el ancho de la tarjeta en 50% */
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg" /* Agregar una sombra para mejorar la apariencia */
        flexDirection="row" /* Alinear los elementos horizontalmente */
      >
        <Flex p="4" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Card Title
          </Text>
          <Text ml="4">Join el club!</Text>
          <Button
            ml="4"
            bg="red.500"
            color="white"
            borderRadius="full"
            _hover={{
              bg: "red.600",
            }}
          >
            Button
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default HorizontalCard;
