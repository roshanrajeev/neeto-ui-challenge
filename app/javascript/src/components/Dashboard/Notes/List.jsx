import React from "react";

import Item from "./Item";

const List = ({ notes = [] }) => (
  <div className="flex w-full flex-col gap-y-3">
    {notes.map(note => (
      <Item key={note.id} note={note} />
    ))}
  </div>
);
export default List;
