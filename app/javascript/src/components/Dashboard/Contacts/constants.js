import { t } from "i18next";
import * as yup from "yup";

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
    .required(t("schema.required_entity", { entity: "first name" })),
  lastName: yup
    .string()
    .trim()
    .required(t("schema.required_entity", { entity: "last name" })),
  email: yup
    .string()
    .email(t("schema.invalid_entity", { entity: "email" }))
    .required(t("schema.required_entity", { entity: "assigned contact" })),
  role: yup
    .object()
    .nullable()
    .required(t("schema.required_entity", { entity: "role" })),
});
