import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  Circle,
  Center,
  Container,
  StackDivider,
  useBreakpointValue,
  useColorModeValue,
  VStack,
  useColorModePreference,
} from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { Rating } from "./rating";
import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ToggleColor } from "./toggleColor";

export const Header = (props) => {
  return (
    <Container maxW="8xl">
      <Flex h="20">
        <Center>
          <Image boxSize="40px" src="/logo.png" />
          <Text fontSize="xl" fontWeight={"semibold"} pl={["10px", "16px"]}>
            {" "}
            Project Athena
          </Text>
        </Center>
        <Spacer />
        <Center>
          <ToggleColor />
        </Center>
      </Flex>
    </Container>
  );
};
