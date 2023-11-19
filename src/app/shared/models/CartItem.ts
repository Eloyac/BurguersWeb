import { Food } from './Food';
export class CartItem {

  constructor(food: Food) {
    this.food = food;


  }

  food: Food;
  quantity: number = 1;

  get price(): number { /* A si puedes hacer una funcion que sea una propiedad (Similar a las propiedades derivadas) */
    return this.food.price * this.quantity;
  }

}
