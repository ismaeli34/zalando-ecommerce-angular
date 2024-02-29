import { Component, OnInit } from '@angular/core';
import { menJeans } from 'src/Data/Men/men_jeans';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import {lehngacholiPage2} from 'src/Data/Saree/lenghaCholiPage2';import { mensShoesPage1 } from 'src/Data/shoes';
import { mens_kurta } from 'src/Data/Men/men_kurta';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  menJeans:any;
  womenGowns:any;
  lehengaChowli:any;
  mensKurta:any;
  mensShoes:any;

  ngOnInit(): void {

    this.menJeans = menJeans.slice(0,4);
    this.womenGowns = gounsPage1.slice(0,4);
    this.lehengaChowli = lehngacholiPage2.slice(0,4);
    this.mensShoes = mensShoesPage1.slice(0,4);
    this.mensKurta = mens_kurta.slice(0,4);
  }




}
