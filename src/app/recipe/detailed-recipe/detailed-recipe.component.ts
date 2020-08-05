import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detailed-recipe',
  templateUrl: './detailed-recipe.component.html',
  styleUrls: ['./detailed-recipe.component.css']
})
export class DetailedRecipeComponent implements OnInit {

  public recipeId: any;
  public recipeData: any;

  constructor(private route: ActivatedRoute, private appService: AppServiceService, private _location: Location) { }

  ngOnInit(): void {
    console.log("hello there")
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeId = +params['id'];
        }
      );
      this.getDetailedRecipe()
  }
  
  ngOnChanges(changes) {
    console.log(changes,"changes hain yeh")
    this.getDetailedRecipe()
    // changes.prop contains the old and the new value...
  }

  public getDetailedRecipe: any = () => {
    this.appService.postFunction('http://starlord.hackerearth.com/recipe', this.recipeId)
    .subscribe( (backEndResponse) => {
      this.recipeData = backEndResponse.filter(recipe => recipe.id === this.recipeId)
    })
  }

  public comment: any = () => {
    
  }

  public backButton: any = () => {
    this._location.back()
  }

}
