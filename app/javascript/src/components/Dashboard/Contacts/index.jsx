import React, { useState } from "react";

import { Container } from "@bigbinary/neetoui/layouts";
import { useTranslation } from "react-i18next";

import Header from "components/commons/Header";

import Create from "./Create";
import Table from "./Table";

const Contacts = () => {
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);

  const { t } = useTranslation();

  const handleNewContactPaneOpen = () => setIsNewContactPaneOpen(true);
  const handleNewContactPaneClose = () => setIsNewContactPaneOpen(false);

  return (
    <Container>
      <Header
        actionButtonLabel={t("buttons.addEntity", { entity: "Contacts" })}
        title={t("titles.contacts")}
        onActionButtonClick={handleNewContactPaneOpen}
      />
      <Table />
      <Create
        isOpen={isNewContactPaneOpen}
        onClose={handleNewContactPaneClose}
      />
    </Container>
  );
};

export default Contacts;
