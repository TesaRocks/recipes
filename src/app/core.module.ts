import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppingService } from './shopping/shopping.service';
import { RecipeService } from './recipe/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  providers: [
    ShoppingService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
