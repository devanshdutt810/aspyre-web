function fetchCollectionsData(){
    return [
    { id:crypto.randomUUID(), imgSource: "/collections/col1.webp", colName: "Aspyre Bestsellers" },
    { id:crypto.randomUUID(),imgSource: "/collections/col2.webp", colName: "The Dress Edit" },
    { id:crypto.randomUUID(),imgSource: "/collections/col3.webp", colName: "The Business Edit" },
    { id:crypto.randomUUID(),imgSource: "/collections/col4.webp", colName: "The Co-Ord Edit" },
    { id:crypto.randomUUID(),imgSource: "/collections/col5.webp", colName: "The Winter Shop" },
  ];
}

export default fetchCollectionsData;