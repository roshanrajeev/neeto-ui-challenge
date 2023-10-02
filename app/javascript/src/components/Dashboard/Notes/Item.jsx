import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Tag, Typography } from "@bigbinary/neetoui";

import { calculateElapsedTime } from "components/utils";

const Item = ({ title, description, tags, id, createdAt }) => (
  <div className="mb-3  w-full rounded-sm border border-solid p-4 shadow-sm">
    <Typography className="mb-2" style="h4">
      {title}
    </Typography>
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
      <div className="flex items-center">
        <span className="mr-1">
          <Clock size="16px" />
        </span>
        <Typography style="body3">{calculateElapsedTime(createdAt)}</Typography>
      </div>
    </div>
  </div>
);

export default Item;
