import { SearchContextType } from "@/types/searchContextType";
import { createContext } from "react";

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined,
);
