import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer';
import { Routes } from '../Routes/Routes';

import './Root.scss'

export function Root() {

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function renderContent() {
    return (
      <div className="root__content">
        <Layout>
          <Header
            isMenuCollapsed={isMenuCollapsed}
            handleMenuClick={setIsMenuCollapsed}
          />
          <Layout>
            <SideMenu visible={isMenuCollapsed} />
            <ContentContainer>
              <Routes />
            </ContentContainer>
          </Layout>
        </Layout>
      </div>
    );
  }

  return (
    <div className="root__root">
      <Router>
        {renderContent()}
      </Router>
    </div>
  );
}
