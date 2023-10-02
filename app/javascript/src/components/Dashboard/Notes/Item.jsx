import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Tag, Tooltip, Typography } from "@bigbinary/neetoui";

import { calculateElapsedTime, formatTime } from "components/utils";

const Item = ({ createdAt, description, id, tags, title }) => (
  <div className="mb-3  w-full rounded-sm border border-solid p-4 shadow-sm">
    <div className="flex justify-between">
      <Typography className="mb-2" style="h4">
        {title}
      </Typography>
      <button>
        <MenuVertical size="15px" />
      </button>
    </div>
    <Typography className="neeto-ui-text-gray-600 mb-2" style="body2">
      {description}
    </Typography>
    <hr />
    <div className="mt-3 flex items-center justify-between">
      <div>
        {tags.map(tag => (
          <Tag className="mr-1" key={`${id}-${tag}`} label={tag} />
        ))}
      </div>
      <Tooltip content={formatTime(createdAt)} position="bottom">
        <div className="flex items-center">
          <span className="mr-1">
            <Clock size="16px" />
          </span>
          <Typography style="body3">
            {calculateElapsedTime(createdAt)}
          </Typography>
        </div>
      </Tooltip>
    </div>
  </div>
);

export default Item;
