import React from "react";

import Item from "./Item";

const List = ({ notes = [] }) => (
  <div className="flex w-full flex-col gap-y-3">
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
  </div>
);
export default List;
