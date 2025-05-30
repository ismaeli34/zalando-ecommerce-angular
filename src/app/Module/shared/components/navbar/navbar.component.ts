import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AuthComponent } from 'src/app/Module/auth/auth.component';
import { UserService } from 'src/app/State/User/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentSection:any;
  isNavbarContentOpen:any
  userProfile:any;

  constructor(private router:Router,
              private dialog: MatDialog,
              private userService:UserService,
              private store: Store<AppState>
              ){

  }
  ngOnInit(): void {
    if(localStorage.getItem("jwt"))
    this.userService.getUserProfile();
    this.store.pipe(select((store)=> store.user)).subscribe((user)=> {
      this.userProfile = user.userProfile;
      if(user.userProfile){
        this.dialog.closeAll();
      }
      console.log("user ",user);
      
    })
  }


  
  openNavbarContent(section:any){
    this.isNavbarContentOpen=true;
    this.currentSection=section;
  }

  closeNavBarContent(){
    this.isNavbarContentOpen=false;
  }
  navigateTo(path:any){
    this.router.navigate([path]);
    
  }



  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent){
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;
    openButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton = true;
      }

    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavBarContent();
    } 

  }


  handleOpenLoginModal =()=>{
    console.log("handle open login module");
    this.dialog.open(AuthComponent,{
      width:"700px",
      disableClose:false
    })
  }

  handleLogout =()=>{
    this.userService.logout();
  }
 

}
