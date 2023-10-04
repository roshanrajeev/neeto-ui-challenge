import React from "react";

import { Toastr } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import Item from "./Item";

const List = ({ notes, setNotes }) => {
  const { t } = useTranslation();

  const handleDelete = id => {
    const filteredNotes = [...notes].filter(note => note.id !== id);
    setNotes(filteredNotes);
    Toastr.success(t("toasts.deleted_entity", { entity: "Note" }));
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
