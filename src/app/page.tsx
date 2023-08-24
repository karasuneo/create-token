"use client";

import { Center, Stack } from "@mantine/core";
import { GoogleButton } from "@/components/GoogleButton";
import { DictionaryForm } from "@/components/DictionaryForm";

export default function Home() {
  return (
    <>
      <Center h="100vh">
        <Stack>
          <GoogleButton>Sign in with Google</GoogleButton>
          <DictionaryForm />
        </Stack>
      </Center>
    </>
  );
}
