import React, { useState } from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import {
  Alert,
  Avatar,
  Dropdown,
  Tag,
  Tooltip,
  Typography,
} from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import { calculateElapsedTime, formatTimeForTooltip } from "./utils";

const Item = ({ note, onDelete }) => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const { t } = useTranslation();

  const { Menu, MenuItem } = Dropdown;

  return (
    <>
      <div className="flex w-full flex-col gap-y-2 rounded-sm border border-solid p-4 shadow-sm">
        <div className="flex justify-between">
          <Typography style="h4">{note.title}</Typography>
          <Dropdown
            buttonStyle="text"
            icon={() => <MenuVertical size="15px" />}
          >
            <Menu>
              <MenuItem.Button>{t("edit")}</MenuItem.Button>
              <MenuItem.Button onClick={() => setIsDeleteAlertOpen(true)}>
                {t("delete")}
              </MenuItem.Button>
            </Menu>
          </Dropdown>
        </div>
        <Typography className="neeto-ui-text-gray-600" style="body2">
          {note.description}
        </Typography>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex gap-x-1">
            {note.tags.map(tag => (
              <Tag key={`${note.id}-${tag}`} label={tag} />
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
        message={t("note_delete_alert.message")}
        submitButtonLabel={t("continue")}
        title={t("note_delete_alert.title")}
        onClose={() => setIsDeleteAlertOpen(false)}
        onSubmit={() => onDelete(note.id)}
      />
    </>
  );
};

export default Item;
