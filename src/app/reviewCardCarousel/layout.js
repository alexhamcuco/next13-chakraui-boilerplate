//npm install pure-react-carousel
//npm audit fix

import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../reviewCard/layout";

const reviews = [
  {
    id: 1,
    text: "⭐⭐⭐⭐⭐ 5/5 Excelente servicio al cliente. ¡Recomiendo totalmente!",
    author: "Juan Pérez",
  },
  {
    id: 2,
    text: "⭐⭐⭐⭐⭐ 5/5 Las reseñas son una excelente manera de compartir opiniones.",
    author: "María García",
  },
  {
    id: 3,
    text: "⭐⭐⭐⭐⭐ 5/5 Este producto cambió mi vida. ¡No puedo vivir sin él!",
    author: "Luis Rodríguez",
  },
];

function ReviewCardCarousel() {
  return (
    <Box>
      <Carousel>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
    </Box>
  );
}

export default ReviewCardCarousel;
