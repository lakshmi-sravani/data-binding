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
items:Ingredient[];
 z:number;
  add(){
  //  debugger;
  console.log(this.name1);
  console.log(this.z);
  // let s = this.name1;
 
  this.items=this.shop.add(this.name1,this.name2,this.z);


  console.log(this.items);

}
listen(item,i){
  
  console.log(item);
  console.log(i);
  this.name1=item.name1;
  this.name2=item.name2;
  this.z=i;
  // this.items.splice(ind,1);
}
 delete(){

   this.items.splice(this.z,1);
  
  }
 
  constructor(private shop:ShopService) { }

  ngOnInit() {
    
  }

}


