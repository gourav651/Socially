"use client";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

export default function Home() {
  return (
    <div>
      <Show when="signed-out">
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button variant="outline">Sign Up</Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
       <ModeToggle/>
    </div>
  );
}
