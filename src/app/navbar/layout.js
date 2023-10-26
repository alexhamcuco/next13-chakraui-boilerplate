"use client";

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

const Nav = ({ materiales }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const uniqueTypes = [...new Set(materiales.map((material) => material.tipo))];

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
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
                src="/images/logo2PNG2.webp"
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
                <Link href="/academy">Academy</Link>
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
                <Link href="/login">Login</Link>
                <Link href="/shop">Shop</Link>
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
              <Avatar
                size={"sm"}
                ml={2}
                src={
                  ""
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
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
              <Link href="/login">Login</Link>
              <Link href="/shop">Shop</Link>
            </Menu>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Nav;
