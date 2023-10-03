import React from "react";

import { Button } from "@bigbinary/neetoui";
import { Container, Header } from "@bigbinary/neetoui/layouts";
import { useTranslation } from "react-i18next";

import { noop } from "components/utils";

import Table from "./Table";

const Contacts = () => {
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
            onClick={noop}
          />
        }
        searchProps={{
          value: "",
          onChange: noop,
          unlimitedChars: false,
        }}
      />
      <Table />
    </Container>
  );
};

export default Contacts;
