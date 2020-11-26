import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIng();
    this.shoppingService.ingredientsChanged.subscribe((ing: Ingredient[]) => {
      this.ingredients = ing;
    });
  }
}
