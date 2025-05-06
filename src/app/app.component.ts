import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { UserService } from './State/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'modern-ecommerce';
  userProfile:any;

  constructor(private router:Router,
    private userService:UserService,
    private store: Store<AppState>
    ){

}

  ngOnInit(): void {
    if(localStorage.getItem("jwt"))
    this.userService.getUserProfile();
    this.store.pipe(select((store)=> store.auth)).subscribe((user)=> {
    
      this.userService.getUserProfile()
      console.log("store", this.store);
      

    })
  }
}
