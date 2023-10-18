"use client";

import { Separator } from "@radix-ui/react-separator";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();

  return <div></div>;
}
