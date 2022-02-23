import React, { useState } from 'react';
import { Layout } from 'antd';
import { Header } from '../components/Header/Header';

import './Root.scss'
import { SideMenu } from '../components/SideMenu/SideMenu';

export function Root() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function renderContent() {
    return (
      <div className="root__content">
        <Layout>
          <Header handleMenuClick={setIsMenuOpen} />
          <Layout>
            <SideMenu visible={isMenuOpen} />
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
