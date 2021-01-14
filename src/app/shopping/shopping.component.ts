import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [],
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingChange: Subscription;

  constructor(
    private shoppingService: ShoppingService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIng();
    this.ingChange = this.shoppingService.ingredientsChanged.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = ing;
      }
    );
    this.loggingService.printLog('hellow from Shoppingcomponent ngOniit');
  }
  onEditItem(id: number) {
    this.shoppingService.startedEditing.next(id);
  }
  ngOnDestroy() {
    this.ingChange.unsubscribe();
  }
}
