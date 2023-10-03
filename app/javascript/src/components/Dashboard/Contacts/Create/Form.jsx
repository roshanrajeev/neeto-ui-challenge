import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane } from "@bigbinary/neetoui";
import { Form as FormikForm, Input, Select } from "@bigbinary/neetoui/formik";
import { useTranslation } from "react-i18next";

import {
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_ROLES,
  CONTACT_FORM_VALIDATION_SCHEMA,
} from "../constants";

const Form = ({ onSubmit, onClose }) => {
  const { t } = useTranslation();

  return (
    <FormikForm
      formikProps={{
        initialValues: CONTACT_FORM_INITIAL_VALUES,
        validationSchema: CONTACT_FORM_VALIDATION_SCHEMA,
        onSubmit,
      }}
    >
      <Pane.Body>
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-x-2">
            <Input
              required
              label={t("contact_form.label.firstName")}
              name={t("contact_form.name.firstName")}
              placeholder={t("contact_form.placeholder.firstName")}
              unlimitedChars={false}
            />
            <Input
              required
              label={t("contact_form.label.lastName")}
              name={t("contact_form.name.lastName")}
              placeholder={t("contact_form.placeholder.lastName")}
              unlimitedChars={false}
            />
          </div>
          <Input
            required
            label={t("contact_form.label.email")}
            name={t("contact_form.name.email")}
            placeholder={t("contact_form.placeholder.email")}
            unlimitedChars={false}
          />
          <Select
            required
            label={t("contact_form.label.role")}
            name={t("contact_form.name.role")}
            options={CONTACT_FORM_ROLES}
            placeholder={t("contact_form.placeholder.role")}
          />
        </div>
      </Pane.Body>
      <Pane.Footer>
        <div className="flex flex-row gap-2">
          <Button
            icon={Check}
            label={t("contact_form.buttons.save")}
            type="submit"
          />
          <Button
            label={t("contact_form.buttons.cancel")}
            style="text"
            type="reset"
            onClick={onClose}
          />
        </div>
      </Pane.Footer>
    </FormikForm>
  );
};

export default Form;
