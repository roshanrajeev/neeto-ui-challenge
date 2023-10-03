import * as yup from "yup";

export const NOTE_FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: null,
};

export const NOTE_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().trim().required("Required"),
  description: yup.string().trim().required("Required"),
  assignedContact: yup.object().nullable().required("Required"),
  tags: yup.array().nullable().min(1, "Required").required("Required"),
});
