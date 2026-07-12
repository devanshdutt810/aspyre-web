export type RootProps = {
    FavoritesSize:number,
    SearchText:string,
    fetchSearchQuery: (searchQuery: string) => void,
    handleFavoritesSize: (size: number) => void
}