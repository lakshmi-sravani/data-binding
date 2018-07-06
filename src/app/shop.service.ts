import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  name1:string='';
  name2:number;
  // z:number;
  items:Ingredient[]=[
    new Ingredient("apple",5),
    new Ingredient("tomato",10)
  ];
  add(name1,name2,z){
 if(z==undefined){
let x= new Ingredient(name1,name2);
    this.items.push(x);
    this.name1='';
    this.name2;
    
    return this.items;
 }
  else{

   let x= new Ingredient(name1,name2);

   this.items[z]=x;

    return this.items;
  }  
  }

  
  constructor() { }
}





