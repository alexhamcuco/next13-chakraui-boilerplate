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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <Link href="/academy">Academy</Link>
                <Menu>
                  {/* <MenuButton> */}
                    <Link href="/materiales">Materiales</Link>
                  {/* </MenuButton> */}
                  {/* <MenuList alignItems={"center"}>
                    <MenuItem>Podcast</MenuItem>
                    <MenuItem>Video</MenuItem>
                    <MenuItem>Grammar</MenuItem>
                  </MenuList> */}
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
