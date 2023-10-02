import React from "react";

import Item from "./Item";

const List = ({ notes = [] }) => (
  <>
    {notes.map(note => (
      <Item
        createdAt={note.createdAt}
        description={note.description}
        id={note.id}
        key={note.id}
        tags={note.tags}
        title={note.title}
      />
    ))}
  </>
);
export default List;
