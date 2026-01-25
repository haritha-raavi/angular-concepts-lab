import { Component, ElementRef, EventEmitter, Input, Output,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText:string="";
  @Output()
  SearchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.SearchTextChanged.emit(this.searchText);
  // }

  @ViewChild('searchInput') searchInputEl:ElementRef
  updateSearchText(){
      this.searchText = this.searchInputEl.nativeElement.value;
      this.SearchTextChanged.emit(this.searchText);
  }
}
