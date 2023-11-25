import React, { useState } from "react";
import { Box, Text, Link, FormControl, Input, Button } from "@chakra-ui/react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const isValidEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const userEmail = { email };

    try {
      // Make the request to your API
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userEmail),
      });

      // Clear the email field
      setEmail("");
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle errors if necessary
    }

    // Show success message regardless of success or error
    setShowMessage(true);

    // Hide the message after 4 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  }

  return (
    <Box bg="gray.700" p="4" mt="8" textAlign="center">
      <Text fontSize="sm" mt="2">
        <Link href="/legal-terms">Legal Terms</Link>
      </Text>
      <Text fontSize="sm" mt="2">
        Subscribe to our newsletter:
      </Text>
      <Box display="inline-block" maxW="300px" mx="auto" p="4">
        {showMessage && (
          <Box
            bgColor="green"
            color="white"
            p="2"
            mt="2"
            borderRadius="md"
            textAlign="center"
          >
            <Text fontSize="sm">Email sent successfully!</Text>
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <Button type="submit" colorScheme="red" isDisabled={!isValidEmail()}>
            Subscribe for FREE
          </Button>
          {/* <button
            type="submit"
            disabled={!!email}
            style={{
              marginLeft: "4px",
              border: "2px solid red",
              color: "red",
              width: "auto",
              cursor: "pointer",
              backgroundColor: "white",
              padding: "12px 16px", // Added padding here
              borderRadius: "4px",
              transition: "background-color 0.3s ease",
            }}
          >
            Subscribe for FREE
          </button> */}
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
