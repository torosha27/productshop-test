import { Component, EventEmitter } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public fetcheddata!: any;
  public products!: any
  public filterProducts: any
  public filteredproducts: any = []
  public cartList: any = [];
  public cartItem: boolean = false;
  public productContainer: boolean = true;
  public isOpenCart: boolean = false;
  public cartAnimation: boolean = false;
  public cartAnimationText: string = ""
  public cartAnimationBackground: string = ""
  public categoriesvisible:boolean = true
  constructor(private httpService: HttpService) {
    this.httpService.getAllProducts().subscribe(data => {
      this.fetcheddata = data
      this.products = this.fetcheddata.products
      this.filterProducts = this.fetcheddata.products
    })
  }
  addToCart(id: number) {
    let index = this.products.indexOf(id)
    this.cartList.push(this.products[index])
    this.cartAnimationBackground = "green"
    this.cartAnimationText = "პროდუქტი დაემატა კალათაში"
    this.cartAnimation = true;
    setTimeout(() => {
      this.cartAnimation = false
    }, 1500);
  }
  showCart() {
    if (this.isOpenCart == false && this.cartList.length !== 0) {
      this.isOpenCart = true
      this.cartItem = true
      this.productContainer = false
      this.categoriesvisible = false
    }
    else if (this.isOpenCart == true) {
      this.isOpenCart = false
      this.cartItem = false
      this.productContainer = true
      this.categoriesvisible = true
    }

    else if(this.cartList.length == 0){
      alert("კალათა ცარიელია")
    }
  }
  hideCart() {
    this.cartItem = false
  }
  deleteProduct(product: any) {
    let index = this.cartList.indexOf(product)
    this.cartList.splice(index, 1)
    this.cartAnimationBackground = "red"
    this.cartAnimationText = "პროდუქტი წაიშალა კალათიდან"
    this.cartAnimation = true;
    setTimeout(() => {
      this.cartAnimation = false
    }, 1500);
  }
  filter(category: string) {
    this.filteredproducts = []
    if (category == 'all') {
      this.products = this.filterProducts
    }
    else {
      for (let i = 0; i < this.filterProducts.length; i++) {
        if (this.filterProducts[i].category == category) {
          this.filteredproducts.push(this.filterProducts[i])
        }
      }
      this.products = this.filteredproducts
      console.log(this.filteredproducts)
    }
  }
}
