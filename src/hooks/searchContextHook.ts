import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";

export function UseSearchCtxHook(){
    const searchCtx = useContext(SearchContext);

    return searchCtx;
}