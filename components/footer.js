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

export const Footer = (props) => {
  return (
    <Center h={12}>
      <Text> Разработан с ❤️ Карлыбай Беркутом </Text>
    </Center>
  );
};
