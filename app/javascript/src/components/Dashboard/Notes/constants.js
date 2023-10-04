import { t } from "i18next";
import * as yup from "yup";

import { buildNoteFormContactOptions } from "./utils";

const ALPHANUMERIC_WITH_SPECIAL_CHARS_REGEX = /^[a-zA-Z0-9\s-]+$/;

export const NOTE_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: null,
};

export const NOTE_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .trim()
    .matches(
      ALPHANUMERIC_WITH_SPECIAL_CHARS_REGEX,
      t("schema.onlyAlphaNumericWithSpecialChars")
    )
    .required(t("schema.requiredEntity", { entity: "Title" })),
  description: yup
    .string()
    .trim()
    .required(t("schema.requiredEntity", { entity: "Description" })),
  assignedContact: yup
    .object()
    .shape({
      label: yup
        .string()
        .trim()
        .required(t("schema.invalidEntity", { entity: "Label" })),
      value: yup
        .object()
        .required(t("schema.invalidEntity", { entity: "Value" })),
    })
    .nullable()
    .required(t("schema.requiredEntity", { entity: "Assigned Contact" })),
  tags: yup
    .array()
    .nullable()
    .min(1, t("schema.requiredEntity", { entity: "tag", count: 1 }))
    .required(t("schema.requiredEntity", { entity: "tag", count: 1 })),
});

export const NOTE_FORM_CONTACT_OPTIONS = buildNoteFormContactOptions();
