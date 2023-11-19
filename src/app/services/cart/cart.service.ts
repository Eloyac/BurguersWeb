import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id)
      return; //para no meter un else
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {

    this.cart.items = this.cart.items.filter(item => item.food.id != foodId); //Cogiendo todo menos el q no queremos

  }

  changeQuantity(foodId: number) {

    let cartItem = this.cart.items.find(item => item.food.id === foodId)!;

    cartItem.quantity = cartItem.quantity + 1;

  }

  getCart(): Cart {

    return this.cart;

  }


}
