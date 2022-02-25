import React from "react";
import { Menu, Layout } from "antd";
import { FaPizzaSlice } from 'react-icons/fa';
import { BsCupStraw } from 'react-icons/bs';

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
      >
        <Menu
          className="side-menu__menu"
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
        >
          <Item key="1" icon={<FaPizzaSlice />}>
            Pizzas
          </Item>

          <Item key="2" icon={<BsCupStraw />}>
            Bebidas
          </Item>
        </Menu>
      </Sider>
    </div>
  );
}
