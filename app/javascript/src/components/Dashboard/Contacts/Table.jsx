import React, { useState } from "react";

import { Alert, Table as NeetoUITable, Toastr } from "@bigbinary/neetoui";
import { Trans, useTranslation } from "react-i18next";

import { CONTACTS_TABLE_DATA } from "./constants";
import { buildContactsTableColumnData } from "./utils";

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const { t } = useTranslation();

  const handleDelete = () => {
    setIsDeleteAlertOpen(false);
    Toastr.success(t("toasts.deletedEntity", { entity: "Contact" }));
  };

  const handleDeleteAlertOpen = contact => {
    setSelectedContact(contact);
    setIsDeleteAlertOpen(true);
  };

  const handleDeleteAlertClose = () => {
    setSelectedContact({});
    setIsDeleteAlertOpen(false);
  };

  return (
    <>
      <NeetoUITable
        rowSelection
        currentPageNumber={pageNumber}
        defaultPageSize={9}
        handlePageChange={page => setPageNumber(page)}
        rowData={CONTACTS_TABLE_DATA}
        selectedRowKeys={selectedRowKeys}
        columnData={buildContactsTableColumnData({
          onContactDelete: handleDeleteAlertOpen,
        })}
        onRowSelect={selectedRowKeys => setSelectedRowKeys(selectedRowKeys)}
      />
      <Alert
        isOpen={isDeleteAlertOpen}
        submitButtonLabel={t("continue")}
        title={t("deleteAlert.entityTitle", { entity: "Contact" })}
        message={
          <Trans
            components={{ strong: <span className="font-bold" /> }}
            i18nKey="deleteAlert.entityMessage"
            values={{ entity: "contact", label: selectedContact.name }}
          />
        }
        onClose={handleDeleteAlertClose}
        onSubmit={handleDelete}
      />
    </>
  );
};

export default Table;
