import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Basket} from "../../models/basket.model";
import {BasketsService} from "../../service/baskets.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements AfterContentChecked {

  baskets: Basket[] = [];


  constructor(
    private basketService: BasketsService,
  ) { }


  ngAfterContentChecked(): void {
    this.baskets = this.basketService.baskets;
  }

  deleteBasket(id: number) {
    this.basketService.deleteBasket(id);
  }



}
