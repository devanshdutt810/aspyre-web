export interface CollectionProps {
  id:string;
imgSource: string;
  colName: string;
}

export interface FeaturedCollectionsProps {
  collections: CollectionProps[];
}