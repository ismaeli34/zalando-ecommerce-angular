import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  addresses=[1,1,1];
  constructor(private formBuilder:FormBuilder){
    
  }
  myForm:FormGroup = this.formBuilder.group({
    firstName:["", Validators.required],
    lastName:["",Validators.required],
    streetaddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipcode:["",Validators.required],
    mobile:["",Validators.required]

  })


  handleCreateOrder(item:any){

  }

  handleSubmit=()=>{
    const formValue = this.myForm.value
    console.log("form data",formValue);
    
  }

}
