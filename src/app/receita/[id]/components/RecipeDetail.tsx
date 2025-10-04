import Image from "next/image";
import { ReceitaItem } from "@/app/types/receitas";
import { Button } from "@/app/components/Button";
import { useRouter } from "next/navigation";

export function RecipeDetail({ recipe }: { recipe: ReceitaItem }) {
  const router = useRouter();
  return (
    <div className="max-w-3xl w-full bg-orange-50 border border-orange-200 rounded-2xl shadow-md p-6">
      <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden">
        <Image
          src={recipe.link_imagem}
          alt={recipe.receita}
          fill
          className="object-cover"
          unoptimized
        />
        <span className="absolute bottom-3 right-3 bg-orange-500/80 border border-orange-500 text-white text-xs px-3 py-1 rounded-full">
          {recipe.tipo.toUpperCase()}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-orange-600 mb-4">
        {recipe.receita}
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-orange-500">Ingredientes</h2>
        <p className="mt-2 whitespace-pre-line">{recipe.ingredientes}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-orange-500">
          Modo de Preparo
        </h2>
        <p className="mt-2 whitespace-pre-line">{recipe.modo_preparo}</p>
      </div>

      <Button className="w-full mt-4" onClick={router.back}>
        Voltar
      </Button>
    </div>
  );
}
