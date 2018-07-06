import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
name1:string='';
name2:number;
items:Ingredient[]=[
  new Ingredient("apple",5),
  new Ingredient("tomato",10)
];
add(name1,name2){
 let x= new Ingredient(name1,name2);
this.items.push(x);
this.name1='';
this.name2;
return this.items;
}
 get(){
  this.items.splice(0,2)
  }
  constructor() { }
}





