import { Component, Input } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { ProductDB } from '../../Models/ProductDB';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  @Input() productListComp: ProductList =undefined;
  product:ProductDB;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }
}
