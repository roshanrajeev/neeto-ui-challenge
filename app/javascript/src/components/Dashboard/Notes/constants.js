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
    .required(t("schema.required_entity", { entity: "title" })),
  description: yup
    .string()
    .trim()
    .required(t("schema.required_entity", { entity: "description" })),
  assignedContact: yup
    .object()
    .nullable()
    .required(t("schema.required_entity", { entity: "assigned contact" })),
  tags: yup
    .array()
    .nullable()
    .min(1, t("schema.required_entity", { entity: "tags" }))
    .required(t("schema.required_entity", { entity: "tags" })),
});

export const NOTE_FORM_CONTACT_OPTIONS = buildNoteFormContactOptions();
