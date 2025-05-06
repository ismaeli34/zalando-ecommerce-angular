import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input()showButton:any;

  constructor(){

  }

  updateCartItem(num:Number){
    console.log("num",num)
     
  }
  removeCartItem(){
    console.log("remove cart item")

  }

}
