import Tmage from 'next/image';
import { Button } from "@/components/ui/button";
import React from 'react';
import { UserButton } from "@stackframe/stack";

export default function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <Button variant={'destructive'}>Click me</Button>
      <UserButton />
    </div>
  );
}