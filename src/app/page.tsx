"use client";

import { Center } from "@mantine/core";
import { GoogleButton } from "@/components/GoogleButton";

export default function Home() {
  return (
    <>
      <Center h="100vh">
        <GoogleButton>Sign in with Google</GoogleButton>
      </Center>
    </>
  );
}
