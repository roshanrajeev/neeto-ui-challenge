import React from "react";

import { Button } from "@bigbinary/neetoui";
import { Header as NeetoUIHeader } from "@bigbinary/neetoui/layouts";
import propTypes from "prop-types";

import { noop } from "components/utils";

const Header = ({ onActionButtonClick = noop, actionButtonLabel, title }) => (
  <NeetoUIHeader
    title={title}
    actionBlock={
      <Button
        icon="ri-add-line"
        label={actionButtonLabel}
        size="small"
        onClick={onActionButtonClick}
      />
    }
    searchProps={{
      value: "",
      onChange: noop,
      unlimitedChars: false,
    }}
  />
);

Header.propTypes = {
  title: propTypes.string.isRequired,
  onActionButtonClick: propTypes.func,
  actionButtonLabel: propTypes.string.isRequired,
};

export default Header;
