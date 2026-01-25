import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDB } from '../../../Models/ProductDB';
@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input()
  product:ProductDB;
}
