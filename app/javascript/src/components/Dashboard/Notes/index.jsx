import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { noop } from "components/utils";

import Create from "./Create";
import List from "./List";

import { DUMMY_NOTES } from "../constants";

const Notes = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(true);

  const { t } = useTranslation();

  return (
    <Container>
      <Header
        title={t("notes.title")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("notes.add_note")}
            size="small"
            onClick={() => setIsNewNotePaneOpen(true)}
          />
        }
      />
      <Create
        isOpen={isNewNotePaneOpen}
        setNotes={setNotes}
        onClose={() => setIsNewNotePaneOpen(false)}
      />
      {notes.length > 0 ? (
        <List notes={notes} setNotes={setNotes} />
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={noop}
          primaryActionLabel={t("notes.empty.new_note")}
          subtitle={t("notes.empty.subtitle")}
          title={t("notes.empty.title")}
        />
      )}
    </Container>
  );
};

export default Notes;
