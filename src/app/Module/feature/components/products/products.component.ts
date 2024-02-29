import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import {ThemePalette} from '@angular/material/core';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

filterData:any;
checked:any;
singleFilterData:any;
menPants:any;

constructor(private router:Router,
            private activatedRoute:ActivatedRoute){

}

ngOnInit(){
  this.filterData = filters;
  this.singleFilterData = singleFilter;
  this.menPants = mensPantsPage1;
}

handleMultipleSelectFilter(value:string, sectionId:string){
  console.log("value", value);
  console.log("section id",sectionId);
  
  const queryParams={...this.activatedRoute.snapshot.queryParams};
  console.log("query params",queryParams);
  const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];

  const valueIndex=filterValues.indexOf(value);
  console.log("valueIndex", valueIndex);
  

  if(valueIndex!=-1){
    filterValues.splice(valueIndex, 1)
    console.log("value on splicing", filterValues);

  }else{
    filterValues.push(value);
    console.log("value after push", filterValues);

  }

  

  if(filterValues.length >0){
    queryParams[sectionId]=filterValues.join(",")
  }else{
    delete queryParams[sectionId];
  }


  this.router.navigate([],{queryParams});

}

handleSingleSelectFilter(value:string,sectionId:string){
  const queryParams={...this.activatedRoute.snapshot.queryParams};
  queryParams[sectionId]=value;
  this.router.navigate([],{queryParams});

  console.log(queryParams);
  
}

navigate(path:string){
  this.router.navigate([path]);
}




}
