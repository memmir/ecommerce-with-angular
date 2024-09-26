import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/products.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Basket} from "../../models/basket.model";
import {BasketsService} from "../../service/baskets.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  api : string =environment.api;
  product: Product= new Product();
  products: Product[] = [

  ]

  constructor(
    private http: HttpClient,
    private basketsService: BasketsService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.http.get<any>(this.api + 'products').subscribe({
      next: (res) => this.products = res,
      error: (err) => console.log(err)
    })
  }

  createProduct(): void {
    this.http.post<any>(this.api + "products", this.product).subscribe({
     next: (res) => {
       this.getProductList();
       this.product = new Product();
     },
      error: (err) => console.log(err)
    })
  }

  addToCart(model: Product): void {
    this.http.post<any>(this.api + "baskets", model).subscribe({
      next: (res) => {
        console.log("Added to cart")
        this.getBasketsList();
      },
      error: (err) => console.log(err)
    })
  }

  getBasketsList() {
    this.http.get<any>(this.api + 'baskets').subscribe({
      next: (res) => this.basketsService.baskets = res,
      error: (err) => console.log(err)
    })
  }

}
