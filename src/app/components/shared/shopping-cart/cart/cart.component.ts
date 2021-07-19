import { Product } from './../../../../models/product';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
   //{ id: 1, produstId: 1, productName: 'test1', qty: 4, price: 100},
   //{ id: 2, produstId: 2, productName: 'test2', qty: 5, price: 200},
  //{ id: 3, produstId: 3, productName: 'test3', qty: 3, price: 150},
  //{ id: 4, produstId: 4, productName: 'test4', qty: 2, price: 300},
  ] as any;

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): any {

    this.msg.getMsg().subscribe((product: any) => {

      for(let i in this.cartItems) {
        this.cartItems[i].id ===product.id
      }

      this.cartItems.push({
        productName: product.name,
        qty: 1,
        price: product.price
      })

      this.cartTotal = 0
      this.cartItems.forEach((item: { qty: number; price: number; }) => {
        this.cartTotal += (item.qty * item.price)
      })
    })

  }

}
