"use client";

import Image from "next/image";
import { handleGetProjects } from "@/services/project";
import { redirect } from "next/navigation";
import Link from "next/link";

import { useCounterStore } from "@/providers/counter-store-provider";

export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hiển thị trang chủ ở đây
    </main>
  );
}
