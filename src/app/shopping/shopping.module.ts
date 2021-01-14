import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';

const routes: Routes = [{ path: '', component: ShoppingComponent }];

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [FormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [LoggingService],
})
export class ShoppingModule {}
