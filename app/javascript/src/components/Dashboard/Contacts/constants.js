import { t } from "i18next";
import * as yup from "yup";

import { buildContactsTableData } from "./utils";

const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]+$/;

export const CONTACT_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_ROLES = [
  {
    label: "Developer",
    value: "developer",
  },
  {
    label: "Designer",
    value: "designer",
  },
  {
    label: "Manager",
    value: "manager",
  },
  {
    label: "QA Tester",
    value: "qa_tester",
  },
];

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .matches(ALPHANUMERIC_REGEX, t("schema.onlyAlphaNumeric"))
    .required(t("schema.requiredEntity", { entity: "First Name" })),
  lastName: yup
    .string()
    .trim()
    .matches(ALPHANUMERIC_REGEX, t("schema.onlyAlphaNumeric"))
    .required(t("schema.requiredEntity", { entity: "Last Name" })),
  email: yup
    .string()
    .email(t("schema.invalidEntity", { entity: "Email address" }))
    .required(t("schema.requiredEntity", { entity: "Email" })),
  role: yup
    .object()
    .shape({
      label: yup
        .string()
        .required(t("schema.invalidEntity", { entity: "Label" })),
      value: yup
        .string()
        .required(t("schema.invalidEntity", { entity: "Value" })),
    })
    .nullable()
    .required(t("schema.requiredEntity", { entity: "Role" })),
});

export const CONTACTS_TABLE_DATA = buildContactsTableData();
