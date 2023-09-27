

import { useMediaQuery } from "@chakra-ui/react";

useMediaQuery;

function MainDiv() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  return (
  console.log(isLargerThanMd)
  );
}

export default MainDiv;

