export type collection = {
  id: string;
  imgSource: string;
  colName: string;
  category: string;
};

export interface FeaturedCollectionsProps {
  collections: collection[];
}
