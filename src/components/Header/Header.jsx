import React from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

import './Header.scss';
import { Tooltip } from "antd";

export function Header({
  isMenuCollapsed,
  handleMenuClick,
}) {

  return (
    <header className="header__content">
      <div className="header__content-left">
        <Tooltip
          title={isMenuCollapsed ? "Mostrar menu" : "Esconder menu"}
          placement="topRight"
        >
          <MenuOutlined onClick={() => handleMenuClick(isOpen => !isOpen)} />
        </Tooltip>
        <span id="pizzeria-name">CHEFFY</span>
      </div>
      <SearchOutlined />
    </header>
  );
}
