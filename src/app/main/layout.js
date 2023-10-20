"use client";

import {  Flex } from "@chakra-ui/react";
import HorizontalCard from "../horizontalCard/layout";
import Header from "../header/layout";
import VideoContainer from "@/videoContainer/layout";
import HorizontalCardPrices from "../horinzontalCardPrices/layout";
import ConversationZoomComponent from "../conversationZoomComponent/layout";
import CarouselReviewsComponent from "../carouselReviewsComponent/layout";


export const Main = () => {
  return (
    <main>
      <Flex
        direction="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Header/>
        

      </Flex>
      
      <HorizontalCard />
      <VideoContainer/>
      <HorizontalCardPrices/>
      <ConversationZoomComponent/>
      <CarouselReviewsComponent/>
    </main>
  );
};
