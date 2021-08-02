import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Jellof Rice', 'Correct Nigerian Jellof', 'https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-recipe_.jpg'),
    new Recipe('Jellof Rice', 'Correct Nigerian Jellof', 'https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-recipe_.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
