import Image from "next/image";
import { Button } from "@/app/components/Button";
import { ReceitaItem } from "../../../types/receitas";
import { useRouter } from "next/navigation";

export function RecipeCard({ recipe }: { recipe: ReceitaItem }) {
  const router = useRouter();
  return (
    <div className="w-64 h-96 bg-orange-100 border border-orange-200 rounded-xl flex flex-col items-center justify-between contain-content">
      <div className="w-full relative bg-orange-200">
        <Image
          src={recipe.link_imagem}
          alt={recipe.receita}
          className="w-full h-32 object-cover text-transparent"
          height={372}
          width={372}
          unoptimized
        />
        <span className="rounded-full bg-orange-500/80 border border-orange-500 text-white text-xs px-3 py-1 absolute bottom-2 right-2">
          {recipe.tipo.toLocaleUpperCase()}
        </span>
      </div>
      <div className="h-full w-full p-4">
        <p className="text-xl font-semibold">
          {recipe.receita.length > 33
            ? recipe.receita.slice(0, 32) + "..."
            : recipe.receita}
        </p>
        <p>{recipe.ingredientes.slice(0, 64)}...</p>
      </div>
      <div className="w-full p-4">
        <Button
          className="w-full"
          onClick={() => router.push(`/receita/${recipe.id}`)}
        >
          Ver Receita
        </Button>
      </div>
    </div>
  );
}
