import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeChosen = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Bananada',
      'Teste Numero Um',
      'https://www.mambo.com.br/ccstore/v1/images/?source=/file/v109599628857528766/products/131506.jpg'
      ),
    new Recipe(
      'Pássaro de Frango',
      'Passaro de frango testando um dois tres',
      'https://www.mambo.com.br/ccstore/v1/images/?source=/file/v109599628857528766/products/131506.jpg'
      ),
    new Recipe(
      'Virado à Mineira',
      'Depoooois vem a bananada...',
      // tslint:disable-next-line: max-line-length
      'https://s2.glbimg.com/v27EtFIARlcOXRmkJVfQjadfFjw=/0x0:200x134/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/33/41/246/Virado_a_Paulista_empratado_2.jpg'
      )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeChosen.emit(recipeItem);
  }
}
