import React from 'react';
import { Card } from '../../components/Card/Card';

import './PizzasList.scss'

export function PizzasList() {

  const CARDS_COUNT = 30;

  return (
    <div className="pizzas-list__container">
      <div className="pizzas-list__content">
        {[...Array(CARDS_COUNT)].map((e, i) => <Card key={i} />)}
      </div>
    </div>
  );
}
