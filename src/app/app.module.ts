import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

import { Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { ShopService } from '../app/shop.service';

const routes: Routes = [
      { path: 'header', component: HeaderComponent },
      { path: 'recipes', component: RecipesComponent },
      { path: 'shopping-list', component: ShoppingListComponent },
      { path: 'recipe-detail', component: RecipeDetailComponent },
      { path: 'recipe-list', component: RecipeListComponent,
    children:[
      {path:'recipe2',component:RecipeItemComponent}
    ] }
      
    ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(routes)
  ],
  providers: [ ShopService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
