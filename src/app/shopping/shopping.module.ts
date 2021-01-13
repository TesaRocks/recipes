import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [{ path: 'shopping', component: ShoppingComponent }];

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [FormsModule, RouterModule.forChild(routes)],
})
export class ShoppingModule {}
