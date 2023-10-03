import React, { useState } from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import {
  Avatar,
  Dropdown,
  Table as NeetoUITable,
  Typography,
} from "@bigbinary/neetoui";

import { contactsTableData } from "./utils";

const ROW_DATA = contactsTableData();

const COLUMN_DATA = [
  {
    title: "Name & Role",
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
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
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
            <MenuItem.Button>Edit</MenuItem.Button>
            <MenuItem.Button>Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      );
    },
  },
];

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <NeetoUITable
      rowSelection
      columnData={COLUMN_DATA}
      currentPageNumber={pageNumber}
      defaultPageSize={9}
      handlePageChange={page => setPageNumber(page)}
      rowData={ROW_DATA}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={selectedRowKeys => setSelectedRowKeys(selectedRowKeys)}
    />
  );
};

export default Table;
