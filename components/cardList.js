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
  Select,
  SimpleGrid,
  Switch,
  useColorModePreference,
} from "@chakra-ui/react";
import Model from "./three";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { Rating } from "./rating";
import React, { useState, useEffect } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Card } from "./card";
import { Pagination } from "./pagination";

export const CardList = (props) => {
  let activateLasers = props.action;
  let result = props.result;
  let page = props.page;

  if (result === undefined)
    return <Container maxW="8xl" my="20" h="100vh" id="results"></Container>;
  let coursesList = [];

  let totalCourses = result["courses"]["total"];
  let courses = result["courses"]["results"];
  let totalPages;

  coursesList = courses.map((course, index) => (
    <Card data={course} key={index.toString()} />
  ));
  totalPages = Math.ceil(result["courses"]["total"] / 16);
  return (
    <Container maxW="8xl" my="20" id="results">
      {totalCourses !== 0 ? (
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Найдено {totalCourses} курсов
        </Text>
      ) : (
        <></>
      )}
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={3}>
        {coursesList}
      </SimpleGrid>
      {page < 1 ? (
        <></>
      ) : (
        <Pagination
          page={page}
          maxPage={totalPages}
          valueClick={activateLasers}
        />
      )}
    </Container>
  );
};
