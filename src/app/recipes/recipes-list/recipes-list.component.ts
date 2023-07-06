import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is simply a test','https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.loveandlemons.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fplant-based-recipes.jpg&tbnid=4ka8PzyFi1XoqM&vet=12ahUKEwjW7cT1vvb_AhV-Fd4AHZCUAh0QMygJegUIARCOAg..i&imgrefurl=https%3A%2F%2Fwww.loveandlemons.com%2Fplant-based-recipes%2F&docid=ohkfZAcBfNPHrM&w=1160&h=1001&q=recipes%20image&ved=2ahUKEwjW7cT1vvb_AhV-Fd4AHZCUAh0QMygJegUIARCOAg')
];
  constructor(){}

  ngOnInit() {
    
  }

}
