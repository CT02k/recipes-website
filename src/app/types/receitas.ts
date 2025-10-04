export type IngredienteBase = {
  id: number;
  nomesIngrediente: string[];
  receita_id: number;
  created_at: string;
};

export type ReceitaItem = {
  id: number;
  receita: string;
  ingredientes: string;
  modo_preparo: string;
  link_imagem: string;
  tipo: string;
  created_at: string;
  IngredientesBase: IngredienteBase[];
};

export type PaginatedReceitas = {
  items: ReceitaItem[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
};
