import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  @Input() changeTemplate:any;

  constructor(private formBuilder: FormBuilder,
     private store:Store, private authService: AuthService){

     }

    registerForm:FormGroup = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

    submitForm(){
      console.log("hello");
      
      if(this.registerForm.valid){
        this.authService.login(this.registerForm.value)
        console.log("login reqeust data", this.registerForm.value);
        
      }
    }
}
