import React from "react";

import { MenuHorizontal, MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown as NeetoUIDropdown } from "@bigbinary/neetoui";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { noop } from "components/utils";

import { DROPDOWN_DEFAULT_ICON_TYPE, DROPDOWN_ICON_TYPES } from "./constants";

const Dropdown = ({
  onDelete = noop,
  onEdit = noop,
  iconType = DROPDOWN_DEFAULT_ICON_TYPE,
  size = "15px",
}) => {
  const { Menu, MenuItem } = NeetoUIDropdown;
  const { t } = useTranslation();

  return (
    <NeetoUIDropdown
      buttonStyle="text"
      icon={() =>
        iconType === "vertical" ? (
          <MenuVertical size={size} />
        ) : (
          <MenuHorizontal size={size} />
        )
      }
    >
      <Menu>
        <MenuItem.Button onClick={onEdit}>{t("edit")}</MenuItem.Button>
        <MenuItem.Button onClick={onDelete}>{t("delete")}</MenuItem.Button>
      </Menu>
    </NeetoUIDropdown>
  );
};

Dropdown.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  iconType: PropTypes.oneOf(DROPDOWN_ICON_TYPES),
};

export default Dropdown;
