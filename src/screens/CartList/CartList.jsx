import { Empty, Table } from 'antd';
import React, { useContext } from 'react';
import CartContext from '../../utils/CartContext';

import './CartList.scss';

export function CartList() {
  const { state } = useContext(CartContext);

  const pizzas = state.pizzas;
  const burgers = state.burgers;
  const allFoods = [...pizzas, ...burgers];

  const filterFoods = () => allFoods.filter((v, i, a) => a.findIndex(t => (t.imageSrc === v.imageSrc)) === i);

  const filteredFoods = filterFoods();

  const buildDataSource = () => filteredFoods.map((food) => {
    const count = allFoods.filter(item => item.imageSrc === food.imageSrc).length;
    const newObj = {
      imageSrc: food.imageSrc,
      price: food.price,
      count: count,
    };
    return newObj;
  });

  const dataSource = buildDataSource();

  function renderProduct(imgSrc) {
    return (
      <img
        className="cart-list__product-name"
        src={imgSrc}
        alt="Imagem do produto"
      />
    );
  }

  function renderPrice(price, item) {
    const priceValue = parseFloat(price);
    const count = item.count;
    const finalPrice = priceValue * count;

    return (
      <span>{finalPrice}</span>
    );
  }

  function renderCount(count) {

  }

  const columns = [
    {
      title: 'Produto',
      dataIndex: 'imageSrc',
      key: 'imageSrc',
      width: '30%',
      align: 'center',
      render: renderProduct,
    },
    {
      title: 'Quantidade',
      dataIndex: 'count',
      key: 'count',
      align: 'center',
      width: '30%',
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      width: '30%',
      render: renderPrice,
    }
  ];

  return (
    <div className="cart-list__container">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        locale={{
          emptyText: <Empty description="Nenhum produto no seu carrinho" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }}
      />
    </div>
  );
}
