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
import { CardList } from "./cardList";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export const Hero = (props) => {
  const [page, setPage] = useState(0);
  const [courseName, setCourseName] = useState("");
  const [fetched, setFetched] = useState();
  const [price, setPrice] = useState("");
  const [lang, setLang] = useState("");
  const [alert, setAlert] = useState(<></>);
  const [button, setButton] = useState(false);

  function activateLasers(event, newPage) {
    if (page === 0) setPage(1);
    else if (page !== newPage) setPage(newPage);
    event.preventDefault();
    setButton(true);
    fetch(
      `https://api.liberoproject.kz/courses?title=${courseName}&page=${newPage}&is_paid=${price}&lang=${lang}&count=16&`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setFetched(result);
          setAlert(<></>);
          setButton(false);
          document.getElementById("results").scrollIntoView();
        },
        (error) => {
          setAlert(
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Ошибка!</AlertTitle>
              <AlertDescription>
                Пожалуйста, проверьте ваше подключение.
              </AlertDescription>
            </Alert>
          );
          setButton(false);
        }
      );
  }
  return (
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
            <form onSubmit={(event) => activateLasers(event, page)}>
              <Stack spacing={5}>
                {alert}
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
                  isLoading={button}
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
      <CardList result={fetched} page={page} action={activateLasers} />
    </Container>
  );
};
