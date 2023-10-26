//npm install pure-react-carousel
//npm audit fix

import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MaterialCard from "../materialCard/layout";

const reviews = [
  {
    id: 1,
    text: "latest podcast",
    author: "por SwA",
  },
  {
    id: 2,
    text: "ultimo video",
    author: "María García",
  },
  {
    id: 3,
    text: "ultimo ejercicio gramatica",
    author: "Luis Rodríguez",
  },
];

function MaterialCardCarousel() {
  return (
    <Box>
      <Carousel>
        {reviews.map((review) => (
          <MaterialCard key={review.id} review={review} />
        ))}
      </Carousel>
    </Box>
  );
}

export default MaterialCardCarousel;
