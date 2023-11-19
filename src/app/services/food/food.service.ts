import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {

    return this.getAll().find(food => food.id == id)!;

  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'KEVIN BACON',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['bacon', 'cheese', 'pulled pork'],
        stars: 4.5,
        imgUrl: '../../../assets/images/foods/hamburger-1.jpg',
        tags: [''],
      },
      {
        id: 2,
        name: 'KEVIN NARA',
        price: 20,
        cookTime: '10-15',
        favorite: true,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 4.7,
        imgUrl: '../../../assets/images/foods/hamburger-2.jpg',
        tags: [''],
      },
      {
        id: 3,
        name: 'BY THE BUEY',
        price: 12,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.5,
        imgUrl: '../../../assets/images/foods/hamburger-3.jpg',
        tags: [''],
      },
      {
        id: 4,
        name: 'KEVIN SERRANA',
        price: 16,
        cookTime: '10-15',
        favorite: true,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.3,
        imgUrl: '../../../assets/images/foods/hamburger-4.jpg',
        tags: [''],
      },
      {
        id: 5,
        name: 'KEVIN COSTNER',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.0,
        imgUrl: '../../../assets/images/foods/hamburger-5.jpg',
        tags: [''],
      },
      {
        id: 6,
        name: 'KEVIN CHICK',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.0,
        imgUrl: '../../../assets/images/foods/hamburger-6.jpg',
        tags: [''],
      },
      {
        id:7,
        name: 'BOMBA SEXY',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.0,
        imgUrl: '../../../assets/images/foods/hamburger-7.jpg',
        tags: [''],
      },
      {
        id: 8,
        name: 'YANKEE',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.0,
        imgUrl: '../../../assets/images/foods/hamburger-8.jpg',
        tags: [''],
      },
      {
        id: 9,
        name: 'BABAY YANKEE',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.0,
        imgUrl: '../../../assets/images/foods/hamburger-9.jpg',
        tags: [''],
      },
      {
        id: 10,
        name: 'CHIPOTLE',
        price: 11,
        cookTime: '10-15',
        favorite: false,
        origins: ['cheese', 'onion', 'tomato', 'pickle'],
        stars: 3.0,
        imgUrl: '../../../assets/images/foods/hamburger-10.jpg',
        tags: [''],
      }

    ]
  }
}

