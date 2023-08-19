import { signInWithPopup } from "firebase/auth";
import { Button, ButtonProps } from "@mantine/core";

import { GoogleIcon } from "./GoogleIcon";
import { auth, provider } from "../hooks/firebase/firebase"; // firebaseConfig のインポート先を指定してください

export function GoogleButton(props: ButtonProps) {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      const token = await auth.currentUser!.getIdToken(true);
      console.log(token);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}
