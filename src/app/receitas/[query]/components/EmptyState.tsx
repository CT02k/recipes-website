import { Button } from "@/app/components/Button";
import { Box } from "lucide-react";
import { useRouter } from "next/navigation";

export function EmptyState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="h-24 w-24 bg-orange-500 rounded-full flex flex-col items-center justify-center">
        <Box className="w-16 h-16 text-white" />
      </div>
      <h1 className="text-3xl font-semibold text-orange-500">
        Nenhuma receita encontrada.
      </h1>
      <Button onClick={() => router.push("/")}>Buscar outra</Button>
    </div>
  );
}
