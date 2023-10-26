import { Box, Image, Text, Flex, Center, Button } from "@chakra-ui/react";

const HorizontalCard = () => {
  return (
    <Center h="50vh" w="100%">
      {" "}
      {/* Centrar la tarjeta horizontalmente y ajustar la altura */}
      <Box
        maxW="100%" /* Establecer el ancho de la tarjeta en 50% */
        borderWidth="1px"
        borderRadius="lg"
        borderColor="red.500"
        overflow="hidden"
        boxShadow="lg" /* Agregar una sombra para mejorar la apariencia */
        flexDirection="row" /* Alinear los elementos horizontalmente */
      >
        <Image
          src="/images/banner_img.png"
          alt="Imagen de Alex"
          width="300"
          height="100"
        />
        <Flex p="4" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Card Title
          </Text>
          <Text ml="4">Join el club!</Text>
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
            Button
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default HorizontalCard;
