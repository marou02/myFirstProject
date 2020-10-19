import {Component, Output, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product;
  @Output() eventAddProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
  }

  save(){
    this.product.like = 0;
    this.product.price = 25;
    this.eventAddProduct.emit(this.product);
    console.log(this.product);
   }

}
