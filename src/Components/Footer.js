import {
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  Spacer,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.300", "black")}
      px={4}
      py={2}
      pos={"fixed"}
      bottom={0}
      w={"100%"}
    >
      <Flex align={"space-between"} h={10}>
        <Spacer />
        <Link as={RouterLink} to={"/moments"}>
          <IconButton
            variant="ghost"
            color={"tomato"}
            aria-label="All Moments Page"
            as={MdFormatListBulleted}
          />
        </Link>
        <Spacer />
        <Divider orientation={"vertical"} />
        <Spacer />
        <Link as={RouterLink} to={"/journals"}>
          <IconButton
            variant="ghost"
            color={"tomato"}
            aria-label="All Journals Page"
            as={BsFillJournalBookmarkFill}
          />
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Footer;
