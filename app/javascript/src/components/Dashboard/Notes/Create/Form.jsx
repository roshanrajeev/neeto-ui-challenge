import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane } from "@bigbinary/neetoui";
import {
  Form as FormikForm,
  Input,
  Textarea,
  Select,
} from "@bigbinary/neetoui/formik";

import { NOTE_FORM_INITIAL_VALUES } from "../constants";
import { noteFormContactOptions, noteFormTagOptions } from "../utils";

const CONTACT_OPTIONS = noteFormContactOptions();
const TAG_OPTIONS = noteFormTagOptions();

const Form = ({ onSubmit, onClose }) => (
  <FormikForm
    formikProps={{
      initialValues: NOTE_FORM_INITIAL_VALUES,
      onSubmit,
    }}
  >
    <Pane.Body>
      <div className="flex w-full flex-col gap-4">
        <Input
          required
          label="Title"
          name="title"
          placeholder="Enter note title"
        />
        <Textarea
          required
          label="Description"
          name="description"
          placeholder="Enter note description"
          rows={3}
        />
        <Select
          required
          label="Assigned Contact"
          name="assigned"
          options={CONTACT_OPTIONS}
        />
        <Select
          isMulti
          required
          label="Tags"
          name="tags"
          options={TAG_OPTIONS}
          placeholder="Select Tags"
        />
      </div>
    </Pane.Body>
    <Pane.Footer>
      <div className="flex flex-row gap-2">
        <Button icon={Check} label="Save Changes" type="submit" />
        <Button label="Cancel" style="text" type="reset" onClick={onClose} />
      </div>
    </Pane.Footer>
  </FormikForm>
);

export default Form;
