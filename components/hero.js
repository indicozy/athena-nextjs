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

export const Hero = (props) => {
  const [coursesDocument, setCoursesDocument] = useState([]);
  const [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(10);
  let [totalCourses, setTotalCourses] = useState(0);

  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [lang, setLang] = useState("");

  function activateLasers(event) {
    event.preventDefault();
    fetch(
      `https://api.liberoproject.kz/courses?title=${courseName}&page=${page}&is_paid=${price}&lang=${lang}&count=16&`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let courses = result["courses"]["results"];
          setCoursesDocument(
            courses.map((course, index) => (
              <Card data={course} key={index.toString()} />
            ))
          );
          setTotalPages(Math.ceil(result["courses"]["total"] / 16));
          setTotalCourses(result["courses"]["total"]);
          document.getElementById("results").scrollIntoView();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  return (
    <>
      <Container maxW="8xl">
        <Flex h={("calc(100vh)", "calc(90vh)")} direction={["column", "row"]}>
          <Center
            w={["calc(90vw)", "calc(50vw)"]}
            h={["calc(50vh)", "calc(90vh)"]}
          >
            <Stack spacing={5}>
              <Heading
                size="2xl"
                bgGradient={useColorModeValue(
                  "linear(to-r, teal.500, pink.500)",
                  "linear(to-r, teal.200, pink.300)"
                )}
                bgClip="text"
              >
                {" "}
                Найдите Лучшие Курсы Со Всего Мира
              </Heading>
              <form onSubmit={activateLasers}>
                <Stack spacing={5}>
                  <Input
                    onChange={(event) => setCourseName(event.target.value)}
                    placeholder="Название Курса"
                    size="lg"
                    variant="filled"
                  />
                  <HStack spacing={10}>
                    <HStack>
                      <Text fontWeight={"semibold"}>Цена</Text>
                      <Select
                        placeholder="Любая"
                        onChange={(event) => setPrice(event.target.value)}
                      >
                        <option value="0">Бесплатно</option>
                        <option value="1">Платно</option>
                      </Select>
                    </HStack>
                    <HStack>
                      <Text fontWeight={"semibold"}>Язык</Text>
                      <Select
                        placeholder="Любой"
                        onChange={(event) => setLang(event.target.value)}
                      >
                        <option value="ru">Русский</option>
                        <option value="en">Английский</option>
                        <option value="es">Испанский</option>
                      </Select>
                    </HStack>
                  </HStack>
                  <Button
                    w={"8em"}
                    bgGradient={useColorModeValue(
                      "linear(to-r, teal.400, pink.400)",
                      "linear(to-r, teal.300, pink.300)"
                    )}
                    _hover={{
                      bgGradient: "linear(to-r, teal.500, pink.500)",
                    }}
                    colorScheme="teal"
                    type="submit"
                  >
                    Искать
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Center>
          <Spacer />
          <Center
            w={["calc(90vw)", "calc(50vw)"]}
            h={["calc(50vh)", "calc(90vh)"]}
          >
            <Model />
          </Center>
        </Flex>
      </Container>
      <Container maxW="8xl" my="20" id="results">
        {totalCourses !== 0 ? (
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            Найдено {totalCourses} курсов
          </Text>
        ) : (
          <></>
        )}
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={3}>
          {coursesDocument}
        </SimpleGrid>
        {page < 1 ? (
          <></>
        ) : (
          <Box onClick={activateLasers}>
            <Pagination
              page={page}
              maxPage={totalPages}
              onClick={(event) => {
                setPage(event.target.value);
              }}
            />
          </Box>
        )}
      </Container>
    </>
  );
};
