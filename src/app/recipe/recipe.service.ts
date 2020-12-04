import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Shnitzel',
      'A super Tsaty Shnitzel AWESOME',
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Wiener_Schnitzel_2012.jpg',
      [new Ingredient('Meat', 1), new Ingredient('flour', 20)]
    ),
    new Recipe(
      'Big FAT BURGER',
      'This is so cool yummy',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BK_Whopper.JPG/1280px-BK_Whopper.JPG',
      [
        new Ingredient('fish', 1),
        new Ingredient('fries', 20),
        new Ingredient('conchi', 20),
      ]
    ),
  ];
  constructor(private shoppingService: ShoppingService) {}
  getRecipe() {
    return this.recipes.slice();
  }
  getRec(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShop(ingredients: Ingredient[]): void {
    this.shoppingService.addIngredients(ingredients);
  }
}
