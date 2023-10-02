import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { DUMMY_NOTES } from "./constants";
import List from "./List";

const Notes = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES); // eslint-disable-line

  return (
    <Container>
      <Header
        title="All Notes"
        actionBlock={
          <Button icon="ri-add-line" label="Add Note" size="small" />
        }
      />
      <List notes={notes} />
    </Container>
  );
};

export default Notes;
