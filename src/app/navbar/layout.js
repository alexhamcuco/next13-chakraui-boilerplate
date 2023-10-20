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
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed" // Esta línea fija la posición de la barra de navegación
        top={0}
        left={0}
        right={0}
        zIndex={999} // Opcional, para asegurarte de que esté por encima de otros elementos
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href="/">
                <img
                  src="/images/logo2PNG2.webp"
                  alt="LOGO SWA"
                  width="86"
                  height="86"
                />
              </Link>
            </Box>
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
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
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
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
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
    </>
  );
};

export default Nav;
