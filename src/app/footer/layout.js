"use client";

import { useState } from "react";
import {
  Box,
  Text,
  Link,
  FormControl,
  Input,
  Button,
  Spinner,
} from "@chakra-ui/react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const userEmail = { email };

    try {
      setLoading(true);

      // Make the request to your API
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userEmail),
      });

      // Clear the email field
      setEmail("");
      setShowMessage(true);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setLoading(false); // Desactivar el spinner 
      return;
    }

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <Box bg="gray.700" p="4" mt="8" textAlign="center">
      <Text fontSize="sm" mt="2">
        <Link href="/legal-terms">Legal Terms</Link>
      </Text>
      <Text fontSize="md" mt="2">
        Subscribe to our newsletter and receive tips, exclusive discounts and
        flash sales:
      </Text>
      <Box display="inline-block" maxW="300px" mx="auto" p="4">
        {showMessage && (
          <Box
            mb="2"
            bgColor="green"
            color="white"
            p="2"
            mt="2"
            borderRadius="md"
            textAlign="center"
          >
            <Text fontSize="sm">Email sent! Check your inbox.</Text>
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl mb="2">
            <Input
              value={email}
              onChange={(e) => {
                handleEmailChange(e);
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Your email address"
              p="2"
            />
          </FormControl>
          {email && !isValidEmail() && (
            <Text fontSize="sm" color="red">
              Please enter a valid email address
            </Text>
          )}

          <Button
            mb={4}
            type="submit"
            colorScheme="red"
            color="red"
            _hover={{
              bg: "red.500",
              color: "white",
            }}
            isDisabled={!isValidEmail()}
            isLoading={loading}
            loadingText="Doing some magic..."
            variant="outline"
            spinner={<Spinner size="sm" />}
            spinnerPlacement="end"
          >
            Subscribe
          </Button>
        </form>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Spanish with Alex. All rights
          reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
