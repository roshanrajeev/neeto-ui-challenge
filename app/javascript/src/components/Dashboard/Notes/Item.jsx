import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Avatar, Tag, Tooltip, Typography } from "@bigbinary/neetoui";

import { calculateElapsedTime, formatTimeForTooltip } from "./utils";

const Item = ({ note }) => (
  <div className="flex w-full flex-col gap-y-2 rounded-sm border border-solid p-4 shadow-sm">
    <div className="flex justify-between">
      <Typography style="h4">{note.title}</Typography>
      <button>
        <MenuVertical size="15px" />
      </button>
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
      <Tooltip content={formatTimeForTooltip(note.createdAt)} position="bottom">
        <div className="flex items-center gap-x-1">
          <Clock size="16px" />
          <Typography style="body3">
            {status} {calculateElapsedTime(note.createdAt)}
          </Typography>
          <Avatar size="small" />
        </div>
      </Tooltip>
    </div>
  </div>
);

export default Item;
