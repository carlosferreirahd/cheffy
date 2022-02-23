import React from "react";
import { PieChartOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";

export function SideMenu({
  visible = false,
}) {

  const { Item } = Menu;
  const { Sider } = Layout;

  return (
    <div className="side-menu__container">
      <Sider
        className="side-menu__sider-wrapper"
        width={200}
        collapsed={visible}
      >
        <Menu
          className="side-menu__menu-wrapper"
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
        >
          <Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Item>
        </Menu>
      </Sider>
    </div>
  );
}
