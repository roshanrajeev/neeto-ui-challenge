import React, { useState } from "react";

import { Container } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import Header from "components/commons/Header";

import Create from "./Create";
import List from "./List";

import { DUMMY_NOTES } from "../constants";

const Notes = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);

  const { t } = useTranslation();

  const handleNewNotePaneOpen = () => setIsNewNotePaneOpen(true);
  const handleNewNotePaneClose = () => setIsNewNotePaneOpen(false);

  return (
    <Container>
      <Header
        actionButtonLabel={t("buttons.add_entity", { entity: "Notes" })}
        title={t("titles.notes")}
        onActionButtonClick={handleNewNotePaneOpen}
      />
      <Create
        isOpen={isNewNotePaneOpen}
        setNotes={setNotes}
        onClose={handleNewNotePaneClose}
      />
      <List
        emptyStateAction={handleNewNotePaneOpen}
        notes={notes}
        setNotes={setNotes}
      />
    </Container>
  );
};

export default Notes;
