"use client";

import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  useDisclosure,
  
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <Box>
            <Link href="/">
              <img
                src="/images/logo2PNG2.webp"
                alt="LOGO SWA"
                width="105"
                height="105"
              />
            </Link>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={5}>
              <Menu>
                <Link href="/academy">Academy</Link>
                <Menu>
                  <MenuButton onClick={onOpen}>Materiales</MenuButton>
                  <MenuList alignItems={"center"}>
                    <Link href="/materiales/podcasts">
                      <MenuItem>Podcast</MenuItem>
                    </Link>

                    <Link href="/materiales/videos">
                      <MenuItem>Video</MenuItem>
                    </Link>

                    <Link href="/materiales/gramaticas">
                      <MenuItem>Grammar</MenuItem>
                    </Link>

                    <MenuDivider />

                    <Link href="/materiales">
                      <MenuItem>Ver todos</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Link href="/login">Login</Link>
                <Link href="/shop">Shop</Link>
              </Menu>
            </Stack>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button variant="outline">Get Started</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
