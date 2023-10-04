import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Container } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import Header from "components/commons/Header";
import { noop } from "components/utils";

import Create from "./Create";
import List from "./List";

import { DUMMY_NOTES } from "../constants";

const Notes = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Header
        actionButtonLabel={t("buttons.add_entity", { entity: "Notes" })}
        title={t("titles.notes")}
        onActionButtonClick={() => setIsNewNotePaneOpen(true)}
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
          primaryActionLabel={t("empty_state.new_note")}
          subtitle={t("empty_state.subtitle")}
          title={t("empty_state.title")}
        />
      )}
    </Container>
  );
};

export default Notes;
