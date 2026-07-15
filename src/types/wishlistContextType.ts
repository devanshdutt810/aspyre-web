import { Dispatch, SetStateAction } from "react"

export type WishlistContextType = {
    favorites:Set<string>
    setFavorites:Dispatch<SetStateAction<Set<string>>>
}