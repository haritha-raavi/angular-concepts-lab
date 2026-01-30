import { CommonModule } from '@angular/common';
import { Demo } from './demo/demo';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Demo,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-lifecycle-hooks');
  msgArray: string[] = ['Hi', 'Hello'];
  inputVal: string = '';
  inputVal2: string = '';
  toDestroy:boolean =false;

  @ViewChild('inputEl2') tempref: ElementRef;

  constructor() {
    console.log('App Constructor Called');
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
    this.inputVal2 = this.tempref.nativeElement.value;
    this.msgArray.push(inputEl.value);
  }
  destroy(){
    this.toDestroy=!this.toDestroy;
  }
  //  ngAfterViewInit(): void {
  //   // By the time it is executed all the child component life cycle hook methods will execute before this .
  //   console.log('ngAfterViewInit Hook of App Component called');
  //  }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked Hook of App Component called');
  // }
}