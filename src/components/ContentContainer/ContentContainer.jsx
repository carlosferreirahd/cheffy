import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export function ContentContainer(props) {
  return (
    <Content>
      {props.children}
    </Content>
  );
}
