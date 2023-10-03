import dayjs from "dayjs";

import { DUMMY_CONTACTS, NOTE_TAGS } from "../constants";

export const calculateElapsedTime = timestamp =>
  dayjs.unix(timestamp).fromNow();

export const formatTimeForTooltip = timestamp =>
  dayjs.unix(timestamp).format("dddd, h:mA");

export const noteFormTagOptions = () =>
  NOTE_TAGS.map(tag => ({ label: tag, value: tag }));

export const noteFormContactOptions = () =>
  DUMMY_CONTACTS.map(contact => ({
    label: `${contact.firstName} ${contact.lastName}`,
    value: contact,
  }));
