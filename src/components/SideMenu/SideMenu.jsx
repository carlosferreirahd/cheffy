import React from "react";
import { Menu, Layout } from "antd";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';

import { Link } from "react-router-dom";

import './SideMenu.scss'

export function SideMenu({
  visible = false,
}) {

  const { Item } = Menu;
  const { Sider } = Layout;

  return (
    <div className="side-menu__container">
      <Sider
        width={200}
        collapsed={visible}
        style={{
          overflow: 'auto',
          paddingTop: 65,
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          className="side-menu__menu"
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
        >
          <Item key="1" icon={<FaPizzaSlice />}>
            <Link to="/pizzas">
              Pizzas
            </Link>
          </Item>

          <Item key="2" icon={<FaHamburger />}>
            <Link to="sanduiches">
              Sanduíches
            </Link>
          </Item>
        </Menu>
      </Sider>
    </div>
  );
}
