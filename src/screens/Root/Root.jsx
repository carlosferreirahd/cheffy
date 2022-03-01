import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer';
import { Routes } from '../Routes/Routes';

import './Root.scss'
import { CartContextProvider } from '../../utils/CartContext';

export function Root() {

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function renderContent() {
    return (
      <div className="root__content">
        <Layout hasSider>
          <SideMenu visible={isMenuCollapsed} />
          <Layout className="site-layout" style={{ marginLeft: -2 }}>
            <Header
              isMenuCollapsed={isMenuCollapsed}
              handleMenuClick={setIsMenuCollapsed}
            />
            <ContentContainer isMenuCollapsed={isMenuCollapsed}>
              <Routes />
            </ContentContainer>
          </Layout>
        </Layout>
      </div>
    );
  }

  return (
    <div className="root__root">
      <CartContextProvider>
        <Router>
          {renderContent()}
        </Router>
      </CartContextProvider>
    </div>
  );
}
