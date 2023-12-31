import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataSorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ngcg-recipe-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ngcg-recipe-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map((recipes) =>
          recipes?.map((recipe) => ({
            ...recipe,
            ingredients: recipe.ingredients || [],
          }))
        ),
        tap((recipes) => this.recipeService.setRecipes(recipes))
      );
  }
}
