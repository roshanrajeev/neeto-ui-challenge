import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane } from "@bigbinary/neetoui";
import {
  Form as FormikForm,
  Input,
  Textarea,
  Select,
} from "@bigbinary/neetoui/formik";
import { useTranslation } from "react-i18next";

import { NOTE_TAGS } from "components/Dashboard/constants";

import {
  NOTE_FORM_CONTACT_OPTIONS,
  NOTE_FORM_INITIAL_VALUES,
  NOTE_FORM_VALIDATION_SCHEMA,
} from "../constants";

const Form = ({ onSubmit, onClose }) => {
  const { t } = useTranslation();

  return (
    <FormikForm
      formikProps={{
        initialValues: NOTE_FORM_INITIAL_VALUES,
        validationSchema: NOTE_FORM_VALIDATION_SCHEMA,
        onSubmit,
      }}
    >
      <Pane.Body>
        <div className="flex w-full flex-col gap-4">
          <Input
            required
            label={t("noteForm.label.title")}
            name={t("noteForm.name.title")}
            placeholder={t("noteForm.placeholder.title")}
            unlimitedChars={false}
          />
          <Textarea
            required
            label={t("noteForm.label.description")}
            name={t("noteForm.name.description")}
            placeholder={t("noteForm.placeholder.description")}
            rows={3}
            unlimitedChars={false}
          />
          <Select
            required
            label={t("noteForm.label.assignedContact")}
            name={t("noteForm.name.assignedContact")}
            options={NOTE_FORM_CONTACT_OPTIONS}
            placeholder={t("noteForm.placeholder.assignedContact")}
          />
          <Select
            isMulti
            required
            label={t("noteForm.label.tags")}
            name={t("noteForm.name.tags")}
            options={NOTE_TAGS}
            placeholder={t("noteForm.placeholder.tags")}
          />
        </div>
      </Pane.Body>
      <Pane.Footer>
        <div className="flex flex-row gap-2">
          <Button
            icon={Check}
            label={t("noteForm.buttons.save")}
            type="submit"
          />
          <Button
            label={t("noteForm.buttons.cancel")}
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
