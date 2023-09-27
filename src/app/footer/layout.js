// components/Footer.js
"use client"

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.700" p="4" mt="8">
      <Text textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </Text>
    </Box>
  );
};

export default Footer;
