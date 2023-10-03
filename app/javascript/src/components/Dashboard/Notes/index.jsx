import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { noop } from "components/utils";

import { DUMMY_NOTES } from "./constants";
import List from "./List";

const Notes = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES); // eslint-disable-line

  const { t } = useTranslation();

  return (
    <Container>
      <Header
        title={t("notes.title")}
        actionBlock={
          <Button icon="ri-add-line" label={t("notes.add_note")} size="small" />
        }
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
