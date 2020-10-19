import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'E-commerce';
  priceMax: number;
  listProduct: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct = [];
  }
  incrementLike(product: Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].like++;
  }
  decQuant(i){
    this.listProduct[i].quantity--;
  }

  addProduct(p: Product){
    this.listProduct.push(p);
    console.log(this.listProduct);
  }


}
