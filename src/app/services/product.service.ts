import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is description', 100),
    new Product(2, 'Product 2', 'This is description', 200),
    new Product(3, 'Product 3', 'This is description', 300),
    new Product(4, 'Product 4', 'This is description', 250),
    new Product(5, 'Product 5', 'This is description', 150),
    new Product(6, 'Product 6', 'This is description', 310),
    new Product(7, 'Product 7', 'This is description', 400),
    new Product(8, 'Product 8', 'This is description', 400)
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
