import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/products.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: Product= new Product();

  products: Product[] = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.products.push(this.product);
    this.product = new Product();
  }

}
