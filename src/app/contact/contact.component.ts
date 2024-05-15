import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router:Router){}
  submitForm(form:NgForm){
    alert("თქვენი კონტაქტი წარმატებით გაიგზავნა ადმინისტრაციასტან , 3 წამში გადამისამართებით მთავარ გვერდზე")
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);
  }
}
