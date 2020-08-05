import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedRecipeComponent } from './recipe/detailed-recipe/detailed-recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeModule } from './recipe/recipe.module';

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent, pathMatch: 'full'},
  {path: 'partRecipes/:id', component: DetailedRecipeComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: '*', redirectTo: 'recipes', pathMatch: 'full'},
  {path: '**', redirectTo: 'recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), RecipeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
