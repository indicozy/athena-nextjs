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

export const CTA = (props) => {
  return (
    <Center minh={500} py={20} bg={useColorModeValue("teal.500", "teal.700")}>
      <Container maxW="6xl">
        <Stack
          divider={<StackDivider borderColor="gray.200" />}
          direction={["column", "row"]}
        >
          <Center>
            <VStack minW="300px" px={8}>
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://op-onai.kz/_next/image?url=%2Fstatic%2Fimages%2Fauthors%2Findicozy.jpg&w=384&q=75"
              />
              <Heading as="h3" size="md">
                Беркут Карлыбай
              </Heading>
              <Text fontSize="md">Основатель Op-Onai</Text>
            </VStack>
          </Center>
          <Stack spacing={4} ml={[0, 6]} my={8}>
            <Heading as="h2" size="2xl">
              Проект Athena
            </Heading>
            <Text>
              Отчасти чтобы бороться с инфоцыганами я и создал данный поисковик.
              Данный проект был создан для быстрого и удобного поиска курсов и
              контента на многих языках. С помощью нее вы можете найти
              бесплатные и платные курсы, благодаря которым вы можете
              сопоставить реальную цену курсов которые предлагают люди.
            </Text>
            <Link href="https://op-onai.kz/blog/official/athena">
              <Button size="md" colorScheme="gray" variant="solid">
                Прочесть Блог
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Center>
  );
};
