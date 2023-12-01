"use client";

import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import "./Navbar.css";
import { useTheme } from "@emotion/react";

const Navbar = ({ materiales }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const uniqueTypes = [...new Set(materiales.map((material) => material.tipo))];
  const { colors } = useTheme();

  return (
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
      px={4}
      position="fixed" // Esta línea fija la posición de la barra de navegación
      width="100%"
      zIndex={2}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            mr={4}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <img
                src="/images/BanderitaEspañaTampon.png"
                alt="LOGO SWA"
                width="78"
                height="78"
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Menu>
                <Link href="/academy" className="hoverRed">
                  Academy
                </Link>
                <Menu>
                  <MenuButton onClick={onOpen}>Materiales</MenuButton>
                  <MenuList alignItems={"center"}>
                    {uniqueTypes.map((type) => (
                      <Link href={`/materials/${type}`} key={type}>
                        <MenuItem>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </MenuItem>
                      </Link>
                    ))}
                    <MenuDivider />
                    <Link href="/materials">
                      <MenuItem>Ver todos</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Link href="/login" className="hoverRed">
                  Login
                </Link>
                <Link href="/shop" className="hoverRed">
                  Shop
                </Link>
              </Menu>
            </HStack>
          </HStack>
        </Flex>
        <Flex alignItems={"center"}>
          <Button onClick={toggleColorMode} bg={"transparent"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"sm"} ml={2} src={""} />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Menu>
              <Link href="/academy">Academy</Link>
              <Menu>
                <MenuButton textAlign={"left"} onClick={onOpen}>
                  Materiales
                </MenuButton>
                <MenuList>
                  {uniqueTypes.map((type) => (
                    <Link href={`/materials/${type}`} key={type}>
                      <MenuItem>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuDivider />
                  <Link href="/materials">
                    <MenuItem>Ver todos</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <Link href="/login" className="hoverRed">
                Login
              </Link>
              <Link href="/shop" className="hoverRed">
                Shop
              </Link>
            </Menu>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
