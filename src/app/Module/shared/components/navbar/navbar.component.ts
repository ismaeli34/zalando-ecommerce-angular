import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AuthComponent } from 'src/app/Module/auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private router:Router,
              private dialog: MatDialog){

  }

  currentSection:any;
  isNavbarContentOpen:any
  
  openNavbarContent(section:any){
    this.isNavbarContentOpen=true;
    this.currentSection=section;
  }

  closeNavBarContent(){
    this.isNavbarContentOpen=false;
  }
  navigateTo(path:any){
    
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

}
