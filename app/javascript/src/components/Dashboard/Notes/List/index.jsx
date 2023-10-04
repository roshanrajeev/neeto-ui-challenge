import React from "react";

import { Toastr } from "@bigbinary/neetoui";
import EmptyNotesListImage from "images/EmptyNotesList";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { noop } from "components/utils";

import Item from "./Item";

const List = ({ notes, setNotes, emptyStateAction = noop }) => {
  const { t } = useTranslation();

  const handleDelete = id => {
    const filteredNotes = [...notes].filter(note => note.id !== id);
    setNotes(filteredNotes);
    Toastr.success(t("toasts.deletedEntity", { entity: "Note" }));
  };

  return (
    <>
      {notes.length > 0 ? (
        <div className="flex w-full flex-col gap-y-3">
          {notes.map(note => (
            <Item key={note.id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={emptyStateAction}
          primaryActionLabel={t("emptyState.newNote")}
          subtitle={t("emptyState.subtitle")}
          title={t("emptyState.title")}
        />
      )}
    </>
  );
};
export default List;
