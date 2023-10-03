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
        title={t("titles.notes")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("buttons.add_entity", { entity: "Note" })}
            size="small"
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
          primaryActionLabel={t("empty_state.new_note")}
          subtitle={t("empty_state.subtitle")}
          title={t("empty_state.title")}
        />
      )}
    </Container>
  );
};

export default Notes;
