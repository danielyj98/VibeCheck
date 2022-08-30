import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Portal,
} from "@chakra-ui/react";
import { supabase } from "../../server/supabaseClient";
import { Link } from "react-router-dom";
import LightDarkButton from "../Buttons/LightDarkButton";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const { onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({});
  const { isLoggedIn } = props;
  const name = user.email || "";

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const person = supabase.auth.user();
      setUser(person);
    } catch (error) {
      console.error(error.error_description || error.message);
    }
  }

  return (
    <Box
      bg={useColorModeValue("tomato", "#0a0f1c")}
      px={4}
      pos={"fixed"}
      w={"100%"}
      top={0}
      zIndex={999}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontSize={["36px", "48px"]}>vibe☑</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <LightDarkButton />
            <Box>
              <Menu isLazy={true}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  onClick={onOpen}
                >
                  <Avatar size={"sm"} name={name} src="" />
                </MenuButton>
                <Portal>
                  <MenuList
                    alignItems={"center"}
                    onClose={onClose}
                    m={0}
                    zIndex="popover"
                  >
                    <br />
                    <Center>
                      <Avatar size={"2xl"} name={name} src={""} />
                    </Center>
                    <br />
                    <Center>
                      <p>{name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <Link to="/about">
                      <MenuItem>About Us</MenuItem>
                    </Link>
                    <Link to="/settings">
                      <MenuItem>Settings</MenuItem>
                    </Link>
                    {isLoggedIn ? (
                      <Link to="/">
                        <MenuItem
                          onClick={() => {
                            supabase.auth.signOut();
                          }}
                        >
                          Logout
                        </MenuItem>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
