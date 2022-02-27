import React from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Tooltip, Layout } from "antd";

import './Header.scss';

const { Header: AntdHeader } = Layout;

export function Header({
  isMenuCollapsed,
  handleMenuClick,
}) {

  return (
    <AntdHeader className="header__content" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="header__content-left">
        <Tooltip
          title={isMenuCollapsed ? "Mostrar menu" : "Esconder menu"}
          placement="bottom"
        >
          <MenuOutlined onClick={() => handleMenuClick(isOpen => !isOpen)} />
        </Tooltip>
        <span id="pizzeria-name">CHEFFY</span>
      </div>
      <SearchOutlined />
    </AntdHeader>
  );
}
