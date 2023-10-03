import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

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
      <List notes={notes} />
    </Container>
  );
};

export default Notes;
