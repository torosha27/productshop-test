import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  class!:any
  showclass!:any
  navbarisSlided:boolean = false
  slidenav(){
    if(this.navbarisSlided == false){
      this.navbarisSlided = true
      this.showclass = "show-nav"
      this.class = 'right'
      setTimeout(() => {
        this.class = 'left'
      }, 300);
    }
    else if(this.navbarisSlided == true){
      this.navbarisSlided = false
      this.class = 'right'
      setTimeout(() => {
        this.showclass = ''
      }, 300);
    }
  }
}
