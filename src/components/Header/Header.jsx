import React from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

import './Header.scss';

export function Header({
  handleMenuClick
}) {

  return (
    <header className="header__content">
      <div className="header__content-left">
        <MenuOutlined onClick={() => handleMenuClick(isOpen => !isOpen)} />
        <span id="pizzeria-name">CHEFFY</span>
      </div>
      <SearchOutlined />
    </header>
  );
}
