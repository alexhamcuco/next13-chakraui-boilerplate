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


export default function Nav({materiales}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen } = useDisclosure();
    const uniqueTypes = [
      ...new Set(materiales.map((material) => material.tipo)),
    ];

  


      


  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
        <Box>
          <Link href="/">
            <img
              src="/images/logo2PNG2.png"
              alt="LOGO Spanish with Alex"
              width="105"
              height="105"
            />
          </Link>
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"} spacing={5}>
            <Menu>
              <Link href="/academy">Academy</Link>
              <Menu>
                <MenuButton onClick={onOpen}>Materiales</MenuButton>
                <MenuList alignItems={"center"}>
                  {uniqueTypes.map((tipo) => (
                    <Link href={`/materiales/${tipo}`}>
                      <MenuItem>
                        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}{" "}
                      </MenuItem>
                    </Link>
                  ))}
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
                  <Button className="hamburger" _hover={{ bg: "transparent" }}>
                    <span>M</span>
                  </Button>
                </PopoverTrigger>

                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Menu</PopoverHeader>
                  <PopoverBody></PopoverBody>
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
  );
}
