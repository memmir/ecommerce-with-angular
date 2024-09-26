import { Injectable } from '@angular/core';
import {Basket} from "../models/basket.model";

@Injectable({
  providedIn: 'root'
})
export class BasketsService {

  baskets: Basket[] = [];
  constructor() { }
}
