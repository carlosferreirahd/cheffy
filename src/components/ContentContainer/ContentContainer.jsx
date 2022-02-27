import React from 'react';
import { Layout } from 'antd';

import './ContentContainer.scss';

const { Content } = Layout;

export function ContentContainer(props) {
  return (
    <Content>
      <div
        className="site-layout-background"
        style={props.isMenuCollapsed ? { paddingLeft: '100px' } : { paddingLeft: '200px' }}
      >
        {props.children}
      </div>
    </Content>
  );
}
