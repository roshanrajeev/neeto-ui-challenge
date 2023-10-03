import React, { useState } from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import {
  Avatar,
  Dropdown,
  Table as NeetoUITable,
  Tooltip,
  Typography,
} from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import { contactsTableData } from "./utils";

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { t } = useTranslation();

  const COLUMN_DATA = [
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
      render: () => {
        const { Menu, MenuItem } = Dropdown;

        return (
          <Dropdown buttonStyle="text" icon={MenuHorizontal}>
            <Menu>
              <MenuItem.Button>{t("edit")}</MenuItem.Button>
              <MenuItem.Button>{t("delete")}</MenuItem.Button>
            </Menu>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <NeetoUITable
      rowSelection
      columnData={COLUMN_DATA}
      currentPageNumber={pageNumber}
      defaultPageSize={9}
      handlePageChange={page => setPageNumber(page)}
      rowData={contactsTableData()}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={selectedRowKeys => setSelectedRowKeys(selectedRowKeys)}
    />
  );
};

export default Table;
