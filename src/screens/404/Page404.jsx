import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Desculpe, esta página não existe."
      extra={
        <Link to="/">
          <Button type="primary">
            Voltar para a página inicial
          </Button>
        </Link>
      }
    />
  );
}
