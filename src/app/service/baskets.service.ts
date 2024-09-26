import { Injectable } from '@angular/core';
import {Basket} from "../models/basket.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BasketsService {

  api : string =environment.api;

  baskets: Basket[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.getBasketsList();
  }

  deleteBasket(id: number) {
    this.http.delete<any>(this.api+"baskets/" + id).subscribe({
      next: (res) => {this.getBasketsList()},
      error: (err) => console.log(err)
    })
  }

  getBasketsList() {
    this.http.get<any>(this.api + 'baskets').subscribe({
      next: (res) => this.baskets = res,
      error: (err) => console.log(err)
    })
  }

}
