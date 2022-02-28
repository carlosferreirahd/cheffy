import React from "react";
import { Card } from "../../components/Card/Card";

import './BurgersList.scss';

export function BurgersList() {

  const CARDS_COUNT = 30;

  return (
    <div className="burgers-list__container">
      <div className="burgers-list__content">
        {[...Array(CARDS_COUNT)].map((e, i) => <Card key={i} foodType="burger" />)}
      </div>
    </div>
  );
}
