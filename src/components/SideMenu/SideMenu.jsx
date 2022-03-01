import React, { useContext } from "react";
import { Menu, Layout, Badge } from "antd";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg'

import { Link } from "react-router-dom";

import CartContext from "../../utils/CartContext";

import './SideMenu.scss'

export function SideMenu({
  visible = false,
}) {

  const { Item } = Menu;
  const { Sider } = Layout;

  const { state } = useContext(CartContext);
  const count = state.pizzas.length + state.burgers.length;

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
              <span>Pizzas</span>
            </Link>
          </Item>

          <Item key="2" icon={<FaHamburger />}>
            <Link to="sanduiches">
              <span>Sanduíches</span>
            </Link>
          </Item>

          <Item key="3" icon={<CgShoppingCart />}>
            <Link to="carrinho">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Carrinho</span>
                <Badge count={count} />
              </div>
            </Link>
          </Item>

        </Menu>
      </Sider>
    </div>
  );
}
