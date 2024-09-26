import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Basket} from "../../models/basket.model";
import {environment} from "../../../environments/environment";
import {BasketsService} from "../../service/baskets.service";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements AfterContentChecked {


  api : string =environment.api;
  baskets: Basket[] = []


  constructor(
    private http: HttpClient,
    private basketsService: BasketsService
  ) { }
  

  ngAfterContentChecked(): void {
    this.getBaskets();
  }


  getBaskets(){
    this.baskets = this.basketsService.baskets;
  }




}
