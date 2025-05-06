import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  orders:any=[1,1,1]

  steps=[
    {id:0,title:'PLACED',isCompleted:true},
    {id:1,title:'CONFIRMED',isCompleted:true},
    {id:2,title:'SHIPPED',isCompleted:false},
    {id:3,title:'DELIVERED',isCompleted:false}

  ]

}
