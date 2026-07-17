import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";

export function useSearch(){
    const searchCtx = useContext(SearchContext);

    return searchCtx;
}