import { Dispatch, SetStateAction } from "react"

export type SearchContextType = {
    searchText:string
    setSearchText:Dispatch<SetStateAction<string>>
}