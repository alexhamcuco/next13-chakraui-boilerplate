"use client";


import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

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
import MainDiv from "@/maindiv";
import Info from "../infomateriales/layout";

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
                      <MenuItem>Podcasts</MenuItem>
                    </Link>

                    <Link href="/materiales/videos">
                      <MenuItem>Videos</MenuItem>
                    </Link>

                    <Link href="/materiales/gramaticas">
                      <MenuItem>Gramatica</MenuItem>
                    </Link>

                    <MenuDivider />

                    <Link href="/materiales">
                      <MenuItem>Ver todos</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Link href="/login">Login</Link>
                <Link href="/shop">Shop</Link>

                <Popover>
                  <PopoverTrigger>
                   
                    <Button
                      className="hamburger"
                      _hover={{ bg: "transparent" }}
                    >
                      <span>M</span>
                    </Button>

                  </PopoverTrigger>

                  <PopoverContent>

                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Menu</PopoverHeader>
                    <PopoverBody>
                     <Info/>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
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
