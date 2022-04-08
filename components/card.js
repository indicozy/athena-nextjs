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
  Wrap,
  Center,
  useBreakpointValue,
  useColorModeValue,
  VStack,
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

export const Card = (props) => {
  let course = props.data;
  let tags = [];
  let tag = (text) => (
    <Tag size="sm" variant="solid" colorScheme="teal">
      {text}
    </Tag>
  );
  tags.push(
    <Tag size="sm" variant="solid" colorScheme="teal">
      <Link
        href={
          course["origins_url_about"] === null
            ? "#"
            : course["origins_url_about"]
        }
      >
        <HStack borderRadius={"lg"}>
          <Image
            borderRadius="md"
            boxSize="18px"
            src={
              course["origins_image_url"] === null
                ? "https://liberoproject.kz/_next/image?url=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F7231f55631d9ba4e7550b479d1440556%3Fs%3D96%26r%3Dpg&w=3840&q=75"
                : course["origins_image_url"]
            }
          />
          <Text>
            {course["origins_name"] === null
              ? "Организации"
              : course["origins_name"]}{" "}
          </Text>
        </HStack>
      </Link>
    </Tag>
  );
  if (
    course["courses_avg_duration"] !== null &&
    course["courses_avg_duration"] !== "None hours" &&
    course["courses_avg_duration"] !== ""
  )
    tags.push(tag(course["courses_avg_duration"]));
  if (course["courses_certificate_option"] !== null)
    tags.push(tag("Сертификат"));
  if (course["difficulties_name"] !== null)
    tags.push(tag(course["difficulties_name"]));
  if (course["locales_title"] !== null) tags.push(tag(course["locales_title"]));
  return (
    <Box w="320px">
      <Box width="320px" borderWidth="1px" borderRadius="xl" p={2} m={2}>
        <Stack>
          <Link href={course["courses_url"]}>
            <AspectRatio ratio={16 / 9}>
              <Image borderRadius="xl" src={course["courses_image_view"]} />
            </AspectRatio>
          </Link>
          <Link href={course["courses_url"]}>
            <Heading as="h3" size="md">
              {course["courses_headline"] === null
                ? ""
                : course["courses_headline"].length > 250
                ? course["courses_headline"].substring(0, 247) + "..."
                : course["courses_headline"]}
            </Heading>
          </Link>
          <Text fontSize="md">
            {course["courses_description"] === null
              ? ""
              : course["courses_description"].length > 250
              ? course["courses_description"].substring(0, 247) + "..."
              : course["courses_description"]}
          </Text>

          <Text fontSize="2xl" fontWeight={"bold"}>
            {course["courses_is_paid"] === false
              ? "Бесплатно"
              : `${
                  course["courses_price"] === null
                    ? "???"
                    : course["courses_price"]
                } ${course["courses_currency"]}`}
          </Text>
          <Box>
            <Flex>
              <HStack spacing="10px">
                <VStack>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    minW="50px"
                    src={
                      course["instructors_image"] === null
                        ? "https://liberoproject.kz/_next/image?url=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F7231f55631d9ba4e7550b479d1440556%3Fs%3D96%26r%3Dpg&w=3840&q=75"
                        : course["instructors_image"]
                    }
                  />
                  <Link
                    href={
                      course["origins_url_about"] === null
                        ? ""
                        : course["origins_url_about"]
                    }
                  ></Link>
                </VStack>
                <Text>
                  {course["instructors_name"] === null
                    ? "Инструктор"
                    : course["instructors_name"]}
                  {course["instructors_headline"] === null
                    ? ""
                    : `, ${course["instructors_headline"]}`}
                </Text>
              </HStack>
            </Flex>
          </Box>
          {course["courses_avg_rating"] !== undefined &&
          course["courses_avg_rating"] !== null ? (
            <HStack>
              <Text fontSize="md" fontWeight="bold">
                {course["courses_avg_rating"].toFixed(2)}
              </Text>
              <Rating defaultValue={course["courses_avg_rating"]} size="sm" />
              <Text fontSize="sm">({course["courses_num_reviews"]})</Text>
            </HStack>
          ) : (
            <></>
          )}
          <Wrap spacing={2}>{tags}</Wrap>
        </Stack>
      </Box>
    </Box>
  );
};
