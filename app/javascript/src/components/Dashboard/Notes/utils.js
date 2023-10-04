import dayjs from "dayjs";

import { DUMMY_CONTACTS } from "../constants";

export const calculateElapsedTime = timestamp =>
  dayjs.unix(timestamp).fromNow();

export const formatTimeForTooltip = timestamp =>
  dayjs.unix(timestamp).format("dddd, h:mA");

export const noteFormContactOptions = () =>
  DUMMY_CONTACTS.map(contact => ({
    label: `${contact.firstName} ${contact.lastName}`,
    value: contact,
  }));
