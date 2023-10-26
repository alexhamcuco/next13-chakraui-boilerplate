"use client";

import { Flex } from "@chakra-ui/react";

import NavbarLayout from "../navbarLayout/layout";
import Header from "../header/layout";
import HorizontalCard from "../horizontalCard/layout";
import VideoContainer from "@/app/videoContainer/layout";
import HorizontalCardPrices from "../horinzontalCardPrices/layout";
import ConversationZoomComponent from "../conversationZoomComponent/layout";
import ReviewCardCarousel from "../reviewCardCarousel/layout";
import MaterialCardCarousel from "../materialCardCarousel/layout";
import HorizontalCardIlustrations from "../horizontalCardIlustrations/layout";
import ContactCard from "../contactCard/layout";

export const Main = () => {
  return (
    <Flex direction="column">
      <NavbarLayout />
      <Header />
      <HorizontalCard />
      <VideoContainer />
      <HorizontalCardPrices />
      <ConversationZoomComponent />
      <ReviewCardCarousel />
      <HorizontalCardIlustrations />

      <MaterialCardCarousel />
      <ContactCard />
    </Flex>
  );
};
