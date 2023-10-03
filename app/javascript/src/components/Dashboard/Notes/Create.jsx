import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane, Typography } from "@bigbinary/neetoui";
import { Form, Input, Textarea, Select } from "@bigbinary/neetoui/formik";
import { v4 as uuid } from "uuid";

import { getTimestampInSeconds } from "components/utils";

import { noteFormContactOptions, noteFormTagOptions } from "./utils";

const CONTACT_OPTIONS = noteFormContactOptions();
const TAG_OPTIONS = noteFormTagOptions();

const Create = ({ isOpen, onClose, setNotes }) => {
  const handleSubmit = formValues => {
    const createdAt = getTimestampInSeconds();

    // TODO: use format [{label, value}] instead of mapping to [label]
    // This will be fixed in a future PR.
    const tags = formValues.tags.map(tag => tag.label);

    const note = {
      ...formValues,
      id: uuid(),
      tags,
      createdAt,
      assigned: formValues.assigned.value,
    };

    setNotes(prev => [note, ...prev]);
    onClose();
  };

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add new post
        </Typography>
      </Pane.Header>
      <Form
        formikProps={{
          initialValues: {
            title: "",
            description: "",
            assigned: {},
            tags: [],
          },
          onSubmit: handleSubmit,
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
            <Button
              label="Cancel"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </div>
        </Pane.Footer>
      </Form>
    </Pane>
  );
};

export default Create;
