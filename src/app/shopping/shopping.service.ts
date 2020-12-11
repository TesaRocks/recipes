import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable()
export class ShoppingService {
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Tomatoes', 50),
  ];
  getIng() {
    return this.ingredients.slice();
  }
  addIng(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient[]): void {
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
