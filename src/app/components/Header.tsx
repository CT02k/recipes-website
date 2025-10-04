"use client";
import { ChefHat } from "lucide-react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center h-18 border-b border-orange-200 bg-orange-100 w-full px-6">
      <div
        className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer hover:rotate-360 transition duration-500"
        onClick={() => router.push("/")}
      >
        <ChefHat />
      </div>
      <Button onClick={() => router.push("/receitas")}>Receitas</Button>
    </nav>
  );
}
