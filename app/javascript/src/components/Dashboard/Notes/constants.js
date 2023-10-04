import { t } from "i18next";
import * as yup from "yup";

import { buildNoteFormContactOptions } from "./utils";

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
    .required(t("schema.requiredEntity", { entity: "title" })),
  description: yup
    .string()
    .trim()
    .required(t("schema.requiredEntity", { entity: "description" })),
  assignedContact: yup
    .object()
    .nullable()
    .required(t("schema.requiredEntity", { entity: "assigned contact" })),
  tags: yup
    .array()
    .nullable()
    .min(1, t("schema.requiredEntity", { entity: "tags" }))
    .required(t("schema.requiredEntity", { entity: "tags" })),
});

export const NOTE_FORM_CONTACT_OPTIONS = buildNoteFormContactOptions();
