import { Component ,ViewChild} from '@angular/core';
import { Search } from './search/search';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { FeaturedBrands } from "./featured-brands/featured-brands";
@Component({
  selector: 'app-container',
  imports: [Search, CommonModule, ProductList, ProductDetails, FeaturedBrands],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
 names:string[] = ["John","Smith","Joy"];
 searchText:string="";

setSearchText(value:string){
  this.searchText=value;
}


@ViewChild(ProductList) productListComponent:ProductList
 /* cartValue:number =0;
   product ={
    name: "iphone x",
    price:789,
    color:"matte black",
    discount:8.5,
    inStock:5,
    imagePath:"/images/iphone.png"
   }

   getDiscountedPrice(){
    return this.product.price - (this.product.price*this.product.discount/100)
   }


  //  Event Binding
  //  OnNameChange(event:any){
  //   this.name = event.target.value;
  //  }

  OnIncrement(){
    if(this.cartValue < this.product.inStock)
    this.cartValue++;

  }

  OnDecrement(){
    if(this.cartValue>0)
    this.cartValue--;
  } */
}
