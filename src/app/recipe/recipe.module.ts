import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DetailedRecipeComponent } from './detailed-recipe/detailed-recipe.component';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [RecipeListComponent, DetailedRecipeComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
})
export class RecipeModule { }
