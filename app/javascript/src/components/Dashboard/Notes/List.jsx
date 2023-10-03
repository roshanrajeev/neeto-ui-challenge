import React from "react";

import Item from "./Item";

const List = ({ notes, setNotes }) => {
  const handleDelete = id => {
    const filteredNotes = [...notes].filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="flex w-full flex-col gap-y-3">
      {notes.map(note => (
        <Item key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};
export default List;
