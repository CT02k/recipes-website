"use client";
import { use, useEffect, useState } from "react";
import { ReceitaItem } from "@/app/types/receitas";
import { RecipeDetail } from "./components/RecipeDetail";
import { useRouter } from "next/navigation";

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState<ReceitaItem | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api-receitas-pi.vercel.app/receitas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setRecipe(null);
        } else {
          setRecipe(data);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <span className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400 border-t-transparent"></span>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="h-dvh flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-semibold text-orange-500">
          Receita não encontrada.
        </h1>
        <button
          className="text-orange-600 underline"
          onClick={() => router.push("/")}
        >
          Voltar para Home
        </button>
      </div>
    );
  }

  return (
    <div className="h-dvh flex items-center justify-center p-6 overflow-y-auto">
      <RecipeDetail recipe={recipe} />
    </div>
  );
}
