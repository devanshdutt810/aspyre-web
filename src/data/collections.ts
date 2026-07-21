function fetchCollectionsData() {
  return [
    {
      id: "col-001",
      imgSource: "/collections/col1.webp",
      colName: "Aspyre Bestsellers",
      category: "All",
    },
    {
      id: "col-002",
      imgSource: "/collections/col2.webp",
      colName: "The Dress Edit",
      category: Categories.Dress,
    },
    {
      id: "col-003",
      imgSource: "/collections/col3.webp",
      colName: "The Business Edit",
      category: Categories.Dress,
    },
    {
      id: "col-004",
      imgSource: "/collections/col4.webp",
      colName: "The Co-Ord Edit",
      category: Categories.CoOrds,
    },
    {
      id: "col-005",
      imgSource: "/collections/col5.webp",
      colName: "The Winter Shop",
      category: Categories.Winter,
    },
  ];
}

enum Categories {
  CoOrds = "Co-Ord Sets",
  Dress = "Party Dresses",
  Winter = "Winter Wear",
}

export default fetchCollectionsData;
