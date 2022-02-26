import api from "./api"

const FOOD_TYPE = 'pizza';

export const ServicePizzas = {

  getRandomPizza() {
    return api.get(`${FOOD_TYPE}`);
  }

}
