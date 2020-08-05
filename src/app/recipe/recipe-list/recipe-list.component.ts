import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public allRecipes: any = [];

  public detailedRecipeItem: any;

  constructor(private appService: AppServiceService, private router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllRecipesList();
  }

  public getAllRecipesList: any = () => {
    const backEndResponse = this.appService.getData()

    if(backEndResponse) {
      localStorage.setItem('allRecipes', JSON.stringify(backEndResponse))
      this.allRecipes = _.groupBy(backEndResponse, 'category')
      // console.log(this.allRecipes)
    }
  }

  public detailedRecipe: any = (recipeId, modalStatus) => {
    console.log(modalStatus)
    if(modalStatus === 'openModal') {
      this.openDialog(recipeId,'openModal')
    }
    if(modalStatus === 'none') {
      this.router.navigate(['/partRecipes', recipeId])
    }

  }

  openDialog(recipeId,status) {
    const element = document.getElementById('myModal');
    
    if( status === 'openModal') {
      const allRecipes = JSON.parse(localStorage.getItem('allRecipes'))
      console.log(allRecipes,'546768')
      this.detailedRecipeItem = allRecipes.filter(recipes => recipes.id === recipeId)
      element.style.display = 'block'

      console.log(this.detailedRecipeItem,'-=-=')
    }
    if(status === 'closeModal') {
      element.style.display = 'none'
    }
  }

}