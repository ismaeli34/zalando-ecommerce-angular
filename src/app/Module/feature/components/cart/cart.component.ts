import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {



  cart:any =[1,1,1]
  constructor(private router:Router){

  }

  navigateToCheckout(){
    this.router.navigate(["checkout"])

  }
     

}
