"use client";

import { Button } from "@/app/components/Button";
import { ChefHat } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-dvh overflow-hidden justify-center gap-4 relative">
      <div className="flex gap-10">
        <div className="h-24 w-24 bg-orange-500 rounded-full flex flex-col items-center justify-center -mx-3">
          <ChefHat className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-8xl font-black text-orange-500">404</h1>
      </div>
      <p className="text-3xl font-medium text-orange-500 mb-5">
        Página não encontrada.
      </p>
      <Button onClick={() => router.push("/")}>Ir para o início</Button>
      <Image
        src={"/dish.png"}
        alt="Dish"
        height={768}
        width={768}
        className="absolute -bottom-1/2 animate-dish"
      />
    </div>
  );
}
