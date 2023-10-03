import dayjs from "dayjs";

import { DUMMY_CONTACTS } from "../constants";

export const formatTimeForTable = timestamp =>
  dayjs.unix(timestamp).format("MMM, D, YYYY");

export const contactsTableData = () =>
  DUMMY_CONTACTS.map(contact => ({
    name: `${contact.firstName} ${contact.lastName}`,
    email: contact.email,
    id: contact.id,
    createdAt: formatTimeForTable(contact.createdAt),
    role: contact.role,
  }));
