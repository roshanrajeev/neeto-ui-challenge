import React, { useState } from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Alert, Avatar, Tag, Tooltip, Typography } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import Dropdown from "components/commons/Dropdown";

import { calculateElapsedTime, formatTimeForTooltip } from "../utils";

const Item = ({ note, onDelete }) => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-col gap-y-2 rounded-sm border border-solid p-4 shadow-sm">
        <div className="flex justify-between">
          <Typography style="h4">{note.title}</Typography>
          <Dropdown
            iconType="vertical"
            onDelete={() => setIsDeleteAlertOpen(true)}
          />
        </div>
        <Typography className="neeto-ui-text-gray-600" style="body2">
          {note.description}
        </Typography>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex gap-x-1">
            {note.tags.map(tag => (
              <Tag key={tag.value} label={tag.label} />
            ))}
          </div>
          <Tooltip
            content={formatTimeForTooltip(note.createdAt)}
            position="bottom"
          >
            <div className="flex items-center gap-x-1">
              <Clock size="16px" />
              <Typography style="body3">
                {note.status} {calculateElapsedTime(note.createdAt)}
              </Typography>
              <Avatar size="small" />
            </div>
          </Tooltip>
        </div>
      </div>
      <Alert
        isOpen={isDeleteAlertOpen}
        message={t("delete_alert.entity_message", { entity: "note" })}
        submitButtonLabel={t("continue")}
        title={t("delete_alert.entity_title", { entity: "Note" })}
        onClose={() => setIsDeleteAlertOpen(false)}
        onSubmit={() => onDelete(note.id)}
      />
    </>
  );
};

export default Item;
