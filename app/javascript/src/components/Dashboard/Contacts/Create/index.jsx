import React from "react";

import { Pane, Toastr, Typography } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Create = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    Toastr.success(t("toasts.addedEntity", { entity: "Contact" }));
    onClose();
  };

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("titles.addNewEntity", { entity: "contact" })}
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} onSubmit={handleSubmit} />
    </Pane>
  );
};

export default Create;
