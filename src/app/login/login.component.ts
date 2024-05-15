import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public savedUserCookie:any  = localStorage.getItem('userDataCookie')
  constructor(private router:Router){
    if(localStorage.getItem('userIsAuthed')){
      alert("თქვენ უკვე ავტორიზირებული ხართ")
      this.router.navigate(['/'])
    }
  }
  loginUser(form:NgForm){
    let parsedData = JSON.parse(this.savedUserCookie)
    if(parsedData.username == form.value.username && parsedData.password == form.value.password){
      alert("თქვენ წარმატებით გაიარეთ ავტორიზაცია")
      localStorage.setItem('userId', '1')
      localStorage.setItem('userIsAuthed' , 'true')
      localStorage.setItem('userName' , parsedData.username)
      this.router.navigate(['/']);
    }
    else{
      alert("ანგარიშის სახელი ან პაროლი არასწორია !");
    }
  }
}
