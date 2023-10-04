import React, { useState } from "react";

import { Container } from "@bigbinary/neetoui/layouts";
import { useTranslation } from "react-i18next";

import Header from "components/commons/Header";

import Create from "./Create";
import Table from "./Table";

const Contacts = () => {
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Header
        actionButtonLabel={t("buttons.add_entity", { entity: "Contacts" })}
        title={t("titles.contacts")}
        onActionButtonClick={() => setIsNewContactPaneOpen(true)}
      />
      <Table />
      <Create
        isOpen={isNewContactPaneOpen}
        onClose={() => setIsNewContactPaneOpen(false)}
      />
    </Container>
  );
};

export default Contacts;
