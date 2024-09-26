import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/products.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  api : string ="http://localhost:3000/"
  product: Product= new Product();
  products: Product[] = [

  ]

  constructor(
    private http: HttpClient,
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

}
