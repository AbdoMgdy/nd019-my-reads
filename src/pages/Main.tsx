import React from "react";
import Layout from "../components/layout";
import Shelf from "../components/Shelf";
import { ShelfType } from "../store/rootReducer";

function Main() {
  const shelves = [
    { title: "Currently Reading", type: ShelfType.currentlyReading },
    { title: "Want to Read", type: ShelfType.wantToRead },
    { title: "Read", type: ShelfType.read },
  ];
  return (
    <Layout>
      {shelves.map((shelf) => (
        <Shelf key={shelf.title} type={shelf.type} title={shelf.title} />
      ))}
    </Layout>
  );
}

export default Main;
