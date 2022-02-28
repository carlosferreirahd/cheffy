import React from "react";
import {
  Routes as Switch,
  Route
} from 'react-router-dom';
import { PizzasList } from "../PizzasList/PizzasList";
import { BurgersList } from "../BurgersList/BurgersList";
import { Page404 } from "../404/Page404";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<PizzasList />} />
      <Route path="/pizzas" element={<PizzasList />} />
      <Route path="/sanduiches" element={<BurgersList />} />
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
}
