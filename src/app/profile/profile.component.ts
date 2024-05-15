import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router:Router){
    if(!localStorage.getItem('userIsAuthed')){
      this.router.navigate(['/login'])
    }
  }

  public UserData:any = localStorage.getItem('userDataCookie')
  public ParsedUserData = JSON.parse(this.UserData)
 
  deleteaccount(){
    localStorage.removeItem('userDataCookie')
    localStorage.removeItem('userIsAuthed')
    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
    this.router.navigate(['/'])
  }
  logout(){
    localStorage.removeItem('userIsAuthed')
    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
    this.router.navigate(['/'])
  }
}
