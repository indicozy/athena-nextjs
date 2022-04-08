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
  ButtonGroup,
  IconButton,
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
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const Pagination = (props) => {
  let buttons = [];
  const page = parseInt(props.page);
  const maxPage = parseInt(props.maxPage);

  if (page == 0) return <></>;

  for (
    let i = Math.max(1, page - 2);
    i <= Math.min(Math.max(1, page - 2) + 4, maxPage);
    i++
  ) {
    if (i == page) buttons.push(<Button variant="solid">{i}</Button>);
    else
      buttons.push(
        <Button value={i} onClick={props.onClick} variant="outline">
          {i}
        </Button>
      );
  }
  return (
    <Center py={30} spac>
      <HStack>
        <ButtonGroup size="sm" colorScheme="teal">
          {buttons}
        </ButtonGroup>
      </HStack>
    </Center>
  );
};
