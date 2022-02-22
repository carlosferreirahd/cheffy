import React from 'react';
import { Header } from '../components/Header/Header';

import './Root.scss'
import 'antd/dist/antd.css';

export function Root() {

  function renderContent() {
    return (
      <div className="root__content">
        <Header />
      </div>
    );
  }

  return (
    <div className="root__root">
      {renderContent()}
    </div>
  );
}
