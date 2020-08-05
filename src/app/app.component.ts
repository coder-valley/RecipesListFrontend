import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodieMe';
  myControl = new FormControl();

  public allRecipes: any[] = [];

  toHighlight:string =  ''

  filteredOptions: Observable<string[]>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    const allRecipes = localStorage.getItem('allRecipes')

    this.allRecipes = JSON.parse(allRecipes)
    
    localStorage.setItem('allRecipes', JSON.stringify(this.allRecipes))


    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    this.toHighlight = filterValue;
    return this.allRecipes.filter(recipes => recipes.name.toLowerCase().includes(filterValue));
  }

  public navToRoute: any = (recipeDetails) => {
    const recipeName = recipeDetails.option.value

    this.allRecipes.forEach(element => {
      if(element.name === recipeName) {
                
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/partRecipes',element.id]));
  
      }
    });
  }

}
