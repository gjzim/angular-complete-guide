import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipesChangedSub!: Subscription;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSub = this.recipeService.recipesChanged.subscribe((recipes) => this.recipes = recipes);
  }

  onNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }

  ngOnDestroy() {
    this.recipesChangedSub.unsubscribe();
  }
}
