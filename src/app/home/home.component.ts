import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'E-commerce';
  priceMax: number;
  listProduct: Product[];
  etatProduit: boolean;
  n: number;

  constructor(private calcul: ProductService) { }

  ngOnInit(): void {
    this.listProduct = [];
    this.etatProduit = false;
    this.n = 0;
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
    this.etatProduit = false;
  }

  AfficherProduit(){
    this.etatProduit = true;
  }

  getStat(){
    this.n = this.calcul.getStat(this.listProduct,'quantity', 0);
  }

}
