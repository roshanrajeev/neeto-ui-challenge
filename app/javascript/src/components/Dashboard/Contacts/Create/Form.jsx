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
              label={t("contactForm.label.firstName")}
              name={t("contactForm.name.firstName")}
              placeholder={t("contactForm.placeholder.firstName")}
              unlimitedChars={false}
            />
            <Input
              required
              label={t("contactForm.label.lastName")}
              name={t("contactForm.name.lastName")}
              placeholder={t("contactForm.placeholder.lastName")}
              unlimitedChars={false}
            />
          </div>
          <Input
            required
            label={t("contactForm.label.email")}
            name={t("contactForm.name.email")}
            placeholder={t("contactForm.placeholder.email")}
            unlimitedChars={false}
          />
          <Select
            required
            label={t("contactForm.label.role")}
            name={t("contactForm.name.role")}
            options={CONTACT_FORM_ROLES}
            placeholder={t("contactForm.placeholder.role")}
          />
        </div>
      </Pane.Body>
      <Pane.Footer>
        <div className="flex flex-row gap-2">
          <Button
            icon={Check}
            label={t("contactForm.buttons.save")}
            type="submit"
          />
          <Button
            label={t("contactForm.buttons.cancel")}
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
