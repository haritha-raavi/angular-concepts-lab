import { Component, ElementRef, signal,ViewChildren,QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName:string="";
  protected readonly title = signal('angular-view-children');
  @ViewChildren('inputEl') inputElements:QueryList<ElementRef>;
  show(){
    let name:string="";
    this.inputElements.forEach((el)=>{
      name += el.nativeElement.value+' ';
    });
    name.trim();
    this.fullName=name;
  }

}
