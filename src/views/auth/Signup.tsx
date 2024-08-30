import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
} from "@yamada-ui/react";
import React, { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");

  return (
    <Container
      display="flex"
      flexDirection="column"
      centerContent
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width={"420px"}
      margin={"auto"}
    >
      <Heading as="h3" mb="1">
        Create an account
      </Heading>
      <Text m="0" fontSize={"md"}>
        Enter your email below to crate your account
      </Text>
      <Input placeholder="name@example.com" />
      <Button colorScheme="blue" w={"full"}>
        Sign In with Email
      </Button>
      <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
        <Divider w={"100px"}></Divider>
        <Text textAlign={"center"} fontSize={"xs"} w={"200px"}>
          Or CONTINUE WITH
        </Text>
        <Divider w={"100px"}></Divider>
      </Flex>
      <IconButton w={"full"}>GitHub</IconButton>
      <Text fontSize={"xs"} textAlign={"center"}>
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </Text>
    </Container>
  );
};
