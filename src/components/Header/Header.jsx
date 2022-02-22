import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";

import './Header.scss';

export function Header() {

  return (
    <header className="header__content">
      <div className="header__content-left">
        <MenuOutlined />
        <span id="pizzeria-name">CHEFFY</span>
      </div>
      <SearchOutlined />
    </header>
  );
}
