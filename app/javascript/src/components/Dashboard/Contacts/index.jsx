import React, { useState } from "react";

import { Button } from "@bigbinary/neetoui";
import { Container, Header } from "@bigbinary/neetoui/layouts";
import { useTranslation } from "react-i18next";

import { noop } from "components/utils";

import Create from "./Create";
import Table from "./Table";

const Contacts = () => {
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Header
        title={t("titles.contacts")}
        actionBlock={
          <Button
            icon="ri-add-line"
            label={t("buttons.add_entity", { entity: "Contacts" })}
            size="small"
            onClick={() => setIsNewContactPaneOpen(true)}
          />
        }
        searchProps={{
          value: "",
          onChange: noop,
          unlimitedChars: false,
        }}
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
