import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Torresmo', 200),
    new Ingredient('Couve', 150),
    new Ingredient('Tutu', 300),
  ];

  constructor() { }

  ngOnInit() {
  }

}
