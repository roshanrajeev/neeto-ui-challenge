import React, { useState } from "react";

import { Alert, Table as NeetoUITable, Toastr } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import { CONTACTS_TABLE_DATA } from "./constants";
import { buildContactsTableColumnData } from "./utils";

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  const { t } = useTranslation();

  const handleDelete = () => {
    setIsDeleteAlertOpen(false);
    Toastr.success(t("toasts.deleted_entity", { entity: "Contact" }));
  };

  const handleDeleteAlertOpen = () => setIsDeleteAlertOpen(true);
  const handleDeleteAlertClose = () => setIsDeleteAlertOpen(false);

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
        message={t("delete_alert.entity_message", { entity: "contact" })}
        submitButtonLabel={t("continue")}
        title={t("delete_alert.entity_title", { entity: "Contact" })}
        onClose={handleDeleteAlertClose}
        onSubmit={handleDelete}
      />
    </>
  );
};

export default Table;
