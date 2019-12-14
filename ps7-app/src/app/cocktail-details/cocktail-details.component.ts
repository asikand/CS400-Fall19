import { Component, OnInit } from '@angular/core';
import { Cocktail } from "../models/cocktailModel";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
  }

}
