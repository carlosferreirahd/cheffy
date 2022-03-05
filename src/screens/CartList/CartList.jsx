import React, { useContext } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Empty, Table, Typography } from 'antd';
import CartContext from '../../utils/CartContext';

import './CartList.scss';

const { Title, Paragraph } = Typography;

export function CartList() {
  const { state, setState } = useContext(CartContext);

  const pizzas = state.pizzas;
  const burgers = state.burgers;
  const allFoods = [...pizzas, ...burgers];

  const filterFoods = () => allFoods.filter((v, i, a) => a.findIndex(t => (t.imageSrc === v.imageSrc)) === i);

  const filteredFoods = filterFoods();

  const buildDataSource = () => filteredFoods.map((food, key) => {
    const count = allFoods.filter(item => item.imageSrc === food.imageSrc).length;
    const newObj = {
      key: key,
      imageSrc: food.imageSrc,
      price: food.price,
      type: food.type,
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
    const N_DECIMALS = 2;
    const finalPrice = (priceValue * count).toFixed(N_DECIMALS);

    return (
      <span>{finalPrice}</span>
    );
  }

  function renderCount(count, item) {
    return (
      <div className="cart-list__product-count">
        <Button
          htmlType="button"
          icon={<PlusOutlined />}
          onClick={() => addNewItemToState(item)}
        />

        <span>{count}</span>

        <Button
          htmlType="button"
          icon={<MinusOutlined />}
          onClick={() => removeItemFromState(item)}
        />
      </div>
    );
  }

  function addNewItemToState(item) {
    if (item.type === 'pizza') {
      setState({
        ...state,
        pizzas: [...state.pizzas, item],
      });
    } else {
      setState({
        ...state,
        burgers: [...state.burgers, item],
      });
    }
  }

  function removeItemFromState(item) {
    const removeSingleInstance = (arr, elem) => {
      let newArr = [];
      let counter = 1;
      arr.forEach((val) => {
        if (val.imageSrc === elem.imageSrc && counter > 0) {
          counter = counter - 1;
        } else {
          newArr.push(val);
        }
      });
      return newArr;
    }

    if (item.count > 0) {
      if (item.type === 'pizza') {
        const newPizzasArray = removeSingleInstance(pizzas, item);
        setState({
          ...state,
          pizzas: newPizzasArray,
        });
      } else {
        const newBurgersArray = removeSingleInstance(burgers, item);
        setState({
          ...state,
          burgers: newBurgersArray,
        });
      }
    }
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
      render: renderCount,
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

  const isEmpty = dataSource.length === 0;

  const getFinalPrice = () => {
    let priceCounter = 0.0;

    dataSource.forEach((elem) => {
      const elemSinglePrice = elem.price;
      const elemCount = elem.count;
      const elemPrice = elemSinglePrice * elemCount;
      priceCounter = priceCounter + elemPrice;
    });

    const N_DECIMALS = 2;
    const finalPrice = (priceCounter).toFixed(N_DECIMALS);

    return finalPrice;
  }

  return (
    <div className="cart-list__container">
      {!isEmpty && (
        <div className="cart-list__final-price-container">
          <Paragraph>
            <blockquote>
              <Title level={3}>
                Preço final: R${getFinalPrice()}
              </Title>
            </blockquote>
          </Paragraph>
        </div>
      )}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        locale={{
          emptyText: (
            <Empty
              description="Nenhum produto no seu carrinho"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          )
        }}
      />
    </div>
  );
}
