import api from "./api"

export const ServiceFoods = {

  getRandomFood(FOOD_TYPE = 'pizza' /*default food*/) {
    return api.get(`${FOOD_TYPE}`);
  }

}
