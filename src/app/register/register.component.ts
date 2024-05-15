import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public UserDataCookie!:any
  constructor(private router:Router){}
  formSubmit(form:NgForm){
    this.UserDataCookie = form.value
    localStorage.setItem('userDataCookie' , JSON.stringify(this.UserDataCookie))
    alert("თქვენ წარმატებით დარეგისტრირდით , გადამისამართდებით ავტორიზაციის გვერდზე.")
    this.router.navigate(['/login']);
  }
}
