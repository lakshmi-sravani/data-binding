import { Component, OnInit } from '@angular/core';

import { ShopService } from '../shop.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
name1:string;
name2:number;
temp:{};
items=[{}];
  add(){
    debugger
  console.log(this.name1);
  // let s = this.name1;
  this.items=this.shop.add(this.name1,this.name2);
  console.log(this.items);

}
 get(){
  this.shop.get();
  }
 
  constructor(private shop:ShopService) { }

  ngOnInit() {
    
  }

}


