import { Component, EventEmitter, OnInit, ViewChild, ElementRef, Input, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.sass']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingredientInput', { static: false}) ingredientInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('unitInput', { static: false }) unitInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientAdded.emit(new Ingredient(
      this.ingredientInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
      this.unitInputRef.nativeElement.value
    ));
  }
}
