import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent {



constructor(private router : Router){
  
}


  navigateToOrderDetails =(id:Number)=>{
    this.router.navigate([`orders/${id}`])

  }

}
