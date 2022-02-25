import React, { useState } from 'react';
import { Layout } from 'antd';

import { Header } from '../../components/Header/Header';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer';

import './Root.scss'
import { Routes } from '../Routes/Routes';
import { Router } from 'react-router-dom';

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

            </ContentContainer>
          </Layout>
        </Layout>
      </div>
    );
  }

  return (
    <div className="root__root">
      {renderContent()}
    </div>
  );
}
