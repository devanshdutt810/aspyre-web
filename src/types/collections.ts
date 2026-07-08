export type collection= {
  id:string;
imgSource: string;
  colName: string;
}

export interface FeaturedCollectionsProps {
  collections: collection[];
}