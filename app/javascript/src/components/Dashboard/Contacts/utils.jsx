import React from "react";

import { Avatar, Tooltip, Typography } from "@bigbinary/neetoui";
import dayjs from "dayjs";
import { t } from "i18next";

import Dropdown from "components/commons/Dropdown";

import { DUMMY_CONTACTS } from "../constants";

export const formatTimeForTable = timestamp =>
  dayjs.unix(timestamp).format("MMM, D, YYYY");

export const buildContactsTableData = () =>
  DUMMY_CONTACTS.map(contact => ({
    name: `${contact.firstName} ${contact.lastName}`,
    email: contact.email,
    id: contact.id,
    createdAt: formatTimeForTable(contact.createdAt),
    role: contact.role,
  }));

export const buildContactsTableColumnData = ({ onContactDelete }) => [
  {
    title: t("contacts_table.title.name_and_role"),
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (_, contact) => (
      <div className="flex gap-x-3">
        <div>
          <Avatar size="large" />
        </div>
        <div className="flex flex-col">
          <Typography style="h5">{contact.name}</Typography>
          <Typography style="body3">{contact.role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: t("contacts_table.title.email"),
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: t("contacts_table.title.created_at"),
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
    render: createdAt => <Tooltip content={createdAt}>{createdAt}</Tooltip>,
  },
  {
    title: "",
    dataIndex: "menu",
    key: "menu",
    width: 40,
    render: () => <Dropdown iconType="horizontal" onDelete={onContactDelete} />,
  },
];
