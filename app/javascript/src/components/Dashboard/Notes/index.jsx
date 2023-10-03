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
        title={t("titles.notes")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("buttons.add_entity", { entity: "Note" })}
            size="small"
          />
        }
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
