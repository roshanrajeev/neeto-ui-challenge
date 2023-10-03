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

import {
  NOTE_FORM_INITIAL_VALUES,
  NOTE_FORM_VALIDATION_SCHEMA,
} from "../constants";
import { noteFormContactOptions, noteFormTagOptions } from "../utils";

const CONTACT_OPTIONS = noteFormContactOptions();
const TAG_OPTIONS = noteFormTagOptions();

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
            label={t("note_form.label.title")}
            name={t("note_form.name.title")}
            placeholder={t("note_form.placeholder.description")}
            unlimitedChars={false}
          />
          <Textarea
            required
            label={t("note_form.label.description")}
            name={t("note_form.name.description")}
            placeholder={t("note_form.placeholder.description")}
            rows={3}
            unlimitedChars={false}
          />
          <Select
            required
            label={t("note_form.label.assigned_contact")}
            name={t("note_form.name.assigned_contact")}
            options={CONTACT_OPTIONS}
            placeholder={t("note_form.placeholder.assigned_contact")}
          />
          <Select
            isMulti
            required
            label={t("note_form.label.tags")}
            name={t("note_form.name.tags")}
            options={TAG_OPTIONS}
            placeholder={t("note_form.placeholder.tags")}
          />
        </div>
      </Pane.Body>
      <Pane.Footer>
        <div className="flex flex-row gap-2">
          <Button
            icon={Check}
            label={t("note_form.buttons.save")}
            type="submit"
          />
          <Button
            label={t("note_form.buttons.cancel")}
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
